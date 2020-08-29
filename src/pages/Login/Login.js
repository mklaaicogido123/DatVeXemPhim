import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungActions";
import "./login.css";
import Foot from "../Home/Foot";

//useSelector: thay thế mapStateToProps
//useDispatch: mapDispatchToProps (hoặc this.props.dispatch)

//Nơi khai báo các biến không cần thiết load lại khi setState (useState Hook)

export default function Login(props) {
  //Nơi khai báo các biến hàm cần load lại mỗi khi thay đổi state, props
  let [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  }); //Hook useState (giông thuộc tính state và phương thức setState)
  let dispatch = useDispatch(); //ứng với this.props.dispatch
  const propNguoidung = useSelector(
    (state) => state.QuanLyNguoiDungReducer.nguoiDung
  );
  console.log("newState", state);
  let handleChange = (event) => {
    let { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  let handleLogin = (event) => {
    event.preventDefault();
    //dispatch dữ liệu lên redux
    dispatch(dangNhapAction(state));
  };

  return (
    <div>
      <div className="form-login text-center text-white">
        <div>
          <img src="./img/web-logo.png" />
          <h1 className="text-danger">Thế giới phim trên đầu ngón tay</h1>
          <br />
          <h3 className="text-success">Đăng nhập để nhận ưu đãi</h3>
        </div>
        {localStorage.getItem("userLogin") ? (
          <h3 className="text-primary">
            Đăng nhập thành công : {propNguoidung.taiKhoan}
          </h3>
        ) : (
          <>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <span>Tài khoản</span>
                <input
                  name="taiKhoan"
                  className="form-control input"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group input">
                <span>Mật khẩu</span>
                <input
                  name="matKhau"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <button className="my-4 btn btn-danger">Đăng nhập</button>
              </div>
            </form>
          </>
        )}
      </div>
      <Foot></Foot>
    </div>
  );
}
