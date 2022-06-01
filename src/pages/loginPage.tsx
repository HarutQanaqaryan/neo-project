import { Footer } from "../components/footer";
import "../styles/login-user-authorization.scss";
import "../styles/button.scss";
import mainIcon from "../assets/main-logo.svg";
import { LoginForm } from "../components/login-form/loginForm";
import { LoginImg } from "../components/login-form/loginImg";

export const LoginUser = () => {
  return (
    <>
      <div className="login-user-page">
        <LoginImg />
        <div className="login-user-authorization_block">
          <img src={mainIcon} alt="Company Icon" className="login-user-authorization_icon"/>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
};
