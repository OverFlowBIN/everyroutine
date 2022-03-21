import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const TopButton = styled.button`
  position: fixed;
  cursor: pointer;
  color: #697f6e;
  border: 5px solid #697f6e;
  background-color: transparent;
  opacity: 0;
  bottom: 3em;
  right: 3em;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  transition: all 0.3s ease 0s;
  outline: none;

  &:hover {
    transform: translateY(-2em);
  }

  &.active {
    z-index: 10;
    opacity: 1;
  }

  &:hover,
  &:focus,
  &:active {
    outline: 0 none;
  }
`;

const Wrap = styled.div`
  position: relative;
  padding: 0;
`;

export default function TopBtn() {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 300) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <Wrap>
      <TopButton
        className={BtnStatus ? "TopButton active" : "TopButton"}
        onClick={handleTop}
      >
        <FaArrowUp style={{ fontSize: "3em" }} />
      </TopButton>
    </Wrap>
  );
}
