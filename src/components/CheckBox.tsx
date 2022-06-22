import { ChangeEventHandler } from "react";
import "../styles/checkbox.scss";

interface CheckBoxProps {
  checked?: boolean;
  label: string;
  onChange?: ChangeEventHandler;
  name: string
}



export const CheckBox = (props: CheckBoxProps) => {
  return (
    <div className="checkbox-block">
      <input
        type="checkbox"
        checked={props.checked}
        className="checkbox"
        onChange={props.onChange}
        name={props.name}
      />
      <label className="checkbox-label">{props.label}</label>
    </div>
  );
};
