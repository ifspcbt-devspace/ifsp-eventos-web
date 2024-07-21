import { AuthService } from "./auth.service";

export class TicketService {
  authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async consume(id: string) {
    const response = await fetch(
      process.env.API_BASE_URL + `/ticket/${id}/check`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${await this.authService.getToken()}`,
        },
      }
    );

    if (response.status !== 201) {
      const data = await response.json();
      if (response.status === 400)
        return { error: data.errors ? data.errors[0].message : data.message };
      if (response.status === 401) return { error: "Faça o login antes" };
      return { error: "Ocorreu um erro interno" };
    }
  }
}
