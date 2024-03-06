import React from "react";
import styles from "./index.module.css";

const QuestionChip = ({ question }: { question: string }) => {
  return <div className={styles.question}>{question}</div>;
};

export default QuestionChip;
