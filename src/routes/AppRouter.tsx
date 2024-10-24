import MainLayout from "@/layouts/MainLayout";
import History from "@/pages/History";
import Notifications from "@/pages/Notifications";
import Setting from "@/pages/Setting";
import Tasks from "@/pages/Tasks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
