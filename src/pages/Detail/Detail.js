import React, { useState, useEffect } from "react";
import { qlPhimService } from "../../services/QuanLyPhimService";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "../css/index.css";
import "./Detail.css";
import Foot from "../Home/Foot";

export default function Detail(props) {
  let [chiTietPhim, setThongTinPhim] = useState({});

  useEffect(() => {
    qlPhimService
      .layChiTietPhim(props.match.params.maPhim)
      .then((res) => {
        //Qua service gọi api lấy về thông tin phim từ tham số url
        console.log(res.data);
        setThongTinPhim(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <div className="text-white detail">
      <div className="row">
        <div className="col-4">
          <img className="hinhAnh" src={chiTietPhim.hinhAnh} />
        </div>
        <div className="col-8">
          <table>
            <thead>
              <tr>
                <th className="text-danger">Tên phim : </th>
                <th> {chiTietPhim.tenPhim}</th>
              </tr>
              <tr>
                <th className="text-danger">Mô tả phim : </th>
                <th> {chiTietPhim.moTa}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      {/*Load hệ thông rap, lịch chiếu */}
      <h3 className="mt-3 mb-3 text-danger"> LỊCH CHIẾU </h3>
      <div className="row">
        <div
          className="col-4 nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {
            // if(chiTietPhim.heThongRapChieu)
            chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
              return (
                <a
                  key={index}
                  className="nav-link"
                  style={{ fontSize: 23 }}
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href={`#${heThongRap.maHeThongRap}`}
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <img src={heThongRap.logo} width={50} height={50} />{" "}
                  {heThongRap.tenHeThongRap}
                </a>
              );
            })
          }
        </div>
        <div className="col-8 tab-content" id="v-pills-tabContent">
          {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
            return (
              <div
                key={index}
                className="tab-pane fade show"
                id={`${heThongRap.maHeThongRap}`}
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                  return (
                    <div key={index}>
                      <h3 className="text-danger">{cumRap.tenCumRap}</h3>
                      <div className="row">
                        {cumRap.lichChieuPhim
                          ?.slice(0, 12)
                          .map((lichChieu, index) => {
                            return (
                              <NavLink
                                className="col-3"
                                to={`/bookingticket/${lichChieu.maLichChieu}`}
                              >
                                {moment(lichChieu.ngayChieuGioChieu).format(
                                  "hh:mm A"
                                )}
                              </NavLink>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          {/* <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
        </div>
      </div>
      <Foot></Foot>
    </div>
  );
}
