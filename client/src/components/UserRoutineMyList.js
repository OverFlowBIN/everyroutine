import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import DateSlider from "./DateSlider";
import axios from "axios";
import AOS from "aos";

import Modal from "react-modal";
import ModalUserRoutine from "../components/ModalUserRoutine";

const Button = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1em;
  margin: 1em;
  width: 50px;
  height: 50px;
  /* padding: 0.7em 1.5em; */
  background-color: #697f6e;
  border: none;
  border-radius: 70%;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  &.notToday {
    cursor: not-allowed;
    background-color: gray;
  }
`;
const UserRoutineListCon = styled.div`
  min-height: 300px;
  position: relative;
`;

const UserRotineList = styled.ul`
  list-style: none;
  margin-top: 20px;
  padding: 30px;
  background-color: #f3f8f2;
`;

const RoutineListItemLi = styled.li`
  padding: 5px 0;
  text-decoration: underline dotted;
`;

const RoutineCheck = styled.input`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  background-color: #eee;
`;

const serverURL = "http://localhost:4000/user-routine";

const dummyData = {
  checked: [0, 0, 0],
  contents: ["물 2L 마시기", "스트레칭 하기", "아침 7시에 일어나기"],
};

AOS.init({
  duration: 1200,
});

const date = new Date();
const today = date.getDate();
const todayMonth = date.getMonth() + 1;

export default function UserRoutineMyList() {
  const [userRoutineIsOpen, setUserRoutineIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState(dummyData.checked);
  const [routineItems, setRoutineItems] = useState(dummyData.contents);
  const [isNowToday, setIsNowToday] = useState(true);
  const [selectDate, setSelectDate] = useState({
    date: today,
    month: todayMonth,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 선택한 날짜의 루틴리스트를 출력합니다.
  useEffect(() => {
    const changeSelectDateFromServer = async () => {
      try {
        const response = await axios
          .post(serverURL, {
            date: { month: selectDate.month, date: selectDate.date },
          })
          .catch((err) => console.log(err));
        if (response.status === 200) {
          const thatDayRoutineInfo = JSON.parse(
            response.data.onlyThisDateRoutineList
          );
          const thatDayCheckInfo = JSON.parse(response.data.IsChecked);
          setRoutineItems(thatDayRoutineInfo.contents);
          // 받아온 체크 배열로 루틴 체크 리스트 렌더링
          setCheckedItems(thatDayCheckInfo.checked);
          // 선택한 날짜가 오늘인지 체크 (편집모드 활성화/비활성화를 위해)
          if (selectDate.date === today && selectDate.month === todayMonth) {
            setIsNowToday(true);
          } else {
            setIsNowToday(false);
          }
        } else {
          console.log(response.status);
        }
      } catch (e) {
        console.log(e);
      }
    };
    changeSelectDateFromServer();
  }, [selectDate]);

  // 모달(루틴편집모드)를 종료합니다.
  const closeUserRoutineModal = () => {
    setUserRoutineIsOpen(false);
  };

  useEffect(() => {
    const fetchRoutineItems = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 routineItems 를 초기화하고
        setError(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios({
          method: "post",
          url: serverURL,
          data: { date: { month: todayMonth, date: today } },
        });
        if (response.status === 200) {
          const todayRoutineInfo = JSON.parse(
            response.data.onlyThisDateRoutineList
          );
          const todayCheckInfo = JSON.parse(response.data.IsChecked);
          // 받아온 루틴리스트로 루틴 리스트 렌더링
          setRoutineItems(todayRoutineInfo.contents);
          // 받아온 체크 배열로 루틴 체크 리스트 렌더링
          setCheckedItems(todayCheckInfo.checked);
        }
      } catch (e) {
        console.log(e);
        setError(e);
      }
      setLoading(false);
    };

    fetchRoutineItems();
  }, [userRoutineIsOpen]);

  //? 체크 관리 start

  // 체크 될 때마다 체크 arr를 서버로 patch 해줍니다.
  useEffect(() => {
    async function fetchCheckBoxes() {
      const response = await axios
        .patch(serverURL, {
          daily_check: checkedItems,
          date: selectDate.date,
        })
        .catch((err) => console.log(err));
      if (response.status === 200) {
      } else {
        console.log(response.status);
      }
      return;
    }
    fetchCheckBoxes();
  }, [checkedItems]);

  const changeSelectDate = (selected) => {
    setSelectDate(selected);
  };

  // 루틴 아이템 체크/언체크를 할 때마다 전체 체크 배열 [0,0,1,0]을 변경해줍니다.
  const checkedItemHandler = (idx, checked) => {
    if (checked) {
      let newCheckSet = [
        ...checkedItems.slice(0, idx),
        0,
        ...checkedItems.slice(idx + 1),
      ];
      setCheckedItems(newCheckSet);
      // 클릭한 아이템이 원래 체크상태 였다면 (언체크 후 array 0으로 바꿔줌)
    } else {
      let newCheckSet = [
        ...checkedItems.slice(0, idx),
        1,
        ...checkedItems.slice(idx + 1),
      ];
      setCheckedItems(newCheckSet);
    }
  };

  //? 체크 관리 end

  return (
    <div>
      <DateSlider selectDate={selectDate} changeSelectDate={changeSelectDate} />

      <UserRoutineListCon>
        <UserRotineList>
          <UserRoutine
            checkedItemHandler={checkedItemHandler}
            routineItems={routineItems}
            checkedItems={checkedItems}
          />
        </UserRotineList>

        {isNowToday ? (
          <Button
            onClick={() => {
              setUserRoutineIsOpen(true);
            }}
          >
            +
          </Button>
        ) : (
          <Button className="notToday">+</Button>
        )}
      </UserRoutineListCon>

      <Modal
        style={{
          content: {
            background: "#F3F8F2",
            left: "30%",
            right: "30%",
            border: "5px solid #697F6E",
            borderRadius: "2em",
          },
        }}
        isOpen={userRoutineIsOpen}
        onRequestClose={() => setUserRoutineIsOpen(false)}
      >
        <ModalUserRoutine
          closeUserRoutineModal={closeUserRoutineModal}
          routineItems={routineItems}
        />
      </Modal>
    </div>
  );
}

function UserRoutine({ checkedItemHandler, checkedItems, routineItems }) {
  return routineItems.map((el, idx) => (
    <RoutineListItem
      key={idx}
      checkedItemHandler={checkedItemHandler}
      el={el}
      // id={el.id}
      idx={idx}
      checked={checkedItems[idx]}
    />
  ));
}

function RoutineListItem({ checkedItemHandler, idx, el, checked }) {
  return (
    <RoutineListItemLi>
      <RoutineCheck
        type="checkbox"
        id={idx}
        checked={checked ? true : false}
        onChange={() => checkedItemHandler(idx, checked)}
      />
      <label htmlFor={idx}>{el}</label>
    </RoutineListItemLi>
  );
}
