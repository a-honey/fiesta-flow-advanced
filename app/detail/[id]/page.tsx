import Image from "next/image";
import React, { useState } from "react";
import styles from "./index.module.css";
import curation1 from "@/app/assets/curation5.jpg";

export default function DetailPage(props: any) {
  console.log("다이나믹 라우팅", props.params.id);

  return (
    <>
      <div className={styles.image_container}>
        <Image
          src={curation1}
          alt="페스티벌 이미지"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.info_container}>
          <h2>서울 재즈 페스티벌</h2>
          <h3>여름에 즐기는 귀가 즐거운 음악 페스티벌!</h3>
        </div>
        <div>날짜</div>
        <h4>내용</h4>
        <div>더보기</div>
        <div>
          <div>공유</div>
          <div>저장</div>
        </div>
      </div>
    </>
  );
}
