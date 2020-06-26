import React, { Component } from "react";
import Joi from "joi-browser";
import axios from "axios";
import { toast } from "react-toastify";
// import "react-toastify/dist";
class ContactForm extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      userMobile: "",
      userMessage: "",
    },
    errors: {},
    isSending: false,
  };

  schema = {
    firstName: Joi.string()
      .trim()
      .regex(/^[A-Za-z ]+$/)
      .required()
      .error(() => {
        return {
          message: "Please enter a valid Name",
        };
      }),
    lastName: Joi.string()
      .trim()
      .regex(/^[A-Za-z ]+$/)
      .required()
      .error(() => {
        return {
          message: "Please enter a valid Surname",
        };
      }),
    userMobile: Joi.string()
      .trim()
      .regex(/^[0-9]*$/)
      .min(10)
      .max(10)
      .required()
      .error(() => {
        return {
          message: "Please enter a valid Mobile Number",
        };
      }),

    userMessage: Joi.string()
      .required()
      .error(() => {
        return {
          message: "Please enter a valid Message",
        };
      }),
  };

  validate = () => {
    const { data } = this.state;
    const result = Joi.validate(data, this.schema, { abortEarly: false });

    if (!result.error) return null;
    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    //call the server
    // const CONTACT_API_URL = "http://localhost:5000/api/message";
    const CONTACT_API_URL = "https://ambika-kadli.herokuapp.com/api/message";

    let userData = { ...this.state.data };
    this.setState({ isSending: true });
    try {
      await axios.post(CONTACT_API_URL, userData);
      toast("Message Sent!");
      userData = {
        firstName: "",
        userMessage: "",
        lastName: "",
        userMobile: "",
      };
    } catch (err) {
      console.log(err.response);
    }

    // console.log(result);
    this.setState({ data: userData, isSending: false });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleChange = (e) => {
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };

  render() {
    const { data, errors, isSending } = this.state;
    const submitClassName = isSending
      ? "formInputs disabledBtn submitBtn"
      : "formInputs submitBtn";
    const submitBtnValue = isSending ? "Message Sending..." : "Send Message";
    return (
      <div className="contactFormMain">
        <h3
          className="title getInTouch"
          style={{ fontSize: "1.3em", color: " #4c4c4c" }}
        >
          Get in Touch
        </h3>
        <div className="contactFormDiv">
          <form action="" onSubmit={this.handleSubmit}>
            <div className="formInputGroup">
              <input
                className="formInputs"
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={data.firstName}
                onChange={this.handleChange}
              />
              {errors.firstName && (
                <span className="validationErrorMessage">
                  {errors.firstName}
                </span>
              )}
            </div>

            <div className="formInputGroup">
              <input
                className="formInputs"
                type="text"
                name="lastName"
                placeholder="Surname*"
                value={data.lastName}
                onChange={this.handleChange}
              />
              {errors.lastName && (
                <span className="validationErrorMessage">
                  {errors.lastName}
                </span>
              )}
            </div>

            <div className="formInputGroup">
              <input
                className="formInputs"
                type="text"
                name="userMobile"
                placeholder="Mobile Number*"
                value={data.userMobile}
                onChange={this.handleChange}
              />
              {errors.userMobile && (
                <span className="validationErrorMessage">
                  {errors.userMobile}
                </span>
              )}
            </div>

            <div className="formInputGroup">
              <textarea
                className="formInputs"
                name="userMessage"
                placeholder="Your Message*"
                value={data.userMessage}
                onChange={this.handleChange}
              ></textarea>
              {errors.userMessage && (
                <span className="validationErrorMessage">
                  {errors.userMessage}
                </span>
              )}
            </div>
            {/* <div className="formInputGroup"> */}
            <input
              type="submit"
              className={submitClassName}
              value={submitBtnValue}
              disabled={isSending}
            />
            {/* </div> */}
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
