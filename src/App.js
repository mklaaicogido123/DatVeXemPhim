import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Detail from "./pages/Detail/Detail";
import BookingTicket from "./pages/BookingTicket.js/BookingTicket";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/login" Component={Login} />
        <HomeTemplate exact path="/profile" Component={Profile} />
        <HomeTemplate exact path="/register" Component={Register} />
        <HomeTemplate exact path="/detail/:maPhim" Component={Detail} />
        <HomeTemplate
          exact
          path="/bookingticket/:maLichChieu"
          Component={BookingTicket}
        />

        <AdminTemplate exact path="/admin" Component={Home} />

        <HomeTemplate exact path="/" Component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
