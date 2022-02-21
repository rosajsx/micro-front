import React from "react";

import HomeImage from "../../assets/home_art.svg";
import { Wrapper, Image, Title, Description } from "./style";

export const HomePage = () => {
  return (
    <Wrapper>
      <Title>Bem vindo, Esta é a Home page do Micro Front-end POC</Title>

      <Image src={HomeImage} alt="home" />
      <Description>
        O intuito desta aplicação é estudar a utilização de microfronts com a
        module federation do webpack e algumas outras ferramentas e
        funcionalidades, tais como o ErrorBoundary do React.
      </Description>
    </Wrapper>
  );
};
