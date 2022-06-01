
import mainIcon from "../assets/main-logo.svg";
import { Footer } from "../components/footer";
import { LoginImg } from "../components/login-form/loginImg";
import { RegisterForm } from "../components/register-form/registerForm";

export const Registration = () => {
  return (
    <>
      <div className="login-user-page">
        <LoginImg />
        <div className="login-user-authorization_block">
          <img src={mainIcon} alt="Company Icon" />
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </>
  );
};
