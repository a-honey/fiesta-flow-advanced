"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import profile from "@/app/assets/profile.svg";
import edit from "@/app/assets/edit.svg";
import BookedFestivalChip from "./BookedFestivalChip";
import { instance } from "../api";

type USER_DATA_TYPE = {
  id: string;
  username: string;
  profileImage: string;
};
const INITIAL_USER_DATA = {
  id: "",
  username: "",
  profileImage: "",
};

function MyPage() {
  const [isFetching, setIsFetching] = useState(false);
  const [userData, setUserData] = useState<USER_DATA_TYPE>(INITIAL_USER_DATA);

  useEffect(() => {
    const getDatas = async () => {
      setIsFetching(true);
      try {
        await instance.get<USER_DATA_TYPE>("/users/current").then((res) => {
          setUserData({
            id: res.data.id,
            username: res.data.username,
            profileImage: res.data.profileImage,
          });
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };
    getDatas();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.festival_chip_container}>
          <Image src={profile} alt="프로필 이미지" width={60} height={60} />
          <div className={styles.festival_profile_name}>
            <div>정아현</div>
            <Link href="/my/edit">
              <Image
                src={edit}
                alt="프로필 수정 이동 아이콘"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <ul className={styles.festival_list_container}>
          <BookedFestivalChip />
          <BookedFestivalChip />
          <BookedFestivalChip />
        </ul>
      </div>
    </>
  );
}

export default MyPage;
