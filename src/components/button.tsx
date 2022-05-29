interface ButtonProps {
  text: string;
  className: string;
  icon?: string;
  color?: string;
}

export const Button = (prop: ButtonProps) => {
  return (
    <button className={prop.className} style={{ background: prop.color }}>
      {prop.icon && <img src={prop.icon} alt="Button icons" />}
      {prop.text}
    </button>
  );
};
