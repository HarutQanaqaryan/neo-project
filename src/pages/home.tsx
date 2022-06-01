import { YourClaims } from "../components/claims/yourClaims";
import { Menu } from "../components/menu";
import "../styles/home.scss"

export const Home = () => {
  return (
    <div className="home-page">
      <Menu />
      <YourClaims />
    </div>
  );
};
