import { Ticket } from "@/models";
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
      if (response.status === 404) return { error: "Ticket não encontrado" };
      if (response.status === 403) return { error: "Acesso negado" };
      return { error: "Ocorreu um erro interno" };
    }
  }

  async get(id: string) {
    const response = await fetch(process.env.API_BASE_URL + `/ticket/${id}`, {
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
      if (response.status === 404) return { error: "Ticket não encontrado" };
      if (response.status === 403) return { error: "Acesso negado" };
      return { error: "Ocorreu um erro interno" };
    }

    const ticket: Ticket = {
      id: data.id,
      event_id: data.event_id,
      user_id: data.user_id,
      description: data.description,
      valid_in: new Date(data.valid_in),
      expired_in: new Date(data.expired_in),
      status: data.status,
      code: data.code,
      last_time_consumed: new Date(data.last_time_consumed),
    };
    return ticket;
  }
}
