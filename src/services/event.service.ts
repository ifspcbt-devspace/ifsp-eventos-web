import { parseAbsoluteToLocal } from "@internationalized/date";

export class EventService {
  async getEvents() {
    const response = await fetch(`${process.env.API_BASE_URL}/event/search`, {
      method: "POST",
      body: JSON.stringify({
        filters: [
          {
            filter_key: "name",
            value: "",
            operation: "ic",
            data_option: "any",
          },
        ],
        sorts: [],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.status !== 200) {
      if (response.status === 401) return { error: "Não autorizado" };
      return { error: "Ocorreu um erro interno" };
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
        status: item.status,
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
}
