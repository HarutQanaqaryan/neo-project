import "../styles/checkbox.scss";
interface CheckBoxProps {
  checked: boolean;
  label: string;
}

export const CheckBox = (props: CheckBoxProps) => {
  return (
    <div className="checkbox-block">
      <input type="checkbox" checked={props.checked} className="checkbox" />
      <label className="checkbox-label">{props.label}</label>
    </div>
  );
};
