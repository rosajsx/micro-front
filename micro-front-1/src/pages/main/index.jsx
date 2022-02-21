import React from "react";
import { Wrapper } from "./styles";

import MainPageImg from "../../assets/undraw_ideas_re_7twj.svg";

export const MainPage = () => {
  return (
    <Wrapper>
      <h2>Main page da micro front 1</h2>
      <img src={MainPageImg} alt="mfe1-main" />
    </Wrapper>
  );
};
