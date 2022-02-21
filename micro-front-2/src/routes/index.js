import React from "react";
import { Route, Routes } from "react-router-dom";

import { mfe2Routes } from "./microfront2Routes";

export const MicroFront2Routes = () => {
  return (
    <React.Suspense fallback="Loading...">
      <Routes>
        {mfe2Routes.map((route) => (
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

export default MicroFront2Routes;
