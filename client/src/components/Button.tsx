import { FC } from "react";

type ButtonType = {
  btnType?: "submit" | "reset" | "button" | undefined;
  title?: string;
  handleClick?: () => void;
  styles?: string;
};

const Button: FC<ButtonType> = ({ btnType, title, handleClick, styles }) => (
  <button
    type={btnType}
    className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
    onClick={handleClick}
  >
    {title}
  </button>
);

export default Button;
