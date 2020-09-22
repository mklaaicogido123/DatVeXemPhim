import React, { useState, useEffect, Fragment } from "react";
import { qlPhimService } from "../../services/QuanLyPhimService";
import "./BookingTicket.scss";
import { userLogin, domain } from "../../config/setting";
import Axios from "axios";

import Foot from "../Home/Foot";

export default function BookingTicket(props) {
  let resData;
  let [thongTinPhongVe, setThongTinPhongVe] = useState({});
  let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([]);

  useEffect(() => {
    qlPhimService
      .layChiTietPhongVe(props.match.params.maLichChieu)
      .then((res) => {
        console.log(res.data);
        setThongTinPhongVe(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const datGhe = (ghe) => {
    //ghe Duoc click

    let indexGhe = danhSachGheDangDat.findIndex(
      (gheDD) => gheDD.stt === ghe.stt
    );
    //Kiểm tra ghế được click có trong mảng thì remove ra, chưa có thì push vào
    if (indexGhe !== -1) {
      danhSachGheDangDat.splice(indexGhe);
    } else {
      danhSachGheDangDat.push(ghe);
    }
    let dsGheDangDatUpdate = [...danhSachGheDangDat];
    setDanhSachGheDangDat(dsGheDangDatUpdate);
  };
  const renderVeDat = (ve) => {};
  const datVe = () => {
    let usLogin = {};
    if (localStorage.getItem(userLogin)) {
      usLogin = JSON.parse(localStorage.getItem(userLogin));
      console.log("đã đăng nhập");
    }
    let obDatVe = {
      maLichChieu: props.match.params.maLichChieu,
      danhSachVe: danhSachGheDangDat,
      taiKhoanNguoiDung: usLogin.taiKhoan,
    };
    console.log(obDatVe);
    Axios({
      url: `${domain}/api/QuanLyDatVe/DatVe`,
      method: "post",
      data: obDatVe,
      headers: {
        Authorization: `Bearer ${usLogin.accessToken}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        resData = res.data;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="booking">
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <h3 className="text-center text-white">Màn hình</h3>
            <div className="screen"></div>
            <div className="text-center my-5">
              {/*Load danh sách ghế */}
              {thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
                let classLoaiGhe = ghe.loaiGhe === "Vip" ? "gheVip" : "";
                //Nếu ghế được người khác đặt thì render ra button đỏ
                if (ghe.daDat) {
                  return (
                    <Fragment>
                      <button disabled className={` text-center ghe gheDaDat `}>
                        X
                      </button>
                      {(index + 1) % 16 === 0 ? <br /> : ""}
                    </Fragment>
                  );
                }

                //Xét xem ghế đang duyệt có trong mảng ghế đang đặt không ?
                let indexGheDD = danhSachGheDangDat.findIndex(
                  (gheDangDat) => gheDangDat.stt === ghe.stt
                );
                let classGheDangDat = indexGheDD !== -1 ? "gheDangDat" : "";

                //Nếu ghế chưa đặt thì render ra ghe thường
                return (
                  <Fragment>
                    <button
                      onClick={() => {
                        datGhe(ghe);
                      }}
                      className={` text-center ghe ${classLoaiGhe} ${classGheDangDat} `}
                    >
                      {ghe.stt}
                    </button>
                    {(index + 1) % 16 === 0 ? <br /> : ""}
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className="col-4">
            <h3 className="text-danger">Thông tin phim</h3>
            <div className="text-danger">
              {thongTinPhongVe.thongTinPhim?.tenPhim}
              <br></br>
              <button
                className="btn btn-danger"
                onClick={() => {
                  datVe();
                }}
              >
                Đặt vé
              </button>
              <div className="gheDaDat text-white">Ghế đã đặt</div>
              <div className="gheVip text-white">Ghế VIP</div>
              <div className="gheDangDat text-white">Ghế đang đặt</div>
            </div>
          </div>
        </div>
        <Foot></Foot>
      </div>
    </div>
  );
}
