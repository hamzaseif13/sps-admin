import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AddZone from "./pages/addZones";
import Home from "./pages";
import AddOfficer from "./pages/addOfficer";
import AllOfficers from "./pages/allOfficers";
import SingleOfficer from "./pages/singleOfficer";
import AllZones from "./pages/allZones";
import LoginPage from "./pages/login";
import useAuth from "./hooks/useAuth";
import SecureRoute from "./components/SecureRoute";
import AddAdmin from "./pages/addAdmin";
import AllAdmins from "./pages/allAdmins";

function App() {
  const [isAuth] = useAuth();

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<SecureRoute />}>
            <Route path="" element={<Home />} />
            <Route path="zones">
              <Route index element={<AllZones />} />
              <Route path="add" element={<AddZone />} />
            </Route>
            <Route path="admins">
              <Route index element={<AllAdmins/>} />
              <Route path="add" element={<AddAdmin />} />
            </Route>
            <Route path="officers">
              <Route index element={<AllOfficers />} />
              <Route path="add" element={<AddOfficer />} />
              <Route path=":id" element={<SingleOfficer />} />
            </Route>
          </Route>

          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<h1>Wrong path</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
