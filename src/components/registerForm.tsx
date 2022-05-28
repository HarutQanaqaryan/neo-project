import { Button } from "./button";
import { TextField } from "./textField";

export const RegisterForm = () => {
  return (
    <form className="login-user-authorization_form">
      <TextField
        placeholder="Type your first name"
        label="E-MAIL"
      />
      <TextField
        placeholder="Type your last name"
        label="PASSWORD"
      />
      <TextField
        placeholder="Type your e-mail"
        label="E-MAIL"
      />
      <TextField
        placeholder="Type your password"
        label="PASSWORD"
      />
      <TextField
        placeholder="Type your password again"
        label="PASSWORD"
      />
      <Button text="Register" className="login-user_btn" />
    </form>
  );
};
