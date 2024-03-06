"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import arrow_left from "@/app/assets/arrow_left.svg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <section className={styles.bg}>
      <Image
        src={arrow_left}
        alt="뒤로가기"
        onClick={goBack}
        width={10}
        height={20}
      />
      {children}
    </section>
  );
}
