import React from "react";

const Carousel = () => {
  return (
    <div>
      <section class="carousel">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators control">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="img/con-mua-tinh-dau-15931063648911.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="./img/soi-15927940748987.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="./img/nhim-soc-15931064792428.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="home">
          <div class="home__tool">
            <div class="selectFilm home__tool__inside">Phim</div>
            <div class="selectCinema home__tool__inside">Rạp</div>
            <div class="selectDate home__tool__inside">Ngày xem</div>
            <div class="selectSesion home__tool__inside">Suất chiéu</div>
            <div class="Buy">
              <button class="btn-dark btnBuy">Mua vé ngay</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
