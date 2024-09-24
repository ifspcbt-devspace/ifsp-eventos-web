"use server";

import { EventService } from "@/services/event.service";

export async function searchEvents(query?: string, max?: number) {
  const eventService = new EventService();
  return await eventService.getEvents(query, max);
}

export async function getEvent(id: string) {
  const eventService = new EventService();
  return await eventService.getEvent(id);
}

export async function downloadThumbnail(id: string) {
  const eventService = new EventService();
  return await eventService.getThumbnail(id);
}
