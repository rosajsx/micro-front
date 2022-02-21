import React from "react";
import { Route, Routes } from "react-router-dom";

import microFront1Routes from "../routes";

const ThemeProvider = React.lazy(() =>
  import("@MicroFrontContainer/ThemeProvider")
);

export const MicroFront1Routes = () => {
  return (
    <React.Suspense fallback="Loading...">
      <Routes>
        {microFront1Routes.map((route) => (
          <Route
            path={route.path}
            index={route.index}
            element={<route.element />}
            key={route.path}
          />
        ))}
      </Routes>
    </React.Suspense>
  );
};

export default MicroFront1Routes;
