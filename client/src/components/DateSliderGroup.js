import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import axios from "axios";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import AOS from "aos";

const DateSliderList = styled(Slider)`
  .slick-track {
  }
  .slick-list {
  }
  .slick-slide {
  }
  .slick-slide div {
    /* margin-right: 10px; */
    padding: 5px;
    text-align: center;
    cursor: pointer;
  }
`;

const DateCard = styled.div`
  background-color: #ececec;
  border-radius: 0.5em;
  &.today {
    background-color: #697f6e;
    color: white;
  }
  .date {
    font-size: 15px;
  }
  .dow {
    font-weight: 500;
    font-size: 25px;
  }
`;

const DateSliderCon = styled.div``;

const makeDateNums = () => {
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const todayNum = Date.now();
  let dateNums = [];
  for (let i = 0; i < 15; i++) {
    dateNums.push(todayNum - i * (24 * 3600 * 1000));
  }
  const dates = dateNums.reverse().map((el) => {
    return {
      nums: el,
      date: new Date(el).getDate(),
      month: new Date(el).getMonth() + 1,
      yo_il: weekdays[new Date(el).getDay()],
    };
  });
  return dates;
};

AOS.init({
  duration: 1200,
});

const dummyDates = makeDateNums();

export default function DateSliderGroup({ selectDate, changeSelectDate }) {
  const [dates, setDates] = useState(dummyDates);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 10,
    slidesToScroll: 5,
    initialSlide: 5,
  };

  return (
    <DateSliderCon>
      <DateSliderList {...settings}>
        {dates.map((el, idx) => (
          <DateCard
            key={idx}
            onClick={() => changeSelectDate(el.nums)}
            className={
              new Date(selectDate).getDate() === new Date(el.nums).getDate()
                ? "today"
                : "none"
            }
          >
            <div className="date">
              {el.month}/{el.date}
            </div>
            <div className="dow">{el.yo_il}</div>
          </DateCard>
        ))}
      </DateSliderList>
    </DateSliderCon>
  );
}
