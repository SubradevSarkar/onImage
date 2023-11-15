import React from "react";
import css from "./Home.module.css";
import { UploadComponent, DownloadComponent } from "../components";

const Home = () => {
  return (
    <div className={css.main}>
      <div className={css.container}>
        <div className={css.hero}>
          <UploadComponent />
          <DownloadComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
