interface ButtonProps {
  text?: string;
  className: string;
  icon?: string;
  color?: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export const Button = (prop: ButtonProps) => {
  return (
    <button className={prop.className} style={{ background: prop.color }} onClick={prop.onClick}>
      {prop.icon && <img src={prop.icon} alt="Button icons" />}
      {prop.text}
    </button>
  );
};
