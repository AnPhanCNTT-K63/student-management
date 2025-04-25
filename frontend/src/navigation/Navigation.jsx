import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import AdminDashboard from "../pages/admin/AdminDashboard";

export default function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}
