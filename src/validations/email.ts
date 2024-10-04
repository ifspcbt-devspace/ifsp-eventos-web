import validator from "validator";

export function isEmail(email: string): boolean {
  return validator.isEmail(email);
}