import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AdminHeader from "../Header/Header";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import axios from "axios";
import { toast } from "react-toastify";

class ViewCategory extends Component {
  state = { categories: [], cid: "", categoryName: "" };
  componentWillMount() {
    axios
      .get("https://ambika-kadli.herokuapp.com/api/category")
      .then(({ data }) => {
        // categories = data;
        this.setState({ categories: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  editCategory = (e) => {
    const categoryName = e.currentTarget.getAttribute("value");

    const cid = e.currentTarget.getAttribute("id");

    sessionStorage.setItem("cid", cid);

    sessionStorage.setItem("categoryName", categoryName);

    this.props.history.push("/edit-category");
  };

  deleteCategory = async (e) => {
    const cid = e.currentTarget.getAttribute("id");

    const result = await axios.delete(
      `https://ambika-kadli.herokuapp.com/api/category/${cid}`,
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );
    toast.error("Category Deleted!");
    const deletedCategory = result.data;
    const categories = this.state.categories.filter(
      (c) => c._id !== deletedCategory._id
    );
    this.setState({ categories });
  };

  deleteModalOpen = (e) => {
    const categoryName = e.currentTarget.getAttribute("value");

    const cid = e.currentTarget.getAttribute("id");

    this.setState({ cid, categoryName });
  };

  openModal() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Are You Sure ?
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              If you delete the {this.state.categoryName} all the products of{" "}
              {this.state.categoryName} will be deleted.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                id={this.state.cid}
                onClick={this.deleteCategory}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect from={this.props.location.pathname} to="/login" />;
    }

    let countNum = 0;
    const allCategories = this.state.categories.map((category) => {
      countNum += 1;
      return (
        <tr key={category._id}>
          <th scope="row">{countNum}</th>
          <td>{category.categoryName}</td>
          <td>
            <span
              className="badge badge-success"
              style={{ cursor: "pointer" }}
              id={category._id}
              value={category.categoryName}
              onClick={this.editCategory}
            >
              <i className="fa fa-pencil-square-o"></i>
            </span>
          </td>
          <td>
            <span
              id={category._id}
              value={category.categoryName}
              className="badge badge-danger"
              style={{ cursor: "pointer" }}
              onClick={this.deleteModalOpen}
              data-toggle="modal"
              data-target="#exampleModal"
              // onClick={this.deleteCategory}
            >
              <i className="fa fa-trash"></i>
            </span>
          </td>
        </tr>
      );
    });

    return (
      <React.Fragment>
        <AdminHeader logoutHandler={this.props.logoutHandler} />

        <div className="viewCategoryMain">
          <SectionTitle title="Categories" />
          <div className="tableDiv" style={{ padding: "0 3%" }}>
            <table className="table mt-4 mb-4 pl-2 pr-2">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" style={{ fontWeight: "400" }}>
                    Number
                  </th>
                  <th scope="col" style={{ fontWeight: "400" }}>
                    Category
                  </th>
                  <th scope="col" style={{ fontWeight: "400" }}>
                    Edit
                  </th>
                  <th scope="col" style={{ fontWeight: "400" }}>
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>{allCategories}</tbody>
            </table>
          </div>
          {this.openModal()}
        </div>
      </React.Fragment>
    );
  }
}

export default ViewCategory;
