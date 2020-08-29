import React, { Component, useState, useEffect } from "react";
import { qlPhimService } from "../../services/QuanLyPhimService";
import { NavLink } from "react-router-dom";
import Carousel from "./Carousel";
import News from "./News";
import Foot from "./Foot";
import "./Home.css";

export default function Home(props) {
  let [dsPhim, setDSPhim] = useState([]);
  useEffect(() => {
    //Callapi
    qlPhimService
      .layDanhSachPhim()
      .then((res) => {
        console.log("dsPhim", res.data);
        setDSPhim(res.data.items);
      })
      .catch((err) => {
        //console.log(err.response.data);
      });
  }, []);

  return (
    <div className="DSPhim">
      <Carousel></Carousel>
      <br></br>
      <div>
        <div className="container my-5 ">
          <h3 className="text-center text-danger">Danh sách phim</h3>
          <div className="row">
            {dsPhim.map((phim, index) => {
              return (
                <div
                  className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3 py-4 "
                  key={index}
                >
                  <div className="card text-left text-white phim ">
                    <img
                      className="card-img-top img-fluid"
                      src={phim.hinhAnh}
                      alt="123"
                    />
                    <div className="card-body">
                      <h4 className="card-title text-danger">{phim.tenPhim}</h4>
                      <p className="card-text">{phim.moTa}</p>
                      <NavLink to={`/detail/${phim.maPhim}`}>
                        <button
                          className="btn_detail"
                          onClick={() => {
                            props.history.push(`/detail/${phim.maPhim}`);
                          }}
                          className="btn btn-success"
                        >
                          Xem chi tiết
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <News></News>
      <Foot></Foot>
    </div>
  );
}
