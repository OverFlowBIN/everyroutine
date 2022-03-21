import React from "react";
import styled from "styled-components";
import MyRoutine_checked from "../assets/MyRoutine_checked.gif";
import GroupRoutine_join from "../assets/GroupRoutine_join.gif";
import GroupRoutine_created from "../assets/GroupRoutine_created.gif";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Text = styled.h3`
  color: #697f6e;
  font-weight: bold;
  font-size: 30px;
`;

const GifDiv = styled.div`
  margin: 10em 0;
  padding: 3em;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;

const CheckBox = styled.input`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid #707070;
  position: relative;

  &::after {
    font-size: 20px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Label = styled.label`
  font-size: 20px;
  margin-left: 10px;
`;

const CheckBoxDiv = styled.div`
  display: flex;
  margin: 1em;
`;

function EveryRoutineInfo() {
  return (
    <div>
      <GifDiv
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <Text>나만의 루틴을 만들어보세요</Text>
        <img alt="MyRoutine_checked" src={MyRoutine_checked} />
      </GifDiv>

      <div data-aos="fade-up">
        <Text>루틴을 완료할 경우 체크합니다</Text>
        <CheckBoxDiv style={{ display: "flex", margin: "1em" }}>
          <CheckBox type="checkbox" id="check1" defaultChecked />
          <Label htmlFor="check1">아침에 영양제 챙겨먹기</Label>
        </CheckBoxDiv>
        <CheckBoxDiv style={{ display: "flex", margin: "1em" }}>
          <CheckBox type="checkbox" id="check1" defaultChecked />
          <Label htmlFor="check1">아침 스트레칭 15분</Label>
        </CheckBoxDiv>
        <CheckBoxDiv style={{ display: "flex", margin: "1em" }}>
          <CheckBox type="checkbox" id="check1" />
          <Label htmlFor="check1">오늘의 할일 정리하기</Label>
        </CheckBoxDiv>
      </div>

      <GifDiv
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Text>그룹 루틴에 가입해보세요</Text>
        <img alt="GroupRoutine_join" src={GroupRoutine_join} />
      </GifDiv>

      <div
        data-aos="fade-up"
        style={{
          marginLeft: "35em",
        }}
      >
        <Text>그룹원과 함께 진행 상태를 체크합니다</Text>
        <div style={{ margin: "1em" }}>
          <p>참여자 : 4명</p>
          <p>
            루틴달성 후 댓글 작성하기 :
            <input type="text" style={{ marginLeft: "10px", width: "19em" }} />
            <button
              style={{
                marginLeft: "10px",
                border: "none",
                backgroundColor: "#697f6e",
                color: "#fff",
                borderRadius: "50%",
                width: "2em",
                height: "2em",
                cursor: "pointer",
              }}
            >
              OK
            </button>
          </p>

          <div
            style={{
              margin: "0.5em",
              padding: "1em",
              width: "30em",
              backgroundColor: "#f3f8f2",
            }}
          >
            <p>닭발맨 : 아침운동 줄넘기 300개 완료! </p>
            <p>곱창맨 : 오예!!! 한 번에 줄넘기 500개 성공했어요!</p>
            <p>김밥맨 : 오늘은 600개만 할래요 </p>
          </div>

          <div
            style={{
              display: "flex",
              color: "#697f6e",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <p>우리 그룹의 루틴 달성률! (3/4)</p>
            <progress
              style={{
                marginLeft: "1em",
                marginTop: "-0.2em",
                width: "10em",
                height: "2em",
              }}
              value="80"
              min="0"
              max="100"
            />
          </div>
        </div>
      </div>
      {/* 
      <GifDiv
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Text>그룹 루틴을 만들어보세요</Text>
        <img src={GroupRoutine_created} alt="GroupRoutine_created" />
      </GifDiv> */}
    </div>
  );
}

export default EveryRoutineInfo;
