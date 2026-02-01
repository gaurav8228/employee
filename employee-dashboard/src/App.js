import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EmployeeDetails from "./pages/EmployeeDetails";


export default function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Dashboard />} />
<Route path="/employee/:id" element={<EmployeeDetails />} />
</Routes>
</Router>
);
}