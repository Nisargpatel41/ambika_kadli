import React, { Component } from "react";
import AdminHeader from "../Header/Header";
import { Redirect } from "react-router-dom";
import Pagination from "./Pagination";
import { paginate } from "./paginate";

import axios from "axios";

class UserMessage extends Component {
  state = {
    messages: [],
    currentPage: 1,
    pageSize: 4,
    totalCount: 0,
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://ambika-kadli.herokuapp.com/api/message",
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );
    this.setState({ messages: data, totalCount: data.length });
  }

  updateData = (e) => {
    const msgName = e.currentTarget.getAttribute("value");

    const msgId = e.currentTarget.getAttribute("id");

    sessionStorage.setItem("shopId", msgId);

    sessionStorage.setItem("shopName", msgName);
  };

  deleteMessage = async (e) => {
    const mid = e.currentTarget.getAttribute("id");

    const result = await axios.put(
      "https://ambika-kadli.herokuapp.com/api/message",
      {
        mid: mid,
      }
    );
    const deletedMessage = result.data;
    const messages = this.state.messages.filter(
      (c) => c._id !== deletedMessage._id
    );

    this.setState({ messages });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const { pageSize, currentPage, messages } = this.state;

    const data = paginate(messages, currentPage, pageSize);

    return { messages: data };
  };

  render() {
    if (!this.props.isAuth) {
      return <Redirect from={this.props.location.pathname} to="/login" />;
    }

    const { messages } = this.getPagedData();
    let countNum = 0;
    // const messages = this.state.messages;
    const card = messages.map((message) => {
      countNum += 1;
      return (
        <div key={message._id} className="card messageCard mt-5 pb-2">
          <div className="card-header">{message.createdAt}</div>
          <div className="card-body p-1">
            <table
              className="table table-bordered"
              style={{ overflowX: "scroll" }}
            >
              <tbody>
                <tr style={{ width: "20px" }}>
                  <th scope="row">Number: </th>
                  <td>{countNum}</td>
                </tr>
                <tr>
                  <th scope="row">First Name: </th>
                  <td>{message.firstName}</td>
                </tr>
                <tr>
                  <th scope="row">Last Name: </th>
                  <td>{message.lastName}</td>
                </tr>

                <tr>
                  <th scope="row">Mobile Number: </th>
                  <td>{message.mobileNo}</td>
                  {/* <td>{<a href={`tel:${message.mobileNo}`}></a>}</td> */}
                </tr>

                <tr>
                  <th scope="row">Message: </th>
                  <td>{message.message}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center pt-3">
              {/* <a href={`mailto:${message.email}`} className="btn btn-primary">
                Email
              </a> */}
              <button
                id={message._id}
                onClick={this.deleteMessage}
                className="btn btn-danger ml-3"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <React.Fragment>
          <AdminHeader logoutHandler={this.props.logoutHandler} />
          <div className="resultDiv p-2">
            {card}
            <Pagination
              itemsCount={this.state.totalCount}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default UserMessage;
