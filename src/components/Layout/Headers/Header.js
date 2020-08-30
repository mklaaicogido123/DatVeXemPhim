import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export const Header = (props) => {
  //Kết nối đến QuanLyNguoiDungReducer lấy về state.nguoiDung
  let nguoiDung = useSelector(
    (state) => state.QuanLyNguoiDungReducer.nguoiDung
  );

  return (
    <nav>
      <header class="header ">
        <div class="header__logo">
          <NavLink to="/home">
            <a href="#">
              {/* <img class="web-logo img-fluid" src="./img/web-logo.png" /> */}
              <img
                class="web-logo img-fluid"
                src="https://tix.vn/app/assets/img/icons/web-logo.png"
              />
            </a>
          </NavLink>
        </div>
        <div class="header__center">
          <NavLink to="/home">
            <a class="text-dark" href="#">
              Trang chủ
            </a>
          </NavLink>
          {localStorage.getItem("userLogin") ? (
            <>
              <a class="text-dark" href="#">
                Hi,bạn đã đăng nhập
              </a>
              <a
                onClick={() => {
                  localStorage.removeItem("");
                }}
              >
                Đăng xuất
              </a>
            </>
          ) : (
            <>
              <NavLink to="/register">
                <a class="text-dark" href="#">
                  Đăng ký
                </a>
              </NavLink>
              <NavLink to="/login">
                <a class="text-dark mx-4">Đăng Nhập</a>
              </NavLink>
            </>
          )}
        </div>
        <div class="header__account img-circle">
          <a href="#">
            <img
              class="rounded-circle"
              src="https://tix.vn/app/assets/img/avatar.png"
            />
          </a>
        </div>
        <div class="header__location mx-5 p-2">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hồ Chí Minh
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Hà Nội
                    </a>
                    <a class="dropdown-item" href="#">
                      Đà Nẵng
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </nav>
  );
};
