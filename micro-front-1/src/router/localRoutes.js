import React from "react";
import { Routes, Route } from "react-router-dom";
import microFront1Routes from "../routes";

export const LocalRouter = () => {
  return (
    <Routes>
      <Route path="mfe1">
        {microFront1Routes.map((route) => (
          <Route
            path={route.path}
            index={route.index}
            element={<route.element />}
            key={route.path}
          />
        ))}
      </Route>
    </Routes>
  );
};
