import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const Root = () => (
  <Router basename="/nazariyholovach-portfolio">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="work" element={<p>work</p>} />
        <Route path="about" element={<p>about</p>} />
        <Route path="contact" element={<p>contact</p>} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default Root;
