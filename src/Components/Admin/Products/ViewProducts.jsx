import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AdminHeader from "../Header/Header";
import ImageZoom from "../../Common/ProductBox/ImageZoom";
import Pagination from "./Pagination";
import BackDrop from "../../Common/Backdrop/Backdrop";
import { paginate } from "./paginate";
import { toast } from "react-toastify";
import axios from "axios";
import disableScroll from "disable-scroll";

class ViewProducts extends Component {
  state = {
    products: [],
    productsCopy: [],
    currentPage: 1,
    pageSize: 4,
    totalCount: 0,
    categories: [],
    imageModal: false,
    imgSrc: "",
  };

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

  async componentDidMount() {
    const { data } = await axios.get(
      "https://ambika-kadli.herokuapp.com/api/product"
    );
    this.setState({
      productsCopy: data,
      products: data,
      totalCount: data.length,
    });
  }

  productsFilter = (e) => {
    e.preventDefault();
    const cid = e.target.elements.selectCategory.value;

    let productsCopy = [];
    this.state.products.map((product) => {
      if (product.categoryId === cid) productsCopy.push(product);
      return true;
    });
    let totalCount = productsCopy.length;
    this.setState({ productsCopy, totalCount });
  };

  deleteProduct = async (e) => {
    const pid = e.currentTarget.getAttribute("id");

    const authToken = localStorage.getItem("token");

    axios
      .delete("https://ambika-kadli.herokuapp.com/api/product", {
        headers: {
          "x-auth-token": authToken,
        },
        data: {
          pid: pid,
        },
      })
      .then((result) => {
        toast.error("Product Deleted!");
        const deletedProduct = result.data;
        const products = this.state.products.filter(
          (p) => p._id !== deletedProduct._id
        );
        this.setState({ products });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const { pageSize, currentPage, productsCopy } = this.state;

    const data = paginate(productsCopy, currentPage, pageSize);

    return { products: data };
  };

  imageZoomOpener = (e) => {
    this.setState({ imageModal: true, imgSrc: e.target.src });
    disableScroll.on();
  };

  imageZoomCloser = () => {
    this.setState({ imageModal: false, imgSrc: "" });
    disableScroll.off();
  };

  imageZoomRender() {
    if (this.state.imageModal) {
      return <ImageZoom imgSrc={this.state.imgSrc} />;
    } else return null;
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect from={this.props.location.pathname} to="/login" />;
    }
    const allCategories = this.state.categories.map((category) => {
      return (
        <option key={category._id} value={category._id}>
          {category.categoryName}
        </option>
      );
    });

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
            src={`https://ambika-kadli.herokuapp.com/${productImg}`}
            style={{
              width: "4em",
              height: "3em",
              marginLeft: "0.5em",
              marginTop: "0.5em",
            }}
            onClick={this.imageZoomOpener}
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
              <button
                id={product._id}
                onClick={this.deleteProduct}
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
          <div className="resultDiv p-2 pb-4">
            <form onSubmit={this.productsFilter}>
              <div style={{ display: "inline-flex" }}>
                <div className="form-group pt-2 ml-3">
                  <select className="form-control" id="selectCategory">
                    {allCategories}
                  </select>
                </div>
                <div className="form-group pt-2 ml-4">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    style={{ height: "2.4em" }}
                    value="Ok"
                  />
                </div>
              </div>
            </form>
            {card}
            <Pagination
              itemsCount={this.state.totalCount}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
          {this.imageZoomRender()}
          <BackDrop
            imageModal={this.state.imageModal}
            imageZoomCloser={this.imageZoomCloser}
          />
        </React.Fragment>
      </div>
    );
  }
}

export default ViewProducts;
