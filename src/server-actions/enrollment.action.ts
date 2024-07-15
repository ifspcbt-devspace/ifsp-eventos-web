"use server";

import { EnrollmentService } from "@/services/enrollment.service";

export async function listUserEnrollments() {
  const enrollmentService = new EnrollmentService();
  return await enrollmentService.listCustomerEnrollments();
}

export async function enrollUser(eventId: string) {
  const enrollmentService = new EnrollmentService();
  return await enrollmentService.enroll(eventId);
}
