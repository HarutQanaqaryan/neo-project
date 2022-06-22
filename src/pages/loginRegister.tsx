import { LoginImg } from "../components/login-form/loginImg";
import mainIcon from "../assets/main-logo.svg";
import { Footer } from "../components/footer";
import { useLocation } from "react-router-dom";
import { LoginForm } from "../components/login-form/loginForm";
import "../styles/login-user-authorization.scss";
import "../styles/button.scss";
import { RegisterForm } from "../components/register-form/registerForm";
import { checkScreen } from "../helpers/checkMobile";

export const LoginRegister = () => {
  const url = useLocation();

  const renderLoginRegister = () => {
    switch (url.pathname) {
      case "/": {
        return <LoginForm />;
      }
      case "/registration": {
        return <RegisterForm />;
      }
    }
  };

  return (
    <>
      <div className="login-user-page">
        {checkScreen() && <LoginImg />}
        <div className="login-user-authorization_block">
          <img src={mainIcon} alt="Company Icon" className="login-user-authorization_logo"/>
          {renderLoginRegister()}
        </div>
      </div>
      <Footer />
    </>
  );
};
