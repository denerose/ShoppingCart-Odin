import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import { Shop } from "./Shop";
import { Home } from "./Home";
import { Wares } from "./Wares";
import { Cart } from "./Cart";

export const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "shop",
                    element: <Shop />,
                    children: [
                        {
                            index: true,
                            element: <Wares />
                        },
                        {
                            path: "cart",
                            element: <Cart />
                        }
                    ]
                },
            ]
        },
    ]);

    return <RouterProvider router={router} />;
};

