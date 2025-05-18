import {AuthService} from "./auth.service";

export class EnrollmentService {
  authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async listCustomerEnrollments() {
    const response = await fetch(
      `${process.env.API_BASE_URL}/enrollment/list`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${await this.authService.getToken()}`,
        },
      }
    );

    const data = await response.json();
    if (response.status !== 200) {
      if (response.status === 401) return {error: "Não autorizado para listar inscrições"};
      return {error: "Ocorreu um erro interno ao consultar as inscrições"};
    }

    data.items = data.items.map((item: any) => {
      return {
        id: item.id,
        event_id: item.event_id,
        customer_id: item.customer_id,
        status: item.status,
        created_at: item.created_at,
        updated_at: item.updated_at,
      };
    });

    return data.items;
  }

  async enroll(eventId: string, ticketSaleId: string) {
    const response = await fetch(`${process.env.API_BASE_URL}/order/pay`, {
      method: "POST",
      body: JSON.stringify({
        event_id: eventId,
        items: [
          {ticket_sale_id: ticketSaleId}
        ],
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await this.authService.getToken()}`,
      },
    });

    if (response.status !== 201) {
      const data = await response.json();
      if (response.status === 400)
        return {error: data.errors ? data.errors[0].message : data.message};
      if (response.status === 401) return {error: "Não autorizado para inscrever-se"};
      return {error: "Ocorreu um erro interno ao inscrever-se"};
    }

    const data = await response.json();
    const paymentUrl = data.payment_url;
    const urlParams = new URLSearchParams(new URL(paymentUrl).search);
    const preferenceId = urlParams.get("pref_id");

    return {
      orderId: data.id,
      preferenceId: preferenceId,
    };
  }

}
