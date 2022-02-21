import React from "react";
import ContainerRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { NavBar } from "./components/Nav";
import { Wrapper } from "./styles/appStyle";
import { ThemeContextProvider } from "./contexts/themeContext";
import ThemeProvider from "./components/ThemeProvider";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Wrapper>
          <NavBar />
          <ThemeProvider>
            <div className="mainContent">
              <Header />
              <ContainerRoutes />
            </div>
          </ThemeProvider>
        </Wrapper>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
