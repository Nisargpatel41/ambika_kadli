import React from "react";
import AdminHeader from "../Header/Header";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";

const ViewProducts = () => {
  return (
    <React.Fragment>
      <AdminHeader />

      <div className="viewProductsMain">
        <SectionTitle title="Products" />
        <div className="tableDiv">
          <table
            className="table mt-4 mb-4 pl-2 pr-2"
            style={{ overflowX: "scroll" }}
          >
            <thead className="thead-dark">
              <tr>
                <th scope="col" style={{ fontWeight: "400" }}>
                  Number
                </th>
                <th scope="col" style={{ fontWeight: "400" }}>
                  Product
                </th>
                <th scope="col" style={{ fontWeight: "400" }}>
                  Category
                </th>
                <th scope="col" style={{ fontWeight: "400" }}>
                  Edit
                </th>
                <th scope="col" style={{ fontWeight: "400" }}>
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">5</th>
                <td>92.5 Silver Kadli</td>
                <td>Kadli</td>
                <td>
                  <a
                    href="#"
                    className="badge badge-success"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa fa-pencil-square-o"></i>
                  </a>
                </td>
                <td>
                  <span
                    className="badge badge-danger"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa fa-trash"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>

                <td>92.5 Silver Kadli</td>
                <td>Kadli</td>
                <td>
                  <a
                    href="#"
                    className="badge badge-success"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa fa-pencil-square-o"></i>
                  </a>
                </td>
                <td>
                  <span
                    className="badge badge-danger"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa fa-trash"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>92.5 Silver Kadli</td>
                <td>Kadli</td>
                <td>
                  <a
                    href="#"
                    className="badge badge-success"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa fa-pencil-square-o"></i>
                  </a>
                </td>
                <td>
                  <span
                    className="badge badge-danger"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa fa-trash"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>90.5 Silver Kada</td>
                <td>Kada</td>
                <td>
                  <a
                    href="#"
                    className="badge badge-success"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa fa-pencil-square-o"></i>
                  </a>
                </td>
                <td>
                  <span
                    className="badge badge-danger"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa fa-trash"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>92.5 Silver Lucky</td>
                <td>Lucky</td>
                <td>
                  <a
                    href="#"
                    className="badge badge-success"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa fa-pencil-square-o"></i>
                  </a>
                </td>
                <td>
                  <span
                    className="badge badge-danger"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa fa-trash"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewProducts;
