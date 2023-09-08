import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "products",
        element: <Products/>
      },
      {
        path: "products/:id",
        element: <SingleProduct/>
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "orders",
        element: <Orders/>
      },
      {
        path: "checkout",
        element: <Checkout/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <Error/>
  },
  {
    path: "/register",
    element: <Register/>,
    errorElement: <Error/>
  }
])

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
