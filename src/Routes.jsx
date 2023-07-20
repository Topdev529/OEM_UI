import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LoginResponsive = React.lazy(() => import("pages/LoginResponsive"));


const SmartContract = React.lazy(() => import("pages/SmartContract"));
const SelectWallet = React.lazy(() => import("pages/SelectWallet"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<SelectWallet />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/smartcontract" element={<SmartContract />} />
          <Route path="/loginresponsive" element={<LoginResponsive />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
