import { ChangeEventHandler } from "react";
import { useFormContext } from "react-hook-form";
import "../styles/text-field-select.scss";

interface TextFieldProps {
  label?: string;
  placeholder: string;
  icon?: string;
  uniqueStyle?: string;
  value?: string;
  name: string;
  onChange?: ChangeEventHandler;
  error?: any;
  type?: string;
  pattern?: any
}

export const TextField = (prop: TextFieldProps) => {
  const register = useFormContext()

  return (
    <div className={`text-field ${prop.uniqueStyle}`} >
      <label className="text-field_label">{prop.label}</label>
      <div className={`text-field_input ${prop.error && "error"}`} tabIndex={1} >
        <input
          placeholder={prop.placeholder}
          value={prop.value}
          type={prop.type}
          {...register.register(prop.name, {
            required: `${prop.name} is require field`,
            pattern: prop.pattern
          })}
        />
        {prop.icon && (
          <img src={prop.icon} alt="icon" className="text-field-icon" />
        )}
      </div>
      {prop.error && <span className="text-field-error_message">{prop.error.message}</span>}
    </div>
  );
};
