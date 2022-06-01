import { Button } from "../button";
import { TextField } from "../textField";


export const RegisterForm = () => {
  return (
    <form className="login-user-authorization_form">
      <TextField
        placeholder="Type your first name"
        label="FIRST NAME"
        uniqueStyle="login-authorization_input"
      />
      <TextField
        placeholder="Type your last name"
        label="LAST NAME"
        uniqueStyle="login-authorization_input"
      />
      <TextField
        placeholder="Type your e-mail"
        label="E-MAIL"
        uniqueStyle="login-authorization_input"
      />
      <TextField
        placeholder="Type your password"
        label="PASSWORD"
        uniqueStyle="login-authorization_input"
      />
      <TextField placeholder="Type your password again" label="PASSWORD AGAIN" uniqueStyle="login-authorization_input" />
      <Button text="Register" className="login-user_btn" />
    </form>
  );
};
