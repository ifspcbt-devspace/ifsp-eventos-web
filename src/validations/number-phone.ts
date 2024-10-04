import parsePhoneNumberFromString from "libphonenumber-js";

export const isNumberPhone = (number: string) => {
  const phoneNumber = parsePhoneNumberFromString(number, "BR");
  return phoneNumber ? phoneNumber.isValid() : false;
};