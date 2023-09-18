import React, { Suspense } from "react";
import css from "./SharedLayout.module.css";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
