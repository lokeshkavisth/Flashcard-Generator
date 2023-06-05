// This function imports the `lazy` function from the `react` library.
import { lazy } from "react";

// This code uses the `lazy` function to import the `NotFound`, `CreateFlashcard`, `FlashcardDetails`, and `MyFlashcard` components lazily.
// This means that these components will not be loaded until they are actually needed.
// This can help to improve the performance of the application by reducing the amount of code that needs to be loaded when the application first starts.
const NotFound = lazy(() => import("../pages/errors/NotFound"));
const CreateFlashcard = lazy(() => import("../pages/home/CreateFlashcard"));
const FlashcardDetails = lazy(() => import("../pages/FlashcardDetails"));
const MyFlashcard = lazy(() => import("../pages/MyFlashcard"));

// This array of objects defines the routes for the different flashcard pages.
// The `path` property of each object specifies the URL path for the page.
// The `element` property of each object specifies the component that will be rendered for the page.
const PageRoutes = [
  {
    path: "/",
    element: <CreateFlashcard />,
  },
  {
    path: "/dashboard",
    element: <MyFlashcard />,
  },
  {
    path: "dashboard/:id",
    element: <FlashcardDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

// This function exports the `PageRoutes` array.
export default PageRoutes;
