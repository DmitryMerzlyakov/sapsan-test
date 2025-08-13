import style from "./style.module.css";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  disabled?: boolean;
}

export const Button = ({
  children,
  disabled = false,
  onClick,
  type = "submit",
}: ButtonProps) => {
  return (
    <button
      className={style.button}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
