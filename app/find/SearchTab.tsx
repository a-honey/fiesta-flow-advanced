"use client";
import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import search_blue from "@/app/assets/search_blue.svg";

const SearchTab = () => {
  const [search, setSearch] = useState("");
  const [keywords, setKeywords] = useState({
    searchKeyword: "",
    recommendKeyword: ["12월", "겨울", "크리스마스"],
  });

  const handleSearchClick = () => {
    if (search === "") {
      return alert("검색어를 입력하세요");
    }
    setKeywords((prev) => ({ ...prev, searchKeyword: search }));
    setSearch("");
  };
  return (
    <div>
      <div className={styles.search_tab_container}>
        <input
          placeholder="어떤 축제에 가고 싶어?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Image
          src={search_blue}
          alt="Fiesta Flow logo"
          width={20}
          height={20}
          onClick={handleSearchClick}
        />
      </div>
      <div className={styles.search_container}>
        {keywords.searchKeyword && (
          <div
            className={`${styles.search_item} ${styles.active}`}
            onClick={() => {
              setKeywords((prev) => ({ ...prev, searchKeyword: "" }));
              setSearch("");
            }}
          >
            {keywords.searchKeyword}
          </div>
        )}
        {keywords.recommendKeyword.map((item) => (
          <div key={item} className={styles.search_item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchTab;
