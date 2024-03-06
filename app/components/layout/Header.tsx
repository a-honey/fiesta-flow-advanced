"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import notification from "@/app/assets/notification.svg";
import profile_svg from "@/app/assets/profile.svg";
import login_svg from "@/app/assets/login.svg";
import useAuthStore from "@/app/store";

const Header = () => {
  const { isLoggedIn, profile, name } = useAuthStore((state) => ({
    isLoggedIn: state.isLoggedIn,
    profile: state.profile,
    name: state.name,
  }));

  return (
    <header className={styles.container}>
      <Image src={notification} alt="Fiesta Flow logo" width={22} height={24} />
      {isLoggedIn ? (
        <Link href="/my">
          <Image
            src={profile_svg}
            alt={`${name}의 프로필 이미지 및 마이페이지 바로가기`}
            width={25}
            height={25}
          />
        </Link>
      ) : (
        <Link href="/login">
          <Image
            src={login_svg}
            alt="로그인페이지 바로가기"
            width={21}
            height={22}
          />
        </Link>
      )}
    </header>
  );
};

export default Header;
