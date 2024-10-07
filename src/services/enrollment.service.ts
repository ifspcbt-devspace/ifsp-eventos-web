import { AuthService } from "./auth.service";
import { PaymentService } from "./payment.service";

export class EnrollmentService {
  authService: AuthService;
  paymentService: PaymentService;

  constructor() {
    this.authService = new AuthService();
    this.paymentService = new PaymentService();
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
      if (response.status === 401) return { error: "Não autorizado" };
      return { error: "Ocorreu um erro interno" };
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
    const response = await fetch(`${process.env.API_BASE_URL}/enrollment`, {
      method: "POST",
      body: JSON.stringify({
        event_id: eventId,
        ticket_sale_id: ticketSaleId,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await this.authService.getToken()}`,
      },
    });

    if (response.status !== 201) {
      const data = await response.json();
      if (response.status === 400)
        return { error: data.errors ? data.errors[0].message : data.message };
      if (response.status === 401) return { error: "faça o login antes" };
      return { error: "ocorreu um erro interno" };
    }

    const data = await response.text();

    const preferenceURL = await this.paymentService.createPreference(data);

    return {
      ticketId: data,
      preferenceURL: preferenceURL,
    };
  }

  async upsertEnroll(eventId: string, ticketSaleId: string) {
    const response = await fetch(`${process.env.API_BASE_URL}/enrollment/upsert`, {
      method: "POST",
      body: JSON.stringify({
        event_id: eventId,
        ticket_sale_id: ticketSaleId,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await this.authService.getToken()}`,
      },
    });

    if (response.status !== 201) {
      const data = await response.json();
      if (response.status === 400)
        return { error: data.errors ? data.errors[0].message : data.message };
      if (response.status === 401) return { error: "faça o login antes" };
      return { error: "ocorreu um erro interno" };
    }

    const data = await response.text();

    const urlParams = new URLSearchParams(new URL(data).search);
    const prefId = urlParams.get("pref_id");

    return {
      preferenceURL: prefId
    };
  }
}
