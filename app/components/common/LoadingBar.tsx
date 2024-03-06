import Image from "next/image";
import gradation from "@/app/assets/gradation.png";
import styles from "./LoadingBar.module.css";

const LoadingBar = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingAnimation}>
        <Image
          src={gradation}
          alt="로딩중"
          layout="fill"
          objectFit="cover"
          className={styles.loadingImage}
        />
      </div>
      <div className={styles.loadingText}>LOADING</div>
    </div>
  );
};

export default LoadingBar;
