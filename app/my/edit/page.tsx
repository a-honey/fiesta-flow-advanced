"use client";

import Image from "next/image";
import profile from "@/app/assets/profile.svg";
import styles from "./index.module.css";
import { useState } from "react";
import ImageSelectModal from "./ImageSelectModal";

const MyEditPage = () => {
  const [isOpenImageSelectModal, setIsOpenImageSelectModal] = useState(false);

  const toggleIsOpenImageSelectModal = () => {
    setIsOpenImageSelectModal((prev) => !prev);
  };

  return (
    <>
      <div className={styles.page_container}>
        <div className={styles.nav_container}>
          <h3>프로필 편집</h3>
          <h4>확인</h4>
        </div>
        <div
          className={styles.profile_container}
          onClick={() => {
            setIsOpenImageSelectModal(true);
          }}
        >
          <div />
          <Image src={profile} alt="프로필 이미지" fill />
        </div>
        <div className={styles.input_container}>
          <input type="text" placeholder="정아현" />
          <span>2자 이상 10자 이내로 입력해주세요</span>
        </div>
      </div>
      {isOpenImageSelectModal && (
        <ImageSelectModal
          toggleIsOpenImageSelectModal={toggleIsOpenImageSelectModal}
        />
      )}
    </>
  );
};

export default MyEditPage;
