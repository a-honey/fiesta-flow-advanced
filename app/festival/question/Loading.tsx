import LoadingBar from "@/app/components/common/LoadingBar";
import { useEffect } from "react";

const Loading = () => {
  console.log("로딩컴포넌트등장");

  useEffect(() => {
    console.log("로딩 컴포넌트 등장");

    // 3초 후에 로딩 컴포넌트를 제거하거나 숨기는 작업 수행
    const timeoutId = setTimeout(() => {
      console.log("로딩 컴포넌트 사라짐");
      // 여기서 로딩 컴포넌트를 숨기거나 어떤 작업을 수행할 수 있습니다.
    }, 3000);

    // useEffect의 cleanup 함수에서 타이머 클리어
    return () => clearTimeout(timeoutId);
  }, []); // 빈 배열을 전달하여 마운트 및 언마운트 시에만 실행

  return (
    <div
      className="blue"
      style={{
        zIndex: 99999,
        position: "absolute",
        backgroundImage: "",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <LoadingBar />
    </div>
  );
};

export default Loading;
