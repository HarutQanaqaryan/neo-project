import searchIcon from "../assets/icons/search.svg";
import "../styles/text-field-select.scss";

interface SearchTextFieldProps {
  placeholder: string;
  uniqueStyle?: string;
  value?: string;
  onChange?: any;
  type?: string;
}

export const SearchTextField = (prop: SearchTextFieldProps) => {
  return (
    <div className={`text-field ${prop.uniqueStyle}`}>
      <div className="text-field_input">
        <input
          placeholder={prop.placeholder}
          value={prop.value}
          type={prop.type}
          onChange={prop.onChange}
          id="search"
          autoComplete="on"
        />
        <img src={searchIcon} alt="icon" className="text-field-icon" />
      </div>
    </div>
  );
};
