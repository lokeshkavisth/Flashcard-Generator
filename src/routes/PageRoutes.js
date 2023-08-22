import { lazy } from "react";
const NotFound = lazy(() => import("../pages/errors/NotFound"));
const CreateFlashcard = lazy(() => import("../pages/home/CreateFlashcard"));
const FlashcardDetails = lazy(() => import("../pages/FlashcardDetails"));
const MyFlashcard = lazy(() => import("../pages/MyFlashcard"));

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

export default PageRoutes;
