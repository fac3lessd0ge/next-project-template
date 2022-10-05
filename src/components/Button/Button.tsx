import { FC, useState } from "react";

export interface ButtonProps {
  active?: boolean;
}

export const Button: FC<ButtonProps> = ({ active = false }) => {
  const [isActive, setIsActive] = useState<boolean>(active);

  const color = isActive ? " bg-emerald-700" : " bg-gray-700";

  return (
    <button
      data-testid="Button"
      onClick={() => setIsActive(() => !isActive)}
      className={
        "  w-min rounded-md px-4 py-2 font-bold text-gray-200 transition-all duration-75 hover:bg-opacity-80" +
        color
      }
    >
      <p className="pointer-events-none block">Hello</p>
    </button>
  );
};
