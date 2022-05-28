import { TextField } from "./textField";
import emailIcon from "../assets/icons/icon-mail.svg";
import lockIcon from "../assets/icons/icon-lock.svg";
import { CheckBox } from "./checkBox";
import { Button } from "./button";
import { NavLink } from "react-router-dom";

export const LoginForm = () => {
  return (
    <>
    <form className="login-user-authorization_form">
      <TextField
        placeholder="Type your e-mail"
        label="E-MAIL"
        icon={emailIcon}
      />
      <TextField
        placeholder="Type your password"
        label="PASSWORD"
        icon={lockIcon}
      />
      <CheckBox label="Keep me logged in" checked={false} />
      <Button text="Login" className="login-user_btn" />
    </form>
    <p className="login-user_request-register">
            Not a member?{" "}
            <NavLink
              className="login-user_request-register_link"
              to="/registration"
            >
              Request registration
            </NavLink>
          </p>
    </>
  );
};
