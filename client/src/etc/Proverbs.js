import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const ProverbsDiv = styled.h2`
  font-style: oblique;
  color: #697f6e;
  padding: 1em;
  font-size: 2em;
  margin: 3em 0;
`;

export default function Proverbs() {
  let [index, setIndex] = useState(0);

  const proverbs = [
    "삶이 달라질 수 있는 단 하나의 열쇠는 바로 습관이다.",
    "습관이란 인간으로 하여금 어떤 일이든 하게 만든다.",
    "오늘 시작하지 않은 것은 절대 내일 끝낼 수 없다.",
    "하고 싶다는 생각이 들면 지금 당장 시작하라!",
    "습관은 최고의 하인이거나 최악의 주인이다.",
    "생각하고 살지 않으면 사는 대로 생각하게 된다.",
    "습관을 바꾸는 것만으로도 자신의 인생을 바꿀 수 있다.",
    "다른 사람의 좋은 습관을 자신의 습관으로 만들면 됩니다.",
  ];

  useInterval(() => {
    setIndex(index + 1);
    if (index === proverbs.length - 1) {
      setIndex(0);
    }
  }, 5000);

  return <ProverbsDiv data-aos="fade-in">{proverbs[index]}</ProverbsDiv>;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
