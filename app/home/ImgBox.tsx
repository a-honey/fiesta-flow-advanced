import React from "react";
import styles from "./index.module.css";
import ImgSlider from "./ImgSlider";

const ImgBox = () => {
  return (
    <section className={styles.container}>
      <ImgSlider />
    </section>
  );
};

export default ImgBox;
