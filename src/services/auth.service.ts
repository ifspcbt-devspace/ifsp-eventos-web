import { SessionData } from "@/models";
import { atob } from "buffer";
import { sealData, unsealData } from "iron-session";
import { cookies } from "next/headers";

export class AuthService {
  pass: string;

  constructor() {
    this.pass = process.env.IRON_SESSION_PASSWORD as string;
  }

  async register(input: {
    name: string;
    email: string;
    username: string;
    password: string;
    birth_date: string;
    cpf: string;
    phone_number: string;
  }) {
    const response = await fetch(`${process.env.API_BASE_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        username: input.username,
        password: input.password,
        birth_date: input.birth_date,
        cpf: input.cpf,
        phone_number: input.phone_number,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 201) {
      const data = await response.json();
      if (response.status === 409) return { error: "Usuário já existe" };
      if (response.status === 400)
        return { error: data.errors ? data.errors[0].message : data.message };
      return { error: "Ocorreu um erro interno" };
    }
  }

  async confirmAccount(token: string) {
    const response = await fetch(
      `${process.env.API_BASE_URL}/auth/activate/${token}`,
      {
        method: "POST",
      }
    );

    if (response.status !== 204) {
      const data = await response.json();
      if (response.status === 404) return { error: "Token não encontrado" };
      if (response.status === 400)
        return { error: data.errors ? data.errors[0].message : data.message };
      return { error: "Ocorreu um erro interno" };
    }
  }

  async login(input: { email: string; password: string }) {
    const response = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        login: input.email,
        password: input.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.status === 401) return { error: "Credenciais inválidas" };
    if (response.status === 404) return { error: "Usuário não encontrado" };
    if (response.status === 400)
      return { error: data.errors ? data.errors[0].message : data.message };
    if (!response.ok) return { error: "Ocorre um erro interno" };

    const session: SessionData = {
      access_token: data.token,
      user: {
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
        birth_date: data.user.birth_date,
        cpf_initials: data.user.cpf_initials,
        phone_number_initials: data.user.phone_number_initials,
        company_id: data.user.company_id,
        role: data.user.role,
        username: data.user.username,
      },
    };
    await this.setSession(session);
  }

  async getSession() {
    const encryptedSession = cookies().get("auth_session")?.value;
    const session = encryptedSession
      ? ((await unsealData(encryptedSession, {
          password: this.pass,
        })) as string)
      : null;
    return session ? (JSON.parse(session) as SessionData) : null;
  }

  async setSession(session: SessionData) {
    const encryptedSession = await sealData(JSON.stringify(session), {
      password: this.pass,
    });
    cookies().set("auth_session", encryptedSession, {
      httpOnly: true,
      domain: ".srv563244.hstgr.cloud",
      path: "/",
      secure: false,
      sameSite: "strict",
      expires: new Date(this.getExpiration(session.access_token)),
    });
  }

  async getToken() {
    const session = await this.getSession();
    return session?.access_token;
  }

  async isAuthenticated() {
    const session = await this.getSession();
    if (!session) return false;
    const exp = this.getExpiration(session.access_token);
    if (!exp) return true;
    const now = new Date().getTime();
    return now < exp;
  }

  getExpiration(token: string | null = null) {
    if (!token) return 0;
    const [, payload] = token.split(".");
    const data = JSON.parse(atob(payload));
    return data.exp * 1000;
  }

  logout() {
    cookies().delete({
      name: "auth_session",
      domain: ".srv563244.hstgr.cloud",
      path: "/",
    });
  }
}
