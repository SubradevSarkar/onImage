import React from "react";
import css from "./Home.module.css";
import onImage_logo from "../assets/onImage-logo.svg";
import UploadImage from "../components/uploadImage";
import DownloadImage from "../components/downloadImage";

const Home = () => {
  return (
    <div className={css.main}>
      <div className={css.container}>
        <div className={css.navbar}>
          <img className={css.logo} src={onImage_logo} alt="onImage-logo" />
        </div>
        <div className={css.hero}>
          <UploadImage />
          <DownloadImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
