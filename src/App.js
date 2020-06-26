import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import AdminHomePage from "./Components/Admin/Admin";
import LoginForm from "./Components/Admin/LoginForm/LoginForm";
import ForgotPassword from "./Components/Admin/LoginForm/ForgotPassword";
import AddCategory from "./Components/Admin/Category/AddCategory";
import EditCategory from "./Components/Admin/Category/EditCategory";
import ViewCategory from "./Components/Admin/Category/ViewCategory";
import AddProduct from "./Components/Admin/Products/AddProduct";
import EditProduct from "./Components/Admin/Products/EditProduct";
import ViewProducts from "./Components/Admin/Products/ViewProducts";
import ViewMessages from "./Components/Admin/Messages/ViewMessages";
import EditVideo from "./Components/Admin/Video/EditVideo";
import HomePage from "./Components/HomePage/HomePage";
import ProductsPage from "./Components/ProductsPage/ProductsPage";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import ContactPage from "./Components/ContactPage/ContactPage";
import Footer from "./Components/Common/Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

class App extends Component {
  state = {
    isAuth: true,
    load: false,
    categories: [],
    redirect: false,
    categoryId: "",
  };

  loggedIn = () => {
    this.setState({ isAuth: true });
  };

  async componentWillMount() {
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

  componentDidMount() {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");

    if (!token || !expiryDate) {
      this.setState({ isAuth: false });
    }

    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
    }
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    this.setAutoLogout(remainingMilliseconds);
  }

  logoutHandler = () => {
    this.setState({ isAuth: false });
    // if (!this.state.isAuth) {
    //   window.location.reload();
    // }
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    return <Redirect to="/login" />;
  };

  setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      this.setState({ load: true });
      this.logoutHandler();
    }, milliseconds);
  };

  // movingToProducts = (e) => {
  //   this.setState({ redirect: true, categoryId: "5ee3bb1a48c3b54ea8d949cf" });
  // };

  render() {
    // if (this.state.redirect) {
    //   return <Redirect to={`/products/${this.state.categoryId}`} />;
    // }
    const { isAuth } = this.state;
    return (
      <div className="App">
        <ToastContainer />
        <div className="mainContent">
          <Switch>
            <Route
              path="/admin-home-page"
              render={(props) => (
                <AdminHomePage
                  isAuth={isAuth}
                  logoutHandler={this.logoutHandler}
                  {...props}
                />
              )}
            />
            <Route
              path="/add-category"
              render={(props) => (
                <AddCategory
                  isAuth={isAuth}
                  logoutHandler={this.logoutHandler}
                  {...props}
                />
              )}
            />
            <Route
              path="/edit-category"
              render={(props) => (
                <EditCategory
                  isAuth={isAuth}
                  logoutHandler={this.logoutHandler}
                  {...props}
                />
              )}
            />
            <Route
              path="/view-category"
              render={(props) => (
                <ViewCategory
                  isAuth={isAuth}
                  logoutHandler={this.logoutHandler}
                  {...props}
                />
              )}
            />
            <Route
              path="/add-product"
              render={(props) => (
                <AddProduct
                  isAuth={isAuth}
                  logoutHandler={this.logoutHandler}
                  {...props}
                />
              )}
            />
            <Route
              path="/edit-product"
              render={(props) => (
                <EditProduct
                  isAuth={isAuth}
                  logoutHandler={this.logoutHandler}
                  {...props}
                />
              )}
            />
            <Route
              path="/view-products"
              render={(props) => (
                <ViewProducts
                  isAuth={isAuth}
                  logoutHandler={this.logoutHandler}
                  {...props}
                />
              )}
            />
            <Route
              path="/view-messages"
              render={(props) => (
                <ViewMessages
                  isAuth={isAuth}
                  logoutHandler={this.logoutHandler}
                  {...props}
                />
              )}
            />
            <Route
              path="/edit-video"
              render={(props) => (
                <EditVideo
                  isAuth={isAuth}
                  logoutHandler={this.logoutHandler}
                  {...props}
                />
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <LoginForm loggedIn={this.loggedIn} {...props} />
              )}
            />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route
              path="/product/:pid"
              render={(props) => (
                <SingleProduct categories={this.state.categories} {...props} />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <ContactPage categories={this.state.categories} {...props} />
              )}
            />

            <Route
              path="/products/:cid"
              render={(props) => (
                <ProductsPage categories={this.state.categories} {...props} />
              )}
            />

            <Route
              path="/"
              exact
              render={(props) => (
                <HomePage
                  categories={this.state.categories}
                  // movingToProducts={this.movingToProducts}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
