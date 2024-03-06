"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import isValidateEmail from "../libs/isValidateEmail";
import { instance } from "../api";

function RegisterPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [registerFormBody, setRegisterFormBody] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    username: "",
  });

  const isEmailValid = isValidateEmail(registerFormBody.email);
  const isSamePassword =
    registerFormBody.password === registerFormBody.passwordConfirm;

  const handleNextStepClick = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubmitClick = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await instance.post("/users/signup", registerFormBody);
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.container}>
      <div className={styles.item_container}>
        {currentStep === 0 && (
          <>
            <label>이메일 주소를 입력해주세요</label>
            <input
              type="text"
              value={registerFormBody.email}
              onChange={(e) => {
                setRegisterFormBody((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
            />
            {isEmailValid || <span>이메일 주소를 다시 확인해주세요</span>}
          </>
        )}
      </div>
      {currentStep === 1 && (
        <>
          <label>비밀번호를 입력해주세요</label>
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={registerFormBody.password}
            onChange={(e) => {
              setRegisterFormBody((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />
          <span>6자 이상 입력해주세요</span>
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={registerFormBody.passwordConfirm}
            onChange={(e) => {
              setRegisterFormBody((prev) => ({
                ...prev,
                passwordConfirm: e.target.value,
              }));
            }}
          />
          {isSamePassword || <span>비밀번호와 동일하게 입력해주세요</span>}
        </>
      )}
      {currentStep === 2 && (
        <>
          <label>이름을 설정해주세요</label>
          <input
            type="text"
            placeholder="이름"
            value={registerFormBody.username}
            onChange={(e) => {
              setRegisterFormBody((prev) => ({
                ...prev,
                username: e.target.value,
              }));
            }}
          />
        </>
      )}
      <button
        className="white_button"
        onClick={currentStep == 2 ? handleSubmitClick : handleNextStepClick}
      >
        다음
      </button>
    </form>
  );
}

export default RegisterPage;
