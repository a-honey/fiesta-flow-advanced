"use client";
import Image from "next/image";
import styles from "./index.module.css";
import arrow_left from "@/app/assets/arrow_left.svg";
import { useRouter } from "next/navigation";

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
    <section className="bg">
      <Image
        className={styles.arrow_left}
        src={arrow_left}
        alt="Fiesta Flow logo"
        onClick={goBack}
        width={25}
        height={25}
      />
      {children}
    </section>
  );
}
