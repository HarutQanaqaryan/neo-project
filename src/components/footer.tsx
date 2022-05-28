import companyLogo from "../assets/logo-footer.svg"
import "../styles/footer.scss"

export const Footer = () => {
   return  <div className="footer">
       <img src={companyLogo} alt="Company Logo" />
   </div>
}