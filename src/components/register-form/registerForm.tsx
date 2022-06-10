import { FormProvider, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {
  emailPattern,
  passwordPattern,
  userNamePattern,
} from "../../helpers/contstants";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { registerUser } from "../../store/action-creators/register";
import { Button } from "../button";
import { TextField } from "../textField";

export const RegisterForm = () => {
  const { success, error } = useTypedSelector((state) => state.register);
  const dispatch = useTypedDispatch();
  const methods = useForm();

  const onSubmit = (data: any) => {
    dispatch(registerUser(data));
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        className="login-user-authorization_form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <TextField
          name={"firstName"}
          placeholder="Type your first name"
          label="FIRST NAME"
          uniqueStyle="login-authorization_input"
          pattern={{
            value: userNamePattern,
            message: "Only latin letters",
          }}
          error={methods.formState.errors.firstName}
        />
        <TextField
          name={"lastName"}
          placeholder="Type your last name"
          label="LAST NAME"
          uniqueStyle="login-authorization_input"
          pattern={{
            value: userNamePattern,
            message: "Only latin letters",
          }}
          error={methods.formState.errors.lastName}
        />
        <TextField
          name={"email"}
          placeholder="Type your e-mail"
          label="E-MAIL"
          uniqueStyle="login-authorization_input"
          pattern={{
            value: emailPattern,
            message: "Mail should look like this: johnsmith@gmail.com",
          }}
          error={methods.formState.errors.email}
        />
        <TextField
          name={"password"}
          placeholder="Type your password"
          label="PASSWORD"
          uniqueStyle="login-authorization_input"
          pattern={{
            value: passwordPattern,
            message:
              "The password must be 6-18 characters long and only Latin letters",
          }}
          error={methods.formState.errors.password}
          type="password"
        />
        {success && (
          <span className="user-registered">
            Are you registered{" "}
            <NavLink to="/" className="user-registered_link">
              Login
            </NavLink>
          </span>
        )}
        {error && <span className="text-field-error_message">This user already exists</span>}
        <Button
          text="Register"
          className="login-user_btn"
          onClick={() => console.log("a")}
        />
      </form>
    </FormProvider>
  );
};
