"use server";

import { EventService } from "@/services/event.service";

export async function searchEvents() {
  const eventService = new EventService();
  return await eventService.getEvents();
}
