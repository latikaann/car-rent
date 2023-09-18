import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
