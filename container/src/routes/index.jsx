import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/index";
import ErrorBoundary from "../components/ErrorBoundary";

const MicroFront1Routes = React.lazy(() => import("@MicroFront1/Routes"));
const MicroFront2Routes = React.lazy(() => import("@MicroFront2/Routes"));

export const ContainerRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
      </Route>
      <Route
        path="/mfe1/*"
        element={
          <ErrorBoundary>
            <React.Suspense fallback="loading...">
              <MicroFront1Routes />
            </React.Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="/mfe2/*"
        element={
          <ErrorBoundary>
            <React.Suspense fallback="loading...">
              <MicroFront2Routes />
            </React.Suspense>
          </ErrorBoundary>
        }
      />
    </Routes>
  );
};

export default ContainerRoutes;
