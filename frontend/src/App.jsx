import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/layouts/Header";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import store from "./store";
import Profile from "./components/users/Profile";
import UpdateProfile from "./components/users/UpdateProfile";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";
import OrderSuccess from "./components/cart/OrderSuccess";
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";
import { loadUser } from "./actions/userAction";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCartItems } from "./actions/cartAction";

//66716cb0e1a78e67dc8c8dbf
export default function App() {
  //dispatched exactly once when the component is first rendered, and check if user is authenticated or not
  console.log(store);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  //const dispatch = useDispatch();

  // const { user } = useSelector((state) => state.auth);
  // if (user) {
  //   dispatch(fetchCartItems());
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eats/stores/:id/menus" element={<Menu />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/signup" element={<Register />} />
            <Route path="/users/me" element={<Profile />} />
            <Route path="/users/me/update" element={<UpdateProfile />} />
            <Route path="/users/forgotPassword" element={<ForgotPassword />} />
            <Route
              path="/users/resetPassword/:token"
              element={<NewPassword />}
            />
            <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/eats/orders/me/myOrders" element={<ListOrders />} />
          <Route path="/eats/orders/:id" element={<OrderDetails />} />
          <Route path="*" element={<h1>The page doesn't exist</h1> } />
          </Routes>
          {/* <Home /> */}
          {/* <Menu/> */}
          {/* <Cart/> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// React Router DOM helps us to navigate between these pages
//Steps to make it dynamic
// 1. constant
// 2. actions
// 3. reducer
// 4. stores
// 5. dispatch
// 6. map
