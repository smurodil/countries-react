import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";

import RootLayout from "./layout/RootLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "singleCountry/:country",
          element: <SingleCountry />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;