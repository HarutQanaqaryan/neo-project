import { useState } from "react";
import { checkClaimTypeColor } from "../helpers/checkClaimTypeColor";
import "../styles/text-field-select.scss";

interface SelectProps {
  label?: string;
  placeholder: string;
  icon: string;
  uniqueStyle?: string;
  options: Array<any>;
  setSelectValue?: any;
  error?: boolean;
}

export const Select = (prop: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState(prop.placeholder);

  const openOptions = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  const selectOption = ({ target }: any) => {
    setOption(target.innerText);
    setIsOpen(false);
    prop.setSelectValue(target.innerText)
  };

  return (
    <div className={`select-wrapper ${prop.uniqueStyle}`}>
      <label className="select_label">{prop.label}</label>
      <div className={prop.error? "select error" : "select"} onClick={openOptions}>
        <div className="select-input">{option}</div>
        <img src={prop.icon} alt="icon" className="select-icon" />
      </div>
      {isOpen && (
        <ul className="select-options">
          {prop.options.map((el) => (
            <li className="select-option" onClick={(e) => selectOption(e)} key={el}>
              <span className="select-option_cell" style={checkClaimTypeColor(el)}></span>
              {el}
            </li>
          ))}
        </ul>
      )}
      {prop.error && <span className="text-field-error_message">Require field</span>}
    </div>
  );
};
