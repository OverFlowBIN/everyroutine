import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import GroupRoutineMyList from "../components/GroupRoutineMyList";
import GroupRoutineNewList from "../components/GroupRoutineNewList";

import Modal from "react-modal";
import ModalGroupRoutine from "../components/ModalGroupRoutine";

const Container = styled.div`
  border: 3px solid #697f6e;
  width: 800px;
  margin-left: calc((100% - 800px) / 2);
  padding: 30px;
  margin-bottom: 50px;
`;

const Con = styled.div`
  padding: 20px;
`;

const Hrstyle = styled.hr`
  border-top: 1px dotted #697f6e;
  width: 100%;
  margin: 30px 0;
`;

const date = new Date();
const today = date.getDate();
const todayMonth = date.getMonth() + 1;

const serverURL = "http://localhost:4000/group-routine";

const dummyData = [
  {
    contents:
      "하루동안 물을 2L 마시는 루틴입니다. 출석률에 따라 물양 조정합니다.",
    createdAt: "2022-03-09T12:35:12.000Z",
    editor_id: 1,
    id: 1,
    image:
      "https://dmwedtsa0n9p4.cloudfront.net/media/uploads/2021/07/12/06_-1.png",
    routine_name: "물 2L 마시기",
    tag_name: "[health, lifestyle, workout]",
    updatedAt: "2022-03-09T12:35:12.000Z",
  },
];

function GroupRoutines() {
  const [selectDate, setSelectDate] = useState({
    date: today,
    month: todayMonth,
  });
  const [myGroupRoutineList, setMyGroupRoutineList] = useState(dummyData);

  const changeSelectDate = (selected) => {
    setSelectDate(selected);
  };

  const [groupRoutineIsOpen, setGroupRoutineIsOpen] = useState(false);

  const closeGroupRoutineModal = () => {
    setGroupRoutineIsOpen(false);
  };

  const openGropRoutineModal = () => {
    setGroupRoutineIsOpen(true);
  };

  const modGroupRoutineList = (newgroup) => {
    setMyGroupRoutineList([newgroup, ...myGroupRoutineList.reverse()]);
  };

  useEffect(() => {
    const getMyGroupRoutineList = async () => {
      try {
        const response = await axios
          .get(serverURL)
          .catch((err) => console.log(err));
        if (response.status === 200) {
          setMyGroupRoutineList(response.data.data.reverse());
        } else {
          console.log(response.status);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getMyGroupRoutineList();
  }, []);

  return (
    <div>
      <Container>
        <Con>
          <GroupRoutineMyList
            openGropRoutineModal={openGropRoutineModal}
            selectDate={selectDate}
            changeSelectDate={changeSelectDate}
            myGroupRoutineList={myGroupRoutineList}
          />
        </Con>
        <Hrstyle />
        <Con>
          <GroupRoutineNewList />
        </Con>
      </Container>

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
        isOpen={groupRoutineIsOpen}
        onRequestClose={() => setGroupRoutineIsOpen(false)}
      >
        <ModalGroupRoutine
          closeGroupRoutineModal={closeGroupRoutineModal}
          modGroupRoutineList={modGroupRoutineList}
        />
      </Modal>
    </div>
  );
}
export default GroupRoutines;
