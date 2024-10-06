import {Bounce, ToastOptions} from "react-toastify";

export const toastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  pauseOnFocusLoss: false,
  theme: "light",
  transition: Bounce,
};