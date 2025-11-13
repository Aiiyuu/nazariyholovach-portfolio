import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import App from "@/app/App";
import { HomePage, WorkPage, NotFoundPage } from "./LazyRoutes";

export const AppRoutes = () => (
  <Routes>
    <Route path="/:lng" element={<App />}>
      <Route
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        }
      />

      <Route path="home" element={<Navigate to="/" replace />} />

      <Route
        path="works"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <WorkPage />
          </Suspense>
        }
      />

      <Route path="about" element={<p>about</p>} />
      <Route path="contact" element={<p>contact</p>} />
      <Route path="legal" element={<p>legal information</p>} />
    </Route>

    <Route path="/" element={<Navigate to="/en" replace />} />

    <Route
      path="*"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <NotFoundPage />
        </Suspense>
      }
    />
  </Routes>
);
