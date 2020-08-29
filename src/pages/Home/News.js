import React, { Component } from "react";

export default class News extends Component {
  render() {
    return (
      <div>
        <section class="news my-5">
          <div class="news__topic">
            <div class="container">
              <div class="row">
                <h1 class="text-danger col-xs-12 col-sm-4">Điện Ảnh 24h</h1>
                <h1 class="col-xs-12 col-sm-4 h1 text-white">Review</h1>
                <h1 class="col-xs-12 col-sm-4 h1 text-white">Khuyến Mãi</h1>
              </div>
            </div>
          </div>

          <div class="news__content container">
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <div class="container">
                  <div class="bg-light">
                    <img
                      class="card-img-top img-fluid"
                      src="img/mua-1-tang-1-khi-mua-2-ve-phim-bang-chung-vo-hinh-15943590328480.jpg"
                      alt="Card image"
                    />
                    <div class="text-center">
                      <h3>MUA 1 TẶNG 1 khi mua 2 vé phim Bằng Chứng Vô Hình</h3>
                      <br />
                      <p>
                        ZaloPay mang đến ưu đãi khủng cho lần đầu thanh toán. Mở
                        TIX đặt vé phim Bằng Chứng Vô Hình ngay thôi!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="container">
                  <div class="bg-light">
                    <img
                      class="card-img-top"
                      src="img/mua-1-tang-1-khi-mua-2-ve-phim-bang-chung-vo-hinh-15943590328480.jpg"
                      alt="Card image"
                    />
                    <div class="text-center">
                      <h3>MUA 1 TẶNG 1 khi mua 2 vé phim Bằng Chứng Vô Hình</h3>
                      <br />
                      <p>
                        ZaloPay mang đến ưu đãi khủng cho lần đầu thanh toán. Mở
                        TIX đặt vé phim Bằng Chứng Vô Hình ngay thôi!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
