import Image from "next/image";
import styles from "./index.module.css";
import bookmark from "@/app/assets/bookmark.svg";
import festivalItemImg from "@/app/assets/curation1.jpg";
import Link from "next/link";

const FestivalChip = () => {
  return (
    <Link className={styles.chip} href="/detail/12">
      <div className={styles.image_container}>
        <Image
          className={styles.bookmark}
          src={bookmark}
          alt="bookmark"
          width={20}
          height={24}
        />
        <Image
          src={festivalItemImg}
          alt="bookmark"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.content_container}>
        <h4>축제명</h4>
        <h5>위치</h5>
      </div>
    </Link>
  );
};

export default FestivalChip;
