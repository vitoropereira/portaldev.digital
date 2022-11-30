import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isSelected: boolean;
}

export function Option({ title, isSelected = false, ...rest }: Props) {
  const bgColor = isSelected ? "bg-gray-600" : "transparent";

  return (
    <button className="h-full w-full" {...rest}>
      <div
        className={`h-full w-full flex items-center justify-center rounded-sm ${bgColor}`}
      >
        <span className="text-gray-100 text-base">{title}</span>
      </div>
    </button>
  );
}
