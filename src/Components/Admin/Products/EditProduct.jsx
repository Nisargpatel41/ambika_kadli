import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import AdminHeader from "../Header/Header";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import { toast } from "react-toastify";

class EditProduct extends Component {
  state = {
    categories: [],
    metal: ["Gold", "Silver"],
    productObj: {},
    data: {
      productName: "",
      categoryId: "",
      productMetal: "",
      productWeight: "",
      productTouch: "",
      productPrice: "",
    },
  };
  productId = sessionStorage.getItem("pid");
  async componentWillMount() {
    const categoryData = await axios.get(
      "https://ambika-kadli.herokuapp.com/api/category"
    );
    this.setState({ categories: categoryData.data });

    const { data } = await axios.get(
      `https://ambika-kadli.herokuapp.com/api/product/${this.productId}`
    );

    const productInfo = {
      productName: data.productName,
      categoryId: data.categoryId,
      productMetal: data.productMetal,
      productWeight: data.productWeight,
      productTouch: data.productTouch,
      productPrice: data.productPrice,
    };
    this.setState({ productObj: data, data: productInfo });
  }

  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ data });
  };

  submitForm = async (e) => {
    e.preventDefault();
    // const cid = e.target.elements.categoryId.value;
    const pid = { pid: this.productId };
    const updatedProductObj = { ...this.state.data, ...pid };
    sessionStorage.removeItem("pid");

    await axios.put(
      "https://ambika-kadli.herokuapp.com/api/product",
      updatedProductObj,
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );

    toast.success("Product Updated!");
    this.props.history.push("/view-products");
  };

  render() {
    if (!this.props.isAuth) {
      return <Redirect from={this.props.location.pathname} to="/login" />;
    }

    const { data, productObj, metal } = this.state;
    const allCategories = this.state.categories.map((category) => {
      if (productObj.categoryId === category._id) {
        return (
          <option
            name="categoryId"
            key={category._id}
            value={category._id}
            selected
          >
            {category.categoryName}
          </option>
        );
      } else {
        return (
          <option name="categoryId" key={category._id} value={category._id}>
            {category.categoryName}
          </option>
        );
      }
    });

    const metalRender = metal.map((metalVal) => {
      if (productObj.productMetal === metalVal) {
        return (
          <option key={metalVal} value={data.productMetal} selected>
            {metalVal}
          </option>
        );
      } else {
        return (
          <option key={metalVal} value={data.productMetal}>
            {metalVal}
          </option>
        );
      }
    });

    return (
      <React.Fragment>
        <AdminHeader logoutHandler={this.props.logoutHandler} />

        <div className="addProductsMain">
          <SectionTitle title="Edit Product" />
          <form
            className="pt-4 pb-4 pl-3 pr-3 formStyles"
            onSubmit={this.submitForm}
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label htmlFor="addProduct">Product Name</label>
              <input
                name="productName"
                type="text"
                className="form-control"
                id="addProduct"
                placeholder="Ex: 92.5 Silver Kadli"
                value={data.productName}
                onChange={this.handleChange}
                autoFocus
              />
            </div>
            <div className="form-group pt-2">
              <label htmlFor="selectCategory">Category</label>
              <select
                className="form-control"
                name="categoryId"
                id="selectCategory"
                onChange={this.handleChange}
              >
                {allCategories}
              </select>
            </div>
            <div className="form-group pt-2">
              <label htmlFor="selectMetal">Metal</label>
              <select className="form-control" id="selectMetal">
                {metalRender}
              </select>
            </div>
            <div className="form-group pt-2">
              <label htmlFor="productWeight">Product Weight</label>
              <input
                type="text"
                className="form-control"
                id="productWeight"
                placeholder="Ex: 243.5"
                name="productWeight"
                value={data.productWeight}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group pt-2">
              <label htmlFor="productTouch">Product Touch</label>
              <input
                type="text"
                className="form-control"
                id="productTouch"
                placeholder="Ex: 90.0"
                name="productTouch"
                value={data.productTouch}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group pt-2">
              <label htmlFor="productPrice">Product Price</label>
              <input
                type="text"
                className="form-control"
                id="productPrice"
                placeholder="Ex: 1000"
                name="productPrice"
                value={data.productPrice}
                onChange={this.handleChange}
              />
            </div>

            {/* <div className="form-group pt-2">
              <label htmlFor="productImages">Product Images</label>
              <input
                type="file"
                id="productImages"
                name="productImages"
                className="form-control"
                multiple
              />
            </div> */}

            <div className="form-group pt-3 ">
              <button type="submit" className="btn btn-primary ">
                Update Product
              </button>
              <button
                className="ml-3 btn btn-secondary"
                onClick={() => {
                  this.props.history.push("/view-products");
                }}
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

export default EditProduct;
