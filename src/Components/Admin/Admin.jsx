import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AdminHeader from "./Header/Header";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import axios from "axios";
import "./Admin.css";

class Admin extends Component {
  state = { totViews: 0, totProducts: 0, totMessages: 0 };

  async componentWillMount() {
    const viewsData = await axios.get(
      "https://ambika-kadli.herokuapp.com/api/views"
    );
    const productsData = await axios.get(
      "https://ambika-kadli.herokuapp.com/api/product/count/hi"
    );
    const messageData = await axios.get(
      "https://ambika-kadli.herokuapp.com/api/message/count/hi"
    );

    this.setState({
      totMessages: messageData.data["count"],
      totProducts: productsData.data["count"],
      totViews: viewsData.data[0].totViews,
    });
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
              <p className="card-text">{this.state.totViews}</p>
            </div>
          </div>
          {/* total products */}
          <div className="card totalDiv">
            <div className="card-header">Total Products </div>
            <div className="card-body">
              <p className="card-text">{this.state.totProducts}</p>
            </div>
          </div>
          {/* total messages */}
          <div className="card totalDiv">
            <div className="card-header">Total Messages </div>
            <div className="card-body">
              <p className="card-text">{this.state.totMessages}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Admin;
