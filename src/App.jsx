import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

// src/App.jsx
export default function App() {
  return (
    <>
    <Routes>
      <Route element={<HomePage/>} path="/" />
      <Route element={<LoginPage/>} path="/login" />
      <Route element={<RegistrationPage/>} path="/register" />
      <Route element={<ProfilePage/>} path="/me" />
      <Route element={<NotFoundPage/>} path="*" />

    </Routes>
    </>
  );
}
