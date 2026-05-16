import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { MainPage } from "./pages/main/MainPage";
import { EditorPage } from "./pages/editor/EditorPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { CollectionPage } from "./pages/collection/CollectionPage";
import { AuthPage } from "./pages/auth/AuthPage";
import App from "./App";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/editor", element: <EditorPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/collection", element: <CollectionPage /> },
      { path: "/auth", element: <AuthPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
