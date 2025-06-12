import {addToast, ToastProps} from "@heroui/react";
import {ToastOptions} from "@react-stately/toast";


export function generateRandomUsername(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let username = '';

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    username += characters[randomIndex];
  }

  return username;
}

type ShowToastParams = {
  title?: string;
  description: string;
  props?: ToastOptions & ToastProps;
};

type ToastSeverity = "default" | "success" | "danger" | "warning";

const showToast = (
  severity: ToastSeverity,
  {title, description, props}: ShowToastParams
) => {
  addToast({
    title,
    description,
    severity,
    color: severity,
    ...props,
  });
};

export const notifyInfo = (params: ShowToastParams) =>
  showToast("default", params);

export const notifySuccess = (params: ShowToastParams) =>
  showToast("success", params);

export const notifyError = (params: ShowToastParams) =>
  showToast("danger", params);

export const notifyWarn = (params: ShowToastParams) =>
  showToast("warning", params);
