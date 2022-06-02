import companyLogo from "../assets/company-logo-lil.svg";
import { checkScreen } from "../helpers/checkMobile";
import "../styles/footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      {checkScreen() && <img src={companyLogo} alt="Company Logo" />}
    </div>
  );
};
