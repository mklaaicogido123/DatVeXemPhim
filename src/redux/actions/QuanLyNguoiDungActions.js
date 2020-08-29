import axios from 'axios'
import { dang_nhap } from '../types/QuanLyNguoiDungType';
import { userLogin, accessToken, domain } from '../../config/setting';

//--------action ajax------------

export const dangNhapAction = ({ taiKhoan, matKhau }) => {
    return dispatch => {
        axios({
            url: `${domain}/api/quanlynguoidung/dangnhap`,
            method: 'post',
            data: { taiKhoan, matKhau }
        }).then(result => {
            console.log(result.data)
            //Lưu thông tin đăng nhập vào local storage
            localStorage.setItem(userLogin,JSON.stringify(result.data))
            //Lưu thông tin token vào localStorage
            localStorage.setItem(accessToken,result.data.accessToken);
            dispatch({
                type:dang_nhap,
                nguoiDung:result.data
            })
        }).catch(error => {
            console.log(error.response.data)
        });
    }
}

//-----------------Action thường ----------