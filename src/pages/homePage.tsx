import { ClaimsTable } from "../components/claimsTable";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import "../styles/home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Menu />
      <Header name="Ivan Ivanov" />
        <ClaimsTable />
    </div>
  );
};
