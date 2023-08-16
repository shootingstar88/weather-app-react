import Weather from "./components/Weather";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Search from "./components/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Weather />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
