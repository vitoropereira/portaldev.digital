import { toast } from "react-toastify";

export function toastNotification() {
  const notifySuccess = (message: string) =>
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 7000,
    });
  const notifyError = (message: string) =>
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 7000,
    });

  const notifyWarning = (message: string) =>
    toast.warning(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 7000,
    });

  const notifyInfo = (message: string) =>
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 7000,
    });

  return {
    notifySuccess,
    notifyError,
    notifyWarning,
    notifyInfo,
  };
}
