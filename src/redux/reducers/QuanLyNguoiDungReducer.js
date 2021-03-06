import { dang_nhap } from "../types/QuanLyNguoiDungType"
import { userLogin } from "../../config/setting";

let usLogin = {};
if(localStorage.getItem(userLogin)){
    usLogin = JSON.parse(localStorage.getItem(userLogin));
}


const initialState = {
    nguoiDung: usLogin
}

export default (state = initialState, action) => {
    switch (action.type) {

    case dang_nhap:
        state.nguoiDung = action.nguoiDung;
        return { ...state }

    default:
        return state;
    }
}
