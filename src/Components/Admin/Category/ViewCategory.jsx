import React, { Component } from "react";
import AdminHeader from "../Header/Header";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import axios from "axios";

class ViewCategory extends Component {
  state = { categories: [] };
  componentWillMount() {
    axios
      .get("http://localhost:5000/api/category")
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
      `http://localhost:5000/api/category/${cid}`
    );
    const deletedCategory = result.data;
    const categories = this.state.categories.filter(
      (c) => c._id !== deletedCategory._id
    );
    this.setState({ categories });
  };

  render() {
    let countNum = 0;
    const allCategories = this.state.categories.map((category) => {
      countNum += 1;
      return (
        <tr key={category._id}>
          <th scope="row">{countNum}</th>
          <td>{category.categoryName}</td>
          <td>
            <a
              href="#"
              className="badge badge-success"
              style={{ cursor: "pointer" }}
              id={category._id}
              value={category.categoryName}
              onClick={this.editCategory}
            >
              <i className="fa fa-pencil-square-o"></i>
            </a>
          </td>
          <td>
            <span
              id={category._id}
              className="badge badge-danger"
              style={{ cursor: "pointer" }}
              onClick={this.deleteCategory}
            >
              <i className="fa fa-trash"></i>
            </span>
          </td>
        </tr>
      );
    });

    return (
      <React.Fragment>
        <AdminHeader />

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
        </div>
      </React.Fragment>
    );
  }
}

export default ViewCategory;
