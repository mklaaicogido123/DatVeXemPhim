import React, { Component } from "react";
import "./Register.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import Foot from "../Home/Foot";

const signUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("input this field"),
  matKhau: yup.string().required("input this field"),
  email: yup.string().required("input this field").email("email invalid"),
  soDt: yup
    .string()
    .matches(/^[0-9]+$/)
    .required("invalid"),
  maNhom: yup.string().required("input this field"),
  maLoaiNguoiDung: yup.string().required("input this field"),
  hoTen: yup.string().required("input this field"),
});
let success = "false";
export default class Register extends Component {
  _handleSubmit = (values) => {
    console.log(values);
    axios({
      method: "post",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: values,
    })
      .then((res) => {
        console.log(res);
        success = "true";
        console.log("Đăng ký thành công");
        this.props.history.push("/home");
        alert("Đăng ký thành công");
      })
      .catch((err) => {
        console.log(err);
        console.log("Đăng ký thất bại");
        alert("Đăng ký thất bại, kiểm tra lại thông tin");
      });
  };
  render() {
    return (
      <div>
        <div className="register_background">
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              email: "",
              soDt: "",
              maNhom: "GP01",
              maLoaiNguoiDung: "KhachHang",
              hoTen: "",
            }}
            validationSchema={signUpUserSchema}
            onSubmit={this._handleSubmit}
            render={(formikProps) => (
              <div className="register container ">
                <div className="row centered-form">
                  <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4 form-register">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title text-danger">
                          Đăng ký để nhận ưu đãi
                        </h3>
                      </div>
                      <div className="panel-body">
                        <Form role="form">
                          <div className="form-group">
                            <Field
                              type="text"
                              name="hoTen"
                              id="hoTen"
                              className="form-control input-sm"
                              placeholder="hoTen"
                              onChange={formikProps.handleChange}
                            />
                            <ErrorMessage name="hoTen"></ErrorMessage>
                          </div>
                          <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                              <div className="form-group">
                                <Field
                                  type="text"
                                  name="taiKhoan"
                                  id="taiKhoan"
                                  className="form-control input-sm"
                                  placeholder="taiKhoan"
                                  onChange={formikProps.handleChange}
                                />
                                <ErrorMessage name="taiKhoan"></ErrorMessage>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                              <div className="form-group">
                                <Field
                                  type="password"
                                  name="matKhau"
                                  id="matKhau"
                                  className="form-control input-sm"
                                  placeholder="matKhau"
                                  onChange={formikProps.handleChange}
                                />
                                <ErrorMessage name="matKhau"></ErrorMessage>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              className="form-control input-sm"
                              placeholder="Email Address"
                              onChange={formikProps.handleChange}
                            />
                          </div>
                          <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                              <div className="form-group">
                                <Field
                                  type="text"
                                  name="soDt"
                                  id="soDt"
                                  className="form-control input-sm"
                                  placeholder="soDt"
                                  onChange={formikProps.handleChange}
                                />
                                <ErrorMessage name="soDt"></ErrorMessage>
                              </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                              <div className="form-group">
                                <Field
                                  as="select"
                                  name="maNhom"
                                  id="maNhom"
                                  className="form-control input-sm"
                                  onChange={formikProps.handleChange}
                                >
                                  <option value="GP01">GP01</option>
                                  <option value="GP02">GP02</option>
                                  <option value="GP03">GP03</option>
                                  <option value="GP04">GP04</option>
                                  <option value="GP05">GP05</option>
                                </Field>
                              </div>
                            </div>
                          </div>

                          <Field
                            as="select"
                            className="col-xs-12 col-sm-12 col-md-12 my-4 form-control"
                            id="maLoaiNguoiDung"
                            name="maLoaiNguoiDung"
                            onChange={formikProps.handleChange}
                          >
                            <option value="KhachHang">Khách hàng</option>
                            <option value="QuanTri">Quản trị</option>
                          </Field>
                          <input
                            type="submit"
                            defaultValue="Register"
                            className="btn btn-info btn-block"
                            // onClick={this.Register_success()}
                          />
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
        <Foot></Foot>
      </div>
    );
  }
}
