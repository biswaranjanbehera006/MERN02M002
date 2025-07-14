import React from "react";
import { Routes,Route } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";
import AdminRoute from "./AdminRoute";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={ <AdminRoute>  <AdminDashboard /> </AdminRoute>} path="/admin" />
      <Route element={<UserDashboard />} path="/user" />

    </Routes>

    </div>
  )
}

export default AllRoutes
