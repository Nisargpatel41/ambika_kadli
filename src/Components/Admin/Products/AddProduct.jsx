import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import AdminHeader from "../Header/Header";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import { toast } from "react-toastify";

class AddProduct extends Component {
  state = { categories: [], selectedFile: null, isSending: false };

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

  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ isSending: true });

    const productName = e.target.elements.addProduct.value;
    e.target.elements.addProduct.value = "";
    // console.log("Pname", productName);

    const categoryId = e.target.elements.selectCategory.value;
    // console.log("cid", categoryId);

    const productMetal = e.target.elements.selectMetal.value;
    // console.log("metal", productMetal);

    const productWeight = e.target.elements.productWeight.value;
    e.target.elements.productWeight.value = "";
    // console.log("weight", productWeight);

    const productTouch = e.target.elements.productTouch.value;
    e.target.elements.productTouch.value = "";
    // console.log("Touch", productTouch);

    const productPrice = e.target.elements.productPrice.value;
    e.target.elements.productPrice.value = "";
    // console.log("Price", productPrice);

    const data = new FormData();
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      data.append("productImages", this.state.selectedFile[x]);
    }
    e.target.elements.productImages.value = "";

    data.set("productName", productName);
    data.set("categoryId", categoryId);
    data.set("productWeight", productWeight);
    data.set("productMetal", productMetal);
    data.set("productTouch", productTouch);
    data.set("productPrice", productPrice);

    axios
      .post("https://ambika-kadli.herokuapp.com/api/product", data, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((result) => {
        this.setState({ isSending: false });

        toast.success("Product Added!");
      });
  };

  render() {
    if (!this.props.isAuth) {
      return <Redirect from={this.props.location.pathname} to="/login" />;
    }

    const { isSending } = this.state;
    const submitBtnValue = isSending ? "Adding Product..." : "Add Product";

    const allCategories = this.state.categories.map((category) => {
      return (
        <option key={category._id} value={category._id}>
          {category.categoryName}
        </option>
      );
    });

    return (
      <React.Fragment>
        <AdminHeader logoutHandler={this.props.logoutHandler} />

        <div className="addProductsMain">
          <SectionTitle title="Add Product" />
          <form
            className="pt-4 pb-4 pl-3 pr-3 formStyles"
            onSubmit={this.submitForm}
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label htmlFor="addProduct">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="addProduct"
                placeholder="Ex: 92.5 Silver Kadli"
                autoFocus
              />
            </div>
            <div className="form-group pt-2">
              <label htmlFor="selectCategory">Category</label>
              <select className="form-control" id="selectCategory">
                {allCategories}
              </select>
            </div>
            <div className="form-group pt-2">
              <label htmlFor="selectMetal">Metal</label>
              <select className="form-control" id="selectMetal">
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
              </select>
            </div>
            <div className="form-group pt-2">
              <label htmlFor="productWeight">Product Weight</label>
              <input
                type="text"
                className="form-control"
                id="productWeight"
                placeholder="Ex: 243.5"
              />
            </div>
            <div className="form-group pt-2">
              <label htmlFor="productTouch">Product Touch</label>
              <input
                type="text"
                className="form-control"
                id="productTouch"
                placeholder="Ex: 90.0"
              />
            </div>
            <div className="form-group pt-2">
              <label htmlFor="productPrice">Product Price</label>
              <input
                type="text"
                className="form-control"
                id="productPrice"
                placeholder="Ex: 1000"
              />
            </div>

            <div className="form-group pt-2">
              <label htmlFor="productImages">Product Images</label>
              <input
                type="file"
                id="productImages"
                name="productImages"
                className="form-control"
                multiple
                onChange={this.onChangeHandler}
              />
            </div>

            <div className="form-group pt-3 ">
              <input
                type="submit"
                className="btn btn-primary "
                value={submitBtnValue}
                disabled={isSending}
                style={{ height: "2.5em" }}
              />
              <button
                className="ml-3 btn btn-secondary"
                onClick={() => {
                  this.props.history.push("/view-products");
                }}
              >
                View Products
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddProduct;
