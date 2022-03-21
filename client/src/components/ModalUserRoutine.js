import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Xmark = styled.span`
  color: #697f6e;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1em;
  margin: 1em;
  padding: 0.7em 3em;
  background-color: #697f6e;
  border: none;
  border-radius: 5em;
  cursor: pointer;
`;

const ModalCon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #697f6e;
`;
const RoutineUl = styled.ul`
  margin-left: 10%;
`;
const RoutineLi = styled.li`
  position: relative;
  height: 40px;
  line-height: 40px;
  text-align: left;
`;

const ModButton = styled.button`
  color: white;
  font-size: 0.8em;
  padding: 0.5em;
  border: none;
  border-radius: 1em;
  background-color: ${(props) => (props.isEditMode ? "green" : "#ffc300")};
  cursor: pointer;
  margin-right: 0.3em;
`;

const DelButton = styled.button`
  color: white;
  font-size: 0.8em;
  padding: 0.5em;
  background-color: #ff1818;
  border: none;
  border-radius: 1em;
  cursor: pointer;
`;

const AddButton = styled.button`
  color: white;
  font-size: 0.8em;
  padding: 0.5em;
  background-color: #697f6e;
  border: none;
  border-radius: 1em;
  cursor: pointer;
`;

const ButtonCon = styled.div`
  position: absolute;
  right: 15px;
  top: 0;
`;

const date = new Date();
const today = date.getDate();

const serverURL = "http://localhost:4000/user-routine";

export default function ModalUserRoutine({
  closeUserRoutineModal,
  routineItems,
}) {
  const [newRoutineList, setNewRoutineList] = useState(routineItems);
  const [newRoutineItem, setNewRoutineItem] = useState("");

  async function postUserRoutineList() {
    const response = await axios
      .post(serverURL + "/details", {
        list: newRoutineList,
        date: today,
      })
      .catch((err) => console.log(err));
    if (response.status === 200) {
      console.log(response.data);
    } else {
      console.log(response.status);
    }
    closeUserRoutineModal();
  }

  const routineDelButtonHandler = (idx) => {
    let newListFromModal = [
      ...newRoutineList.slice(0, idx),
      ...newRoutineList.slice(idx + 1),
    ];
    setNewRoutineList(newListFromModal);
  };

  // 아이템 수정 버튼
  const routineFixButtonHandler = (idx, item) => {
    let newListFromModal = [
      ...newRoutineList.slice(0, idx),
      item,
      ...newRoutineList.slice(idx + 1),
    ];
    setNewRoutineList(newListFromModal);
  };

  // 아이템 추가 버튼
  const routineAddButtonHandler = () => {
    console.log(newRoutineItem);
    if (newRoutineItem === "") {
    } else {
      setNewRoutineList([...newRoutineList, newRoutineItem]);
      setNewRoutineItem("");
    }
  };

  return (
    <div className="modal">
      <div className="modalLogin">
        <Xmark className="modalClose" onClick={() => closeUserRoutineModal()}>
          &times;
        </Xmark>
        <ModalCon className="modalContents">
          <RoutineUl>
            {newRoutineList.map((el, idx) => (
              <RoutineList
                key={idx}
                el={el}
                idx={idx}
                routineFixButtonHandler={routineFixButtonHandler}
                routineDelButtonHandler={routineDelButtonHandler}
              />
            ))}

            <RoutineLi>
              <input
                type="text"
                value={newRoutineItem}
                onChange={(e) => setNewRoutineItem(e.target.value)}
              />
              <ButtonCon>
                <AddButton onClick={() => routineAddButtonHandler()}>
                  추가
                </AddButton>
              </ButtonCon>
            </RoutineLi>
          </RoutineUl>
          <Button
            className="loginBtn"
            onClick={() => {
              postUserRoutineList();
            }}
          >
            수정 완료
          </Button>
        </ModalCon>
      </div>
    </div>
  );
}

function RoutineList({
  el,
  idx,
  routineFixButtonHandler,
  routineDelButtonHandler,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [singleRoutine, setSingleRoutine] = useState(el);
  return (
    <RoutineLi>
      {isEditMode ? (
        <input
          value={singleRoutine}
          onChange={(e) => setSingleRoutine(e.target.value)}
        ></input>
      ) : (
        <span>{singleRoutine}</span>
      )}

      <ButtonCon>
        <ModButton
          isEditMode={isEditMode}
          onClick={
            isEditMode
              ? () => {
                  setIsEditMode(!isEditMode);
                  routineFixButtonHandler(idx, singleRoutine);
                }
              : () => setIsEditMode(!isEditMode)
          }
        >
          {isEditMode ? "완료" : "수정"}
        </ModButton>
        <DelButton onClick={() => routineDelButtonHandler(idx)}>삭제</DelButton>
      </ButtonCon>
    </RoutineLi>
  );
}
