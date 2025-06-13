import { AuthService } from './auth.service';

export class UserService {
  authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async updateUser(data: { document: string }) {
    const session = await this.authService.getSession();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/${session?.user.id}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          name: session?.user.name,
          bio: '',
          birth_date: session?.user.birth_date,
          document: data.document,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );

    const json = await response.json();
    if (response.status !== 200) {
      if (response.status === 400)
        return { error: json.errors ? json.errors[0].message : json.message };
      if (response.status === 401) return { error: 'Faça o login antes' };
      if (response.status === 404) return { error: 'Usuário não encontrado' };
      if (response.status === 403) return { error: 'Acesso negado' };
      return { error: 'Ocorreu um erro interno ao atualizar o usuário' };
    }

    const user = {
      id: json.id,
      email: json.email,
      name: json.name,
      birth_date: json.birth_date,
      document_initials: json.document_initials,
      phone_number_initials: json.phone_number_initials,
      company_id: json.company_id,
      role: json.role,
      username: json.username,
    };
    if (session) {
      session.user = user;
      await this.authService.setSession(session);
    }
    return user;
  }

  async getUser(id: string) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${await this.authService.getToken()}`,
        },
      },
    );

    const data = await response.json();
    if (response.status !== 200) {
      if (response.status === 400)
        return { error: data.errors ? data.errors[0].message : data.message };
      if (response.status === 401) return { error: 'Faça o login antes' };
      if (response.status === 404) return { error: 'Usuário não encontrado' };
      if (response.status === 403) return { error: 'Acesso negado' };
      return { error: 'Ocorreu um erro interno ao consultar o usuário' };
    }

    return {
      id: data.id,
      email: data.email,
      name: data.name,
      birth_date: data.birth_date,
      document_initials: data.document_initials,
      phone_number_initials: data.phone_number_initials,
      company_id: data.company_id,
      role: data.role,
      username: data.username,
    };
  }
}
