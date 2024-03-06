"use client";

import React, { useEffect } from "react";
import styles from "./index.module.css";
import FestivalChip from "./FestivalChip";
import useAuthStore from "../store";
import { useRouter } from "next/navigation";

function StoragePage() {
  const router = useRouter();

  useEffect(() => {
    if (!useAuthStore.getState().isLoggedIn) {
      alert("로그인이 필요합니다.");
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <div className={styles.container}>
        <FestivalChip />
        <FestivalChip />
        <FestivalChip />
        <FestivalChip />
      </div>
    </>
  );
}

export default StoragePage;
