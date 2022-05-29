import { useState } from "react";
import { mockComponent } from "react-dom/test-utils";
import { ClaimsTable } from "../components/claimsTable";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { mockData } from "../helpers/mockData";
import "../styles/home.scss";
import "../styles/your-claims.scss";

export const YourClaims = () => {
  return (
    <div className="your-claims_block">
      <Menu />
      <div className="your-claims">
        <Header name="Ivan Ivanov" />
        <ClaimsTable claims={mockData} />
      </div>
    </div>
  );
};
