"use server";

import { TicketService } from "@/services/ticket.service";

export async function consumeTicket(id: string) {
  const ticketService = new TicketService();
  return await ticketService.consume(id);
}

export async function getTicket(id: string) {
  const ticketService = new TicketService();
  return await ticketService.get(id);
}
