"use server";

import { AuthService } from "@/services/auth.service";

export async function login(data: FormData) {
  const authService = new AuthService();
  const login = data.get("email") as string;
  const password = data.get("password") as string;
  return await authService.login({ email: login, password });
}

export async function register(data: FormData) {
  const authService = new AuthService();
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const username = data.get("username") as string;
  const password = data.get("password") as string;
  const birth_date = data.get("birth_date") as string;
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