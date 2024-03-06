import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo_white from "@/app/assets/logo_white.svg";
import close from "@/app/assets/close.svg";
import styles from "./index.module.css";
import Loading from "./question/Loading";

function FestivalPage() {
  return (
    <>
      <Link href="/home" className={styles.close}>
        <Image src={close} alt="Fiesta Flow logo" width={40} height={40} />
      </Link>
      <div className={styles.content}>
        <Image
          className={styles.logo}
          src={logo_white}
          alt="Fiesta Flow logo"
          width={52}
          height={30}
        />
        <div className={styles.content_container}>
          <h3>나의 축제 취향은?</h3>
          <div className={styles.text_container}>
            <div>나의 축제 취향을 테스트하고</div>
            <div>내가 좋아할만한 축제 추천을 받아보세요!</div>
          </div>
        </div>
      </div>
      <button className={styles.start_button}>
        <Link href="/festival/question">테스트 시작하기</Link>
      </button>
    </>
  );
}

export default FestivalPage;
