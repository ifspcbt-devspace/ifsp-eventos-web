"use server";

import { UserService } from "@/services/users.service";

export async function getUser(id: string) {
  const userService = new UserService();
  return await userService.getUser(id);
}
