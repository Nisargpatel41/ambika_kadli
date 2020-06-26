import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import AdminHeader from "./Header/Header";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import "./Admin.css";

class Admin extends Component {
  state = { totViews: 0, totProducts: 0, totMessages: 0 };

  async componentWillMount() {
    // const viewsData = await axios.get();
    const productsData = await axios.get("http://localhost:5000/api/product");
    // const messageData = await axios.get("http://localhost:5000/api/message");
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect from={this.props.location.pathname} to="/login" />;
    }

    return (
      <React.Fragment>
        <AdminHeader logoutHandler={this.props.logoutHandler} />
        <div className="adminMain">
          <SectionTitle title="Admin Home Page" />

          {/* totalviews */}
          <div className="card totalDiv">
            <div className="card-header">Total Views </div>
            <div className="card-body">
              <p className="card-text">430</p>
            </div>
          </div>
          {/* total products */}
          <div className="card totalDiv">
            <div className="card-header">Total Products </div>
            <div className="card-body">
              <p className="card-text">430</p>
            </div>
          </div>
          {/* total messages */}
          <div className="card totalDiv">
            <div className="card-header">Total Messages </div>
            <div className="card-body">
              <p className="card-text">12</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Admin;
