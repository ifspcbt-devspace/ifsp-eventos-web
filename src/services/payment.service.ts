import { AuthService } from "./auth.service";

export class PaymentService {
  authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async createPreference(ticketId: string) {
    const response = await fetch(
      `${process.env.API_BASE_URL}/payment/preference/ticket/${ticketId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await this.authService.getToken()}`,
        },
      }
    );

    if (response.status !== 200) {
      const data = await response.json();
      if (response.status === 400)
        return { error: data.errors ? data.errors[0].message : data.message };
      if (response.status === 401) return { error: "faça o login antes" };
      return { error: "ocorreu um erro interno" };
    }

    const data = await response.text();
    const urlParams = new URLSearchParams(new URL(data).search);
    const prefId = urlParams.get("pref_id");

    return prefId;
  }
}
