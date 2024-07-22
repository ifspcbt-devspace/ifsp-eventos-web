import { AuthService } from "./auth.service";

export class UserService {
  authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async getUser(id: string) {
    const response = await fetch(`${process.env.API_BASE_URL}/user/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await this.authService.getToken()}`,
      },
    });

    const data = await response.json();
    if (response.status !== 200) {
      if (response.status === 400)
        return { error: data.errors ? data.errors[0].message : data.message };
      if (response.status === 401) return { error: "Faça o login antes" };
      if (response.status === 404) return { error: "Usuário não encontrado" };
      if (response.status === 403) return { error: "Acesso negado" };
      return { error: "Ocorreu um erro interno" };
    }

    return {
      id: data.id,
      email: data.email,
      name: data.name,
      birth_date: data.birth_date,
      cpf_initials: data.cpf_initials,
      phone_number_initials: data.phone_number_initials,
      company_id: data.company_id,
      role: data.role,
      username: data.username,
    };
  }
}
