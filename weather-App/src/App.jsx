import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Mainlayout from "./layouts/Mainlayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    children:[{
      index:true,Component:Home
    }]
  }
]);
function Router() {
 

  return (
   <RouterProvider router={router} />
  )
}

export default Router
