import React from "react";
import AdminHeader from "../Header/Header";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddCategory = () => {
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    const categoryName = e.target.elements.addCategory.value;
    e.target.elements.addCategory.value = "";
    axios
      .post("http://localhost:5000/api/category", {
        categoryName: categoryName,
      })
      .then((response) => {
        toast.success("Category Added!");
      })
      .then(() => {
        history.push("/view-category");
      })
      .catch((error) => {});
  };
  return (
    <React.Fragment>
      <AdminHeader />

      <div className="addCategoryMain">
        <SectionTitle title="Add Category" />
        <form className="pt-4 pb-4 pl-3 pr-3 formStyles" onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="addCategory">Add Category</label>
            <input
              type="text"
              className="form-control"
              id="addCategory"
              placeholder="Ex: Kadli"
              name="categoryName"
            />
          </div>
          <div className="form-group pt-2">
            <button type="submit" className="btn btn-primary">
              Add Category
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddCategory;
