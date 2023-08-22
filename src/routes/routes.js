import React, { Suspense } from "react";
import PageRoutes from "./PageRoutes";
import { Route, Routes } from "react-router-dom";
import Spinner from "../components/ui/spinner/Spinner";

const routes = () => {
  const pageRoutes = PageRoutes.map(({ path, element }, index) => {
    return <Route exact key={index} path={path} element={element} />;
  });

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Routes>{pageRoutes}</Routes>
      </Suspense>
    </div>
  );
};

export default routes;
