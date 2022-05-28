import  mainImg  from "../assets/main-img.svg";
import "../styles/login-page-img.scss"

export const LoginImg = () => {
  return (
    <div className="login-img_wrapper">
      <img src={mainImg} alt="background" className="login_img" />
    </div>
  );
};
