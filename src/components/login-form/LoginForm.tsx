import emailIcon from "../../assets/icons/icon-mail.svg";
import lockIcon from "../../assets/icons/icon-lock.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { TextField } from "../TextField";
import { CheckBox } from "../CheckBox";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { loginUser } from "../../store/action-creators/login";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { EMAIL_PATTERN, PASS_PATTERN } from "../../helpers/contstants";

export const LoginForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const methods = useForm();
  const dispatch = useTypedDispatch();
  const { success, error } = useTypedSelector((state) => state.login);

  const onSubmit = async (data: any) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    success && navigate("../home", { replace: true });
  }, [navigate, success]);

  const checkedKeepMeLoggedIn = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="login-user-authorization_form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <TextField
          name={"login"}
          placeholder="Type your e-mail"
          label="E-MAIL"
          icon={emailIcon}
          uniqueStyle="login-authorization_input"
          pattern={{
            value: EMAIL_PATTERN,
            message: "Mail should look like this: johnsmith@gmail.com",
          }}
          error={methods.formState.errors.login}
          required={"Require field"}
        />
        <TextField
          name={"password"}
          placeholder="Type your password"
          label="PASSWORD"
          icon={lockIcon}
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
        <CheckBox
          label="Keep me logged in"
          checked={isChecked}
          name="checkbox"
          onChange={checkedKeepMeLoggedIn}
        />
        {error && <span className="success-error">{error}</span>}
        <Button text="Login" className={"login-user_btn"} />
        <p className="login-user_request-register">
          Not a member?{" "}
          <NavLink
            className="login-user_request-register_link"
            to="/registration"
          >
            Request registration
          </NavLink>
        </p>
      </form>
    </FormProvider>
  );
};
