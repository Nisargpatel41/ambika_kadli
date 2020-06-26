import React, { Component } from "react";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import ContactText from "./ContactText";
import ContactForm from "./ContactForm";
import Header from "../Common/Header/Header";
import "./ContactPage.css";

class ContactPage extends Component {
  state = {};

  movingToProductsFromNav = (e) => {
    e.preventDefault();

    this.props.history.push(`/products/${e.target.id}`);
  };

  render() {
    return (
      <React.Fragment>
        <Header
          categories={this.props.categories}
          movingToProductsFromNav={this.movingToProductsFromNav}
        />

        <div className="contactPageMain">
          <SectionTitle title="Contact Me" />
          <div className="contactPageContent">
            <ContactText />
            <ContactForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactPage;
