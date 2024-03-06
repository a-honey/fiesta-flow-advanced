"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import curation1 from "@/app/assets/curation1.jpg";
import curation2 from "@/app/assets/curation2.jpg";
import curation3 from "@/app/assets/curation3.jpg";
import curation4 from "@/app/assets/curation4.jpg";
import curation5 from "@/app/assets/curation5.jpg";

const IMG_DATA = [
  { curationSrc: curation1, curationTitle: "서울 불꽃 축제" },
  { curationSrc: curation2, curationTitle: "석촌호수 벚꽃 축제" },
  { curationSrc: curation5, curationTitle: "워터뮤직페스티벌" },
  { curationSrc: curation3, curationTitle: "남양주 낭만등불축제" },
  { curationSrc: curation4, curationTitle: "월드 디제이 페스티벌" },
];

const ImgSlider = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(2);

  const gridColumns = Array.from({ length: 5 }, (_, index) =>
    index === activeImgIndex ? "4fr" : "1fr"
  );

  return (
    <div
      className={styles.imgSliderContainer}
      style={{ gridTemplateColumns: gridColumns.join(" ") }}
    >
      {IMG_DATA.map((item, index) => (
        <div key={item.curationTitle} className={styles.cover_container}>
          <Image
            src={item.curationSrc}
            alt={item.curationTitle}
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            onClick={() => {
              setActiveImgIndex(index);
            }}
          />
          {activeImgIndex === index && (
            <div className={styles.curation_title}>{item.curationTitle}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImgSlider;
