import companyLogo from "../assets/company-logo-lil.svg";
import "../styles/footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <img src={companyLogo} alt="Company Logo" />
    </div>
  );
};
