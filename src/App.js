import React from "react";
import { Route, Switch } from "react-router-dom";
// import AdminPage from "./Components/Admin/Admin";
import LoginForm from "./Components/Admin/LoginForm/LoginForm";
import AddCategory from "./Components/Admin/Category/AddCategory";
import EditCategory from "./Components/Admin/Category/EditCategory";
import ViewCategory from "./Components/Admin/Category/ViewCategory";
import AddProduct from "./Components/Admin/Products/AddProduct";
import EditProduct from "./Components/Admin/Products/EditProduct";
import ViewProducts from "./Components/Admin/Products/ViewProducts";
import ViewMessages from "./Components/Admin/Messages/ViewMessages";
import EditVideo from "./Components/Admin/Video/EditVideo";
import HomePage from "./Components/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <div className="mainContent">
        <Switch>
          <Route path="/helloAdmin" component={LoginForm} />
          <Route path="/add-category" component={AddCategory} />
          <Route path="/edit-category" component={EditCategory} />
          <Route path="/view-category" component={ViewCategory} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/edit-product" component={EditProduct} />
          <Route path="/view-products" component={ViewProducts} />
          <Route path="/view-messages" component={ViewMessages} />
          <Route path="/edit-video" component={EditVideo} />

          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
