import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "./App";

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const Root = () => (
  <Router basename="/nazariyholovach-portfolio">
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

        <Route path="work" element={<p>work</p>} />
        <Route path="about" element={<p>about</p>} />
        <Route path="contact" element={<p>contact</p>} />
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
  </Router>
);

export default Root;
