// This function imports the `React`, `Suspense`, `PageRoutes`, `Route`, and `Routes` functions from the `react`, `react-router-dom`, and `app directory` libraries.

import React, { Suspense } from "react";
import PageRoutes from "./PageRoutes";
import { Route, Routes } from "react-router-dom";
import Spinner from "../components/ui/spinner/Spinner";

// This function maps over the `PageRoutes` array and for each object in the array, returns a `Route` component.
// The `exact` prop of the `Route` component ensures that the route will only match if the URL path exactly matches the `path` property of the object.
// The `key` prop of the `Route` component is used to identify the route in the event that there are multiple routes with the same `path` property.
// The `element` prop of the `Route` component is used to specify the component that will be rendered for the route.
const routes = () => {
  const pageRoutes = PageRoutes.map(({ path, element }, index) => {
    return <Route exact key={index} path={path} element={element} />;
  });

  // This function returns a `div` element that contains a `Suspense` component.
  // The `Suspense` component is used to suspend the rendering of a component until a certain condition has been met.
  // In this case, the condition is that the data for the route has been loaded.
  // If the data has not been loaded, the `Suspense` component will render a `Spinner` component as a fallback.
  // The `Routes` component is used to render the `pageRoutes` array.
  // The `Routes` component will only render the routes whose `path` property matches the current URL path.
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Routes>{pageRoutes}</Routes>
      </Suspense>
    </div>
  );
};

// This function exports the `routes` function.
export default routes;
