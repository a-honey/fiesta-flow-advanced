import React from "react";
import styles from "./index.module.css";

const AnswerChip = ({
  answer,
  isActive,
  index,
  handleActiveAnswerClick,
}: {
  index: number;
  answer: string;
  isActive: boolean;
  handleActiveAnswerClick: (index: number) => void;
}) => {
  return (
    <li
      key={answer}
      className={
        isActive ? `${styles.answer_chip} ${styles.active}` : styles.answer_chip
      }
      onClick={() => {
        handleActiveAnswerClick(index);
      }}
    >
      {answer}
    </li>
  );
};

export default AnswerChip;
