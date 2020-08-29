import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className=" bg-dark text-white text-center">
        <section className="p-5">
          <div className="">
            <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
            <span>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </span>
            <span>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              <br />
              đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
              ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
              Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí
              Minh cấp.
            </span>
            <span>
              Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
              <br />
              Email:
              <a href="mailto:support@tix.vn" style={{ color: "#fb4226" }}>
                support@tix.vn
              </a>
            </span>
          </div>
        </section>
      </div>
    );
  }
}
