import React from "react";
import { Route, Routes } from "react-router-dom";
import PostListPage from "../pages/PostListPage";

function MainRoutes() {
  const ROUTES = [{ link: "/", element: <PostListPage />, id: 1 }];
  return (
    <>
      <Routes>
        {ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
}

export default MainRoutes;
