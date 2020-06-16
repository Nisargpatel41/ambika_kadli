import React, { Component } from "react";
import AdminHeader from "../Header/Header";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import { toast } from "react-toastify";
import axios from "axios";

class EditCategory extends Component {
  state = { cid: "", categoryName: "" };

  componentWillMount() {
    const categoryName = sessionStorage.getItem("categoryName");

    const cid = sessionStorage.getItem("cid");
    this.setState({ cid, categoryName });
    sessionStorage.removeItem("cid");
    sessionStorage.removeItem("categoryName");
  }

  handleChange = (e) => {
    let categoryName = this.state.categoryName;
    categoryName = e.currentTarget.value;
    this.setState({ categoryName });
  };

  cancelEdit = () => {
    this.props.history.push("/view-category");
  };

  submitForm = (e) => {
    e.preventDefault();
    const categoryName = e.target.elements.addCategory.value;
    e.target.elements.addCategory.value = "";
    axios
      .put("http://localhost:5000/api/category", {
        cid: this.state.cid,
        categoryName: categoryName,
      })
      .then((response) => {
        toast.success("Category Updated!");
      })
      .then(() => {
        this.props.history.push("/view-category");
      })
      .catch((error) => {});
  };

  render() {
    return (
      <React.Fragment>
        <AdminHeader />

        <div className="addCategoryMain">
          <SectionTitle title="Edit Category" />
          <form className="pt-4 pb-4 pl-3 pr-3" onSubmit={this.submitForm}>
            <div className="form-group">
              <label htmlFor="addCategory">Edit Category</label>
              <input
                type="text"
                className="form-control"
                id="addCategory"
                placeholder="Ex: Kadli"
                name="categoryName"
                onChange={this.handleChange}
                value={this.state.categoryName}
              />
            </div>
            <div className="form-group pt-2">
              <button type="submit" className="btn btn-primary">
                Update Category
              </button>
              <button
                className="btn btn-secondary ml-3"
                onClick={this.cancelEdit}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default EditCategory;
