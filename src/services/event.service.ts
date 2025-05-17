import { parseAbsoluteToLocal } from "@internationalized/date";
import { Event, EventStatus, TicketSale } from "@/models";

export class EventService {
  async getEvents(query?: string, max?: number) {
    const response = await fetch(
      `${process.env.API_BASE_URL}/event/search?perPage=${max || 10}`,
      {
        method: "POST",
        body: JSON.stringify({
          filters: [
            {
              filter_key: "name",
              value: query || "",
              operation: "ic",
              data_option: "any",
            },
          ],
          sorts: [
            {
              sort: "initDate",
              direction: "asc",
            },
          ],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    if (response.status !== 200) {
      if (response.status === 401) return { error: "Não autorizado" };
      return { error: "Ocorreu um erro interno ao consultar os eventos" };
    }

    data.items = data.items.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        company_id: item.company_id,
        init_date: parseAbsoluteToLocal(
          item.init_date + "T00:00:00-03:00"
        ).toDate(),
        end_date: parseAbsoluteToLocal(
          item.end_date + "T00:00:00-03:00"
        ).toDate(),
        status: EventStatus[data.status as keyof typeof EventStatus],
        address: {
          street: item.address.street,
          number: item.address.number,
          complement: item.address.complement,
          neighborhood: item.address.neighborhood,
          city: item.address.city,
          state: item.address.state,
          country: item.address.country,
          zip_code: item.address.zip_code,
        },
      };
    });

    return data.items;
  }

  async getEvent(id: string): Promise<{ error: string } | Event> {
    const response = await fetch(`${process.env.API_BASE_URL}/event/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.status !== 200) {
      if (response.status === 401) return { error: "Não autorizado" };
      return { error: "Ocorreu um erro interno ao consultar o evento" };
    }

    return {
      id: data.id,
      name: data.name,
      description: data.description,
      company_id: data.company_id,
      init_date: parseAbsoluteToLocal(
        data.init_date + "T00:00:00-03:00"
      ).toDate(),
      end_date: parseAbsoluteToLocal(
        data.end_date + "T00:00:00-03:00"
      ).toDate(),
      status: EventStatus[data.status as keyof typeof EventStatus],
      address: {
        street: data.address.street,
        number: data.address.number,
        complement: data.address.complement,
        neighborhood: data.address.neighborhood,
        city: data.address.city,
        state: data.address.state,
        country: data.address.country,
        zip_code: data.address.zip_code,
      },
    };
  }

  async getThumbnail(id: string) {
    const response = await fetch(
      `${process.env.API_BASE_URL}/event/${id}/thumbnail`,
      {
        method: "GET",
      }
    );

    if (response.status !== 200) {
      const data = await response.json();
      if (response.status === 401) return { error: "Não autenticado" };
      if (response.status === 404) return { error: "Thumbnail não encontrada" };
      if (response.status === 403) return { error: "Acesso negado" };
      return { error: data.message };
    }

    const blob = await response.blob();

    return blob.text();
  }

  async getTicketSales(id: string) : Promise<{error: string} | TicketSale[]> {
    const response = await fetch(
      `${process.env.API_BASE_URL}/event/${id}/ticketSale`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    const data = await response.json();
    if (response.status !== 200) {
      if (response.status === 401) return { error: "Não autorizado" };
      return { error: "Ocorreu um erro interno ao consultar os ingressos a venda" };
    }

    data.items = data.items.map((item: any) => {
      return {
        id: item.id,
        event_id: item.event_id,
        name: item.name,
        description: item.description,
        price: item.price,
        entries: item.entries,
        active: item.active,
      };
    });

    return data.items;
  }
}
