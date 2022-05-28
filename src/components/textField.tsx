import "../styles/text-field.scss";

interface TextFieldProps {
  label?: string;
  placeholder: string;
  icon?: string;
  uniqueStyle?: string
}
export const TextField = (prop: TextFieldProps) => {
  return (
    <div className={`text-field ${prop.uniqueStyle}`}>
      <label className="text-field_label">{prop.label}</label>
      <div className="text-field_input" tabIndex={1}>
        <input placeholder={prop.placeholder} />
        {prop.icon && <img src={prop.icon} alt="icon" />}
      </div>
    </div>
  );
};
