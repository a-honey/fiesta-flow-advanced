"use client";
import Image from "next/image";
import Link from "next/link";
import { RESPONSE_DATA_TYPE } from "./page";
import styles from "./index.module.css";
import background from "../assets/background_light.png";
import logo_white from "@/app/assets/logo_white.svg";
import arrow_left from "@/app/assets/arrow_left.svg";
import curation5 from "@/app/assets/curation5.jpg";
import { instance } from "@/app/api";
import { useTestResultStore } from "@/app/store";
import { useEffect, useState } from "react";

const ResultModal = ({ body }: { body: unknown }) => {
  const [resultData, setResultData] = useState<unknown>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.post<RESPONSE_DATA_TYPE>(
          "/festival/ai",
          body
        );
        useTestResultStore.getState().setResult(response.data.title);
        setResultData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [body]);
  return (
    <>
      <div className={`bg ${styles.result_bg}`}>
        <div className={styles.layout}>
          <Image src={arrow_left} alt="뒤로가기" width={10} height={20} />
          <Link href="/festival">처음으로</Link>
        </div>
        <div className={styles.card_bg}>
          <Image
            src={background}
            alt="백그라운드 이미지"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className={styles.result_content}>
          <Image
            className={styles.logo}
            src={logo_white}
            alt="Fiesta Flow logo"
            width={52}
            height={30}
          />
          <div>
            <Image
              className={styles.festival}
              src={curation5}
              alt="서울 재즈 페스티벌"
              width={270}
              height={303}
            />
          </div>
          <div className={styles.tag}>취향 카드</div>
          <h3>서울 재즈 페스티벌</h3>
        </div>
        <div className="white_button">이미지 저장</div>
      </div>
    </>
  );
};

export default ResultModal;
