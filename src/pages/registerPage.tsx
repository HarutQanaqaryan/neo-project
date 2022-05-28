import { LoginImg } from "../components/loginImg";
import mainIcon from "../assets/main-logo.svg";
import { Footer } from "../components/footer";
import { RegisterForm } from "../components/registerForm";

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
