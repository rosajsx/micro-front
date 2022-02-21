import React from "react";

import Mfe2Img from "../../assets/undraw_trendy_interface_re_xsou.svg";

import { Wrapper } from "./styles";

export const Main = () => {
  return (
    <Wrapper>
      <h2>Essa é a main page do micro front 2</h2>
      <img src={Mfe2Img} alt="mfe2-main-page" />
    </Wrapper>
  );
};
