import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";
import LoaDing from "../pages/LoaDing/LoaDing";
const UserTemplate = () => {
  const { isLoading } = useSelector((state) => state.loading);
  console.log(isLoading);
  return (
    <Fragment>
      {isLoading ? <LoaDing /> : <></>}
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default UserTemplate;
