import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import axios from "axios";
import { toast } from "react-toastify";
class LoginForm extends Component {
  state = { errorMessage: false };

  submitForm = async (e) => {
    e.preventDefault();
    const userName = e.target.elements.adminName.value;
    const password = e.target.elements.adminPassword.value;

    axios
      .post("https://ambika-kadli.herokuapp.com/api/admin", {
        userName: userName,
        password: password,
      })
      .then((res) => {
        const remainingMilliseconds = 60 * 60 * 4000;
        // const remainingMilliseconds = 60 * 1000;

        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        localStorage.setItem("token", res.data.token);
        this.props.loggedIn();
        this.props.history.push("/admin-home-page");
      })
      .catch((error) => {
        if (!error.response.data.resBoolean) {
          this.setState({ errorMessage: true });
        }
      });

    // console.log(result);
  };

  forgotPassword = () => {
    axios
      .get("https://ambika-kadli.herokuapp.com/api/forgot")
      .then((res) => {
        if (res.data) {
          toast("OTP Sent on Your Mobile!");
          this.props.history.push("/forgot-password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <NavLink
            to="/"
            className="forgotPassword"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: "3em" }}
          >
            Customer Side
          </NavLink>
          <div
            className="LoginFormMain"
            style={{ paddingTop: "5em", backgroundColor: "#F2F2F2" }}
          >
            <div
              className="loginFormDiv"
              style={{ backgroundColor: "#fff", height: "auto" }}
            >
              <SectionTitle title="Admin Login" />

              <form
                className="pt-4 pb-4 pl-4 pr-4 formStyles"
                onSubmit={this.submitForm}
              >
                {this.state.errorMessage && (
                  <span className="errorMessage">
                    User Name and Password Incorrect
                  </span>
                )}
                <div className="form-group pt-2">
                  <label htmlFor="LoginForm">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminName"
                    placeholder="Enter User Name"
                    autoFocus
                  />
                </div>
                <div className="form-group pt-2">
                  <label htmlFor="LoginForm">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="adminPassword"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="form-group pt-3 loginButtonDiv">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <p className="forgotPassword" onClick={this.forgotPassword}>
                    Forgot Password?
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
