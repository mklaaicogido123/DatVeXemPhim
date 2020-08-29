import axios from "axios";
import { domain, groupID } from "../config/setting";

export class QuanLyPhimService {
  constructor() {}

  layDanhSachPhim = () => {
    return axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=12`,
      method: "GET",
    });
  };

  layChiTietPhim = (maPhim) => {
    return axios({
      url: `${domain}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
  };

  layChiTietPhongVe = (maLichChieu) => {
    return axios({
      url: `${domain}/api/QuanLyDatVe/LayDanhSachPhongVe?maLichChieu=${maLichChieu}`,
      method: "GET",
    });
  };
}

export const qlPhimService = new QuanLyPhimService();
