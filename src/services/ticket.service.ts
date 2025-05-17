import {Ticket, TicketStatus} from "@/models";
import {AuthService} from "./auth.service";
import {parseAbsoluteToLocal} from "@internationalized/date";

export class TicketService {
  authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async consume(id: string) {
    const response = await fetch(
      `${process.env.API_BASE_URL}/ticket/${id}/check`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${await this.authService.getToken()}`,
        },
      }
    );

    if (response.status !== 202) {
      const data = await response.json();
      if (response.status === 400)
        return {error: data.errors ? data.errors[0].message : data.message};
      if (response.status === 401) return {error: "Faça o login antes"};
      if (response.status === 404) return {error: "Ticket não encontrado"};
      if (response.status === 403) return {error: "Acesso negado"};
      return {error: "Ocorreu um erro interno ao conferir o ticket"};
    }
    return {}
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
        return {error: data.errors ? data.errors[0].message : data.message};
      if (response.status === 401) return {error: "Faça o login antes"};
      if (response.status === 404) return {error: "Ticket não encontrado"};
      if (response.status === 403) return {error: "Acesso negado"};
      return {error: "Ocorreu um erro interno ao consultar o ticket"};
    }

    return {
      id: data.id,
      event_id: data.event_id,
      user_id: data.user_id,
      description: data.description,
      valid_in: parseAbsoluteToLocal(data.valid_in + "T00:00:00-03:00").toDate(),
      expired_in: parseAbsoluteToLocal(data.expired_in + "T00:00:00-03:00").toDate(),
      status: TicketStatus[data.status as keyof typeof TicketStatus],
      code: data.code,
      last_time_consumed: data.last_time_consumed,
    };
  }

  async search(id: string, terms: string = "", page: number = 0): Promise<{ items: Ticket[], total: number } | {
    error: string
  }> {
    const response = await fetch(
      `${process.env.API_BASE_URL}/ticket/search/user/${id}?terms=${terms}&page=${page}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${await this.authService.getToken()}`,
        },
      }
    );

    const data = await response.json();
    if (response.status !== 200) {
      if (response.status === 400)
        return {error: data.errors ? data.errors[0].message : data.message};
      if (response.status === 401) return {error: "Faça o login antes"};
      if (response.status === 404) return {error: "Usuário não encontrado"};
      if (response.status === 403) return {error: "Acesso negado"};
      return {error: "Ocorreu um erro interno ao consultar os ingressos"};
    }


    const tickets: Ticket[] = data.items.map((ticket: any) => {
      return {
        id: ticket.id,
        event_id: ticket.event_id,
        user_id: ticket.user_id,
        description: ticket.description,
        valid_in: parseAbsoluteToLocal(ticket.valid_in + "T00:00:00-03:00").toDate(),
        expired_in: parseAbsoluteToLocal(ticket.expired_in + "T00:00:00-03:00").toDate(),
        status: TicketStatus[ticket.status as keyof typeof TicketStatus],
        code: ticket.code,
        last_time_consumed: ticket.last_time_consumed,
      }
    });

    return {items: tickets, total: data.total};
  }
}
