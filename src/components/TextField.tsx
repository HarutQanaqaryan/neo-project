import { useFormContext } from "react-hook-form";
import "../styles/text-field-select.scss";

interface TextFieldProps {
  label?: string;
  placeholder: string;
  icon?: string;
  uniqueStyle?: string;
  value?: string;
  name: string;
  onChange?: any;
  error?: any;
  type?: string;
  pattern?: any;
  defaultValue?: string;
  required: string | boolean;
  disabled?: boolean
}

export const TextField = (prop: TextFieldProps) => {
  const register = useFormContext();

  return (
    <div className={`${prop.uniqueStyle}`}>
      <label className="text-field_label">{prop.label}</label>
      <div className={`text-field_input ${prop.error && "error"}`} tabIndex={1}>
        <input
          placeholder={prop.placeholder}
          value={prop.value}
          defaultValue={prop.defaultValue}
          type={prop.type}
          {...register.register(prop.name, {
            required: prop.required,
            pattern: prop.pattern,
            disabled: prop.disabled
          })}
          onChange={prop.onChange}
        />
        {prop.icon && (
          <img src={prop.icon} alt="icon" className="text-field-icon" />
        )}
      </div>
      {prop.error && (
        <span className="text-field-error_message">{prop.error.message}</span>
      )}
    </div>
  );
};
