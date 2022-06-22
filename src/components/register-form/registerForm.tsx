import { FormProvider, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { EMAIL_PATTERN, PASS_PATTERN, USER_NAME_PATTERN } from "../../helpers/contstants";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { registerUser } from "../../store/action-creators/register";
import { Button } from "../Button";
import { TextField } from "../TextField";

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
            value: USER_NAME_PATTERN,
            message: "Only latin letters",
          }}
          error={methods.formState.errors.firstName}
          required={"Require field"}
        />
        <TextField
          name={"lastName"}
          placeholder="Type your last name"
          label="LAST NAME"
          uniqueStyle="login-authorization_input"
          pattern={{
            value: USER_NAME_PATTERN,
            message: "Only latin letters",
          }}
          error={methods.formState.errors.lastName}
          required={"Require field"}
        />
        <TextField
          name={"email"}
          placeholder="Type your e-mail"
          label="E-MAIL"
          uniqueStyle="login-authorization_input"
          pattern={{
            value: EMAIL_PATTERN,
            message: "Mail should look like this: johnsmith@gmail.com",
          }}
          error={methods.formState.errors.email}
          required={"Require field"}
        />
        <TextField
          name={"password"}
          placeholder="Type your password"
          label="PASSWORD"
          uniqueStyle="login-authorization_input"
          pattern={{
            value: PASS_PATTERN,
            message:
              "The password must be 6-18 characters long and only Latin letters",
          }}
          error={methods.formState.errors.password}
          type="password"
          required={"Require field"}
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
