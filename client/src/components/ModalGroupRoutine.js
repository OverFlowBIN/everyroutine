import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/er_logo.svg";
import axios from "axios";

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

const Tag = styled.div`
  background-color: #697f6e;
  color: white;
  border-radius: 5em;
  display: inline-block;
  width: auto;
  padding: 0.5em 1em;
  margin: 0.5em;
  cursor: unset;
`;

const ModalCon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #697f6e;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  width: 80%;
  margin-left: 10%;
  border: 0;
  border-bottom: 2px solid #697f6e;
`;

const StyledTextArea = styled.textarea`
  margin-bottom: 10px;
  width: 80%;
  margin-left: 10%;
  border: 0;
  border-bottom: 2px solid #697f6e;
`;

const StyledLabel = styled.label`
  text-align: left;
  margin-left: 10%;
  font-size: 15px;
  padding: 5px 0;
  font-weight: 500;
`;

const StyledSpan = styled.span`
  margin-bottom: 10px;
  text-align: left;
  margin-left: 10%;
  padding: 5px 0;
  background-color: white;
  font-size: 15px;
  color: black;
`;

const Logodiv = styled.div`
  background-color: white;
  margin: 0 60px 20px 60px;
  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
  }
`;

const InputLabel = styled.label`
  margin-right: 1em;
`;

const StyledCheckbox = styled.input`
  margin-right: 0.2em;
  margin-bottom: 1em;
`;

const serverURL = "http://localhost:4000/group-routine";

export default function ModalGroupRoutine({
  closeGroupRoutineModal,
  modGroupRoutineList,
}) {
  const [groupRoutineTitle, setgroupRoutineTitle] = useState("");
  const [groupRoutineContent, setGroupRoutineContent] = useState("");
  const [imageBlob, setImageBlob] = useState("");
  const [imageSrc, setImageSrc] = useState(logo);
  const [step, setStep] = useState(true);

  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

  const encodeFileToBase64 = (fileBlob) => {
    setImageBlob(fileBlob);
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const makeGroup = () => {
    const postGroupInfo = async () => {
      try {
        const response = await axios.post(serverURL + "/create", {
          routine_name: groupRoutineTitle,
          tag_name: [...checkedItems].toString(),
          image: imageSrc,
          contents: groupRoutineContent,
        });
        modGroupRoutineList(response.data.data);
      } catch (e) {
        console.log(e);
      } finally {
        closeGroupRoutineModal();
      }
    };
    postGroupInfo();
  };

  return (
    <div className="modal">
      <div className="modalLogin">
        <Xmark className="modalClose" onClick={() => closeGroupRoutineModal()}>
          &times;
        </Xmark>
        {step ? (
          <ModalCon className="modalContents">
            <StyledLabel htmlFor="groupTitle">루틴 그룹명:</StyledLabel>
            <StyledInput
              id="groupTitle"
              className="groupTitle"
              type="text"
              placeholder="그룹의 이름을 입력해주세요."
              value={groupRoutineTitle}
              onChange={(e) => setgroupRoutineTitle(e.target.value)}
            />
            <StyledLabel htmlFor="groupEx">루틴 그룹 소개:</StyledLabel>
            <StyledTextArea
              name="groupEx"
              className="groupEx"
              placeholder="우리 그룹을 멋지게 소개해보세요."
              value={groupRoutineContent.value}
              onChange={(e) => setGroupRoutineContent(e.target.value)}
            />
            <StyledLabel htmlFor="groupTagSet">그룹 태그:</StyledLabel>
            <CheckBoxes checkedItemHandler={checkedItemHandler} />
            <StyledLabel htmlFor="groupImg">그룹 대표 이미지:</StyledLabel>
            <StyledInput
              id="groupImg"
              className="groupImg"
              type="file"
              onChange={(e) => encodeFileToBase64(e.target.files[0])}
            />
            <Logodiv className="logo">
              <img src={imageSrc} alt="group-img" />
            </Logodiv>
            <Button
              className="loginBtn"
              onClick={() => {
                setStep(false);
              }}
            >
              이 정보로 만들게요!
            </Button>
          </ModalCon>
        ) : (
          <ModalCon className="modalContents">
            <StyledLabel htmlFor="groupTitle">루틴 그룹명:</StyledLabel>
            <StyledSpan>{groupRoutineTitle}</StyledSpan>
            <StyledLabel htmlFor="groupEx">루틴 그룹 소개:</StyledLabel>
            <StyledSpan>{groupRoutineContent}</StyledSpan>
            <StyledLabel htmlFor="groupTagSet">그룹 태그:</StyledLabel>
            <div>
              {[...checkedItems].map((el, idx) => (
                <Tag key={idx}># {el}</Tag>
              ))}
            </div>
            <StyledLabel htmlFor="groupImg">그룹 대표 이미지:</StyledLabel>
            <Logodiv className="logo">
              <img src={imageSrc} alt="group-img" />
            </Logodiv>
            <Button
              className="loginBtn"
              onClick={() => {
                makeGroup();
              }}
            >
              그룹 루틴 시작하기!
            </Button>
          </ModalCon>
        )}
      </div>
    </div>
  );
}

function CheckBoxes({ checkedItemHandler }) {
  const itemArray = [
    { id: "health", name: "건강" },
    { id: "life", name: "생활" },
    { id: "workout", name: "운동" },
    { id: "mission", name: "미션" },
  ];

  return (
    <form name="groupTagSet">
      {itemArray.map((el, idx) => (
        <CheckBox key={idx} el={el} checkedItemHandler={checkedItemHandler} />
      ))}
    </form>
  );
}

function CheckBox({ el, checkedItemHandler }) {
  const [bChecked, setChecked] = useState(false);

  const checkHandler = (e) => {
    setChecked(!bChecked);
    const id = e.target.id;
    const checked = e.target.checked;
    checkedItemHandler(id, checked);
  };

  return (
    <>
      <StyledCheckbox
        id={el.id}
        type="checkbox"
        checked={bChecked}
        onChange={(e) => checkHandler(e)}
      />
      <InputLabel htmlFor={el.id}>{el.name}</InputLabel>
    </>
  );
}
