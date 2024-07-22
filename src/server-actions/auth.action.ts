"use server";

import { AuthService } from "@/services/auth.service";

export async function login(data: FormData) {
  const authService = new AuthService();
  const login = data.get("email") as string;
  const password = data.get("password") as string;
  return await authService.login({ email: login, password });
}

export async function logout() {
  const authService = new AuthService();
  authService.logout();
}

export async function register(data: FormData) {
  const authService = new AuthService();
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const username = data.get("username") as string;
  const password = data.get("password") as string;
  const birth_date = data.get("birth_date") as string;
  if (birth_date === "") return { error: "Data de nascimento inválida" };
  const cpf = data.get("cpf") as string;
  const phone_number = data.get("phone_number") as string;
  return await authService.register({
    name,
    email,
    username,
    password,
    birth_date,
    cpf,
    phone_number,
  });
}

export async function confirmAccount(token: string) {
  const authService = new AuthService();
  const response = await authService.confirmAccount(token);
  return response;
}

export async function getSession() {
  const authService = new AuthService();
  return await authService.getSession();
}

export async function isAuthenticated() {
  const authService = new AuthService();
  const isAuth = await authService.isAuthenticated();
  if (!isAuth) authService.logout();
  return isAuth;
}
