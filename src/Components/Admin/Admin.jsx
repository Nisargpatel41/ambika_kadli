import React from "react";
import AdminHeader from "./Header/Header";
import "./Admin.css";

const Admin = () => {
  return (
    <React.Fragment>
      <AdminHeader />
      <div className="adminMain">
        <h1>Admin</h1>
      </div>
    </React.Fragment>
  );
};

export default Admin;
