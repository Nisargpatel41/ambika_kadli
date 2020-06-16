import React from "react";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

const LoginForm = () => {
  return (
    <React.Fragment>
      <div
        className="LoginFormMain"
        style={{ paddingTop: "5em", backgroundColor: "#F2F2F2" }}
      >
        <div
          className="loginFormDiv"
          style={{ backgroundColor: "#fff", height: "5em" }}
        >
          <SectionTitle title="Admin Login" />
          <form className="pt-4 pb-4 pl-4 pr-4">
            <div className="form-group">
              <label htmlFor="LoginForm">User Name</label>
              <input
                type="text"
                className="form-control"
                id="LoginForm"
                placeholder="Enter User Name"
              />
            </div>
            <div className="form-group pt-2">
              <label htmlFor="LoginForm">Password</label>
              <input
                type="text"
                className="form-control"
                id="LoginForm"
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group pt-3 ">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
