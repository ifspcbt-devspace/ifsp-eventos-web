'use server';

import { AuthService } from '@/services/auth.service';

export async function login(data: FormData) {
  const authService = new AuthService();
  const login = data.get('email') as string;
  const password = data.get('password') as string;
  return await authService.login({ email: login, password });
}

export async function logout() {
  const authService = new AuthService();
  await authService.logout();
}

export async function register(data: FormData) {
  const authService = new AuthService();
  const name = data.get('name') as string;
  const email = (data.get('email') as string).trim();
  const username = (data.get('username') as string).trim();
  const password = data.get('password') as string;
  const birth_date = data.get('birth_date') as string;
  if (birth_date === '') return { error: 'Data de nascimento inválida' };
  const document = data.get('document') as string;
  const phone_number = data.get('phone_number') as string;
  return await authService.register({
    name,
    email,
    username,
    password,
    birth_date,
    document,
    phone_number,
  });
}

export async function confirmAccount(token: string) {
  const authService = new AuthService();
  return await authService.confirmAccount(token);
}

export async function getSession() {
  const authService = new AuthService();
  return await authService.getSession();
}

export async function isAuthenticated() {
  const authService = new AuthService();
  const isAuth = await authService.isAuthenticated();
  if (!isAuth) await authService.logout();
  return isAuth;
}
