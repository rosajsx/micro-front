import React, { useEffect, useRef } from "react";
import { mount } from "@MicroFrontAngular/leftSideBar";
import { Container } from "./styles";

const AngularComponent = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();
  }, []);

  return (
    <Container className="micro-front-angular">
      <app-root></app-root>
    </Container>
  );
};

export default AngularComponent;
