import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType?: "success" | "danger";
}

export function Button({ text, buttonType, ...rest }: Props) {
  let color = "bg-yellow-500";
  let colorHover = "bg-yellow-700";

  switch (buttonType) {
    case "success":
      color = "bg-ignite-500";
      colorHover = "bg-ignite-700";
      break;

    case "danger":
      color = "bg-red-500";
      colorHover = "bg-red-700";
      break;

    default:
      break;
  }
  return (
    <button
      className={`${color} px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:${colorHover}`}
      {...rest}
    >
      {text}
    </button>
  );
}
