import Image from "next/image";
import styles from "./index.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const FestivalChip = ({
  data,
  handleFestivalClick,
  index,
}: {
  data: { imageUrl: string | StaticImport; addr1: string; title: string };
  handleFestivalClick: (index: number) => void;
  index: number;
}) => {
  return (
    <div
      className={styles.chip}
      onClick={() => {
        handleFestivalClick(index);
      }}
    >
      <Image
        src={data.imageUrl}
        alt={data.title}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default FestivalChip;
