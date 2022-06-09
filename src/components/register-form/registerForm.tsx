import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { TextField } from "../textField";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const methods = useForm();

  const onSubmit = (data: any) => {
    navigate("../home", { replace: true });
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form className="login-user-authorization_form">
        <TextField
          name="First Name"
          placeholder="Type your first name"
          label="FIRST NAME"
          uniqueStyle="login-authorization_input"
          value=""
          onChange={() => console.log("a")}
        />
        <TextField
          name="Last Name"
          placeholder="Type your last name"
          label="LAST NAME"
          uniqueStyle="login-authorization_input"
          value=""
          onChange={() => console.log("a")}
        />
        <TextField
          name="Email"
          placeholder="Type your e-mail"
          label="E-MAIL"
          uniqueStyle="login-authorization_input"
          value=""
          onChange={() => console.log("a")}
        />
        <TextField
          name="Password"
          placeholder="Type your password"
          label="PASSWORD"
          uniqueStyle="login-authorization_input"
          value=""
          onChange={() => console.log("a")}
        />
        <Button
          text="Register"
          className="login-user_btn"
          onClick={() => console.log("a")}
        />
      </form>
    </FormProvider>
  );
};
