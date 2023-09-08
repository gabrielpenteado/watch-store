import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { Shop } from "./pages/Shop.tsx";
import { Home } from "./pages/Home.tsx";
import { Checkout } from "./pages/Checkout.tsx";
import { ProductInfo } from "./pages/ProductInfo.tsx";
import { store } from "./store/index.tsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrderPlaced } from "./pages/OrderPlaced.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:productId",
        element: <ProductInfo />,
      },
      {
        path: "/cart",
        element: <Checkout />,
      },
      {
        path: "/orderplaced",
        element: <OrderPlaced />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
