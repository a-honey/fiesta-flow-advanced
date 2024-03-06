"use client";
import React, { Suspense, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import QuestionChip from "./QuestionChip";
import AnswerChip from "./AnswerChip";
import arrow_left from "@/app/assets/arrow_left.svg";
import close from "@/app/assets/close.svg";
import Loading from "./Loading";
import { instance } from "@/app/api";

const ResultModal = React.lazy(() => import("./ResultModal"));
const timeInstance = axios.create({
  timeout: 1000 * 6 * 10 * 2,
});

Object.assign(instance.defaults, timeInstance.defaults);

export type RESPONSE_DATA_TYPE = {
  contentid: number;
  addr1: string;
  title: string;
  firstimage: string;
};

const QUESTION_LIST = [
  {
    question: "넌 어떤 축제가 더 좋아?",
    answerList: [
      { answer: "귀가 즐거운게 좋아", answerBody: "음악" },
      { answer: "눈이 행복한게 좋아", answerBody: "공연" },
      { answer: "입이 쉬지 않았으면 좋겠어", answerBody: "음식" },
      { answer: "움직이는게 좋아", answerBody: "공연" },
      { answer: "다 좋아", answerBody: null },
    ],
  },
  {
    question: "축제에 가고 싶은 이유는?",
    answerList: [
      { answer: "각 지역의 특색을 느끼고 싶어", answerBody: "지역즐기기" },
      { answer: "색다른 추억을 쌓고 싶어", answerBody: "추억쌓기" },
      { answer: "새로운 인연을 찾을지도 몰라", answerBody: "인연찾기" },
      { answer: "그냥 즐길 수 있잖아", answerBody: null },
    ],
  },
  {
    question: "이동 시간도 고려해야할까?",
    answerList: [
      { answer: "무조건 가까운게 좋아", answerBody: "가까운 지역" },
      { answer: "멀어도 상관없어", answerBody: null },
    ],
  },
  {
    question: "축제에 가기로 했다. 어느 계절에 갈까?",
    answerList: [
      { answer: "봄", answerBody: "봄" },
      { answer: "여름", answerBody: "여름" },
      { answer: "가을", answerBody: "가을" },
      { answer: "겨울", answerBody: "겨울" },
      { answer: "멀어도 상관없어", answerBody: null },
    ],
  },
  {
    question: "혼자 가고싶어, 아니면 여러명이서 가고싶어?",
    answerList: [
      {
        answer: "혼자가서 새로운 사람 사이에서 즐길래",
        answerBody: "혼자서 가는",
      },
      {
        answer: "여러명이랑 가야 두배 더 재밌지",
        answerBody: "여러명이서 가는",
      },
      { answer: "상관없어", answerBody: null },
    ],
  },
  {
    question:
      "축제에 온지 한 시간 지났는데, 만원이 남아있다. 이 마지막 찬스를 어디에 쓸래?",
    answerList: [
      { answer: "식품코너에 가보자", answerBody: "먹거리가 풍부한" },
      { answer: "활동체험부스에 가보자", answerBody: "다양한 활동이 많은" },
      { answer: "굿즈를 살래", answerBody: "굿즈상품이 다양한" },
      { answer: "못고르겠어!", answerBody: null },
    ],
  },
];

function FestivalTestPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isOpenResultModal, setIsOpenResultModal] = useState(false);
  const [activeAnswerIndex, setActiveAnswerIndex] = useState<null | number>(
    null
  );
  const [answerArray, setAnswerArray] = useState<string[]>([]);
  const [body, setBody] = useState<unknown>();

  const handleActiveAnswerClick = (index: number) => {
    setActiveAnswerIndex(index);
    if (
      QUESTION_LIST[currentQuestionIndex].answerList[index].answerBody !== null
    ) {
      setAnswerArray((prev) => {
        const updatedArray = [
          ...prev,
          QUESTION_LIST[currentQuestionIndex].answerList[index]
            .answerBody as string,
        ];
        return updatedArray;
      });
    }
  };

  const handleSubmitClick = () => {
    const body = answerArray.reduce((acc, value, index) => {
      acc[`answer${index + 1}`] = value;
      return acc;
    }, {} as Record<string, string>);

    setBody(body);
    setIsOpenResultModal(true);
  };

  return (
    <>
      <section className={styles.icon_container}>
        <Image
          src={arrow_left}
          alt="Fiesta Flow logo"
          width={25}
          height={25}
          onClick={() => {
            setCurrentQuestionIndex((prev) => prev - 1);
          }}
        />
        {isOpenResultModal || (
          <div className={styles.step_bar}>
            {Array.from({ length: currentQuestionIndex + 1 }, (_, index) => (
              <div key={index} className={styles.step} />
            ))}
          </div>
        )}
        <Link href="/home">
          <Image src={close} alt="Fiesta Flow logo" width={40} height={40} />
        </Link>
      </section>
      {isOpenResultModal || (
        <>
          <QuestionChip
            question={QUESTION_LIST[currentQuestionIndex].question}
          />
          <ul className={styles.answer_list}>
            {QUESTION_LIST[currentQuestionIndex].answerList.map(
              (item, index) => (
                <AnswerChip
                  key={item.answer}
                  index={index}
                  answer={item.answer}
                  isActive={activeAnswerIndex === index}
                  handleActiveAnswerClick={handleActiveAnswerClick}
                />
              )
            )}
          </ul>
          {currentQuestionIndex !== 5 ? (
            <button
              className={`${activeAnswerIndex !== null && styles.white_active}`}
              onClick={() => {
                setCurrentQuestionIndex((prev) => prev + 1);
                setActiveAnswerIndex(null);
              }}
            >
              다음
            </button>
          ) : (
            <button
              className={`${activeAnswerIndex !== null && styles.white_active}`}
              onClick={handleSubmitClick}
            >
              제출
            </button>
          )}
        </>
      )}

      {isOpenResultModal && (
        <Suspense fallback={<Loading />}>
          <ResultModal body={body} />
        </Suspense>
      )}
    </>
  );
}

export default FestivalTestPage;
