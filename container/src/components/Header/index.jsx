import React from "react";
import { Wrapper /*, SubRoutes*/ } from "./styles";
import { ThemeSwitch } from "../ThemeSwitch/index";
//import { NavLink } from "react-router-dom";

//import microFront1Routes from "@MicroFront1/RoutesList";

export const Header = () => {
  return (
    <Wrapper>
      <h1>Micro Front Poc</h1>
      {/* <SubRoutes>

      </SubRoutes> */}
      <ThemeSwitch />
    </Wrapper>
  );
};
