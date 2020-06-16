import React, { Component } from "react";
import AdminHeader from "../Header/Header";
import Img from "../../../Images/ProductImages/kadli1.jpg";
import Pagination from "./Pagination";
import { paginate } from "./paginate";

import axios from "axios";

class ViewProducts extends Component {
  state = {
    products: [],
    currentPage: 1,
    pageSize: 4,
    totalCount: 0,
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:5000/api/product");
    this.setState({ products: data, totalCount: data.length });
  }

  updateData = (e) => {
    const msgName = e.currentTarget.getAttribute("value");

    const msgId = e.currentTarget.getAttribute("id");

    sessionStorage.setItem("shopId", msgId);

    sessionStorage.setItem("shopName", msgName);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const { pageSize, currentPage, products } = this.state;

    const data = paginate(products, currentPage, pageSize);

    return { products: data };
  };

  render() {
    const { products } = this.getPagedData();
    let countProducts = 0;
    const card = products.map((product) => {
      countProducts += 1;
      // let productImgSrc;
      // console.log(product);
      const productImagesRender = product.productImages.map((productImg) => {
        return (
          <img
            key={productImg}
            src={`http://localhost:5000/${productImg}`}
            style={{
              width: "4em",
              height: "3em",
              marginLeft: "0.5em",
              marginTop: "0.5em",
            }}
            alt="productImage"
          />
        );
      });
      return (
        <div key={product._id} className="card messageCard mt-5 pb-2">
          <div className="card-header">{product.createdAt}</div>
          <div className="card-body p-1">
            <table
              className="table table-bordered"
              style={{ overflowX: "scroll" }}
            >
              <tbody>
                <tr style={{ width: "20px" }}>
                  <th scope="row">Number: </th>
                  <td>{countProducts}</td>
                </tr>

                <tr>
                  <th scope="row">Product Name: </th>
                  <td>{product.productName}</td>
                </tr>
                <tr>
                  <th scope="row">Product Image: </th>
                  <td>{productImagesRender}</td>
                </tr>
                <tr>
                  <th scope="row">Category: </th>
                  <td>{product["Detail"].categoryName}</td>
                </tr>
                <tr>
                  <th scope="row">Touch: </th>
                  <td>{product.productTouch}</td>
                </tr>

                <tr>
                  <th scope="row">Weight: </th>
                  <td>{product.productWeight}</td>
                </tr>
                <tr>
                  <th scope="row">Metal: </th>
                  <td>{product.productMetal}</td>
                </tr>
                <tr>
                  <th scope="row">Price: </th>
                  <td>{product.productPrice}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center">
              <button
                id={product._id}
                className="btn btn-primary"
                onClick={(e) => {
                  const pid = e.currentTarget.getAttribute("id");
                  sessionStorage.setItem("pid", pid);
                  this.props.history.push("edit-product");
                }}
              >
                Edit
              </button>
              <button className="btn btn-danger ml-3">Delete</button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <React.Fragment>
          <AdminHeader />
          <div className="resultDiv p-2 pb-4">
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

export default ViewProducts;
