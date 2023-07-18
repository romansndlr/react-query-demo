import { createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/root";
import { Home } from "./routes/home";
import { Person } from "./routes/person";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/people/:personId",
        element: <Person />,
      },
    ],
  },
]);
