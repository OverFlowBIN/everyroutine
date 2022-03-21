import React, { useState } from "react";
import logo from "../assets/er_logo.svg";
import styled from "styled-components";
import axios from "axios";

axios.defaults.withCredentials = true;

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
`;

const ButtonJoin = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1em;
  margin: 1em;
  padding: 0.7em 3em;
  background-color: ${(props) => (props.everythingIsOk ? "#697f6e" : "gray")};
  cursor: ${(props) => (props.everythingIsOk ? "pointer" : "not-allowed")};
  border: none;
  border-radius: 5em;
`;

const Logodiv = styled.div`
  /* margin-left: 50%; */
  margin: 0 60px 20px 60px;
`;

// const Hrstyle = styled.hr`
//   border-top: 1px dotted #697f6e;
//   width: 100%;
//   margin: 30px 0;
// `;

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

const StyledLabel = styled.label`
  text-align: left;
  margin-left: 10%;
  font-size: 15px;
  padding: 5px 0;
  font-weight: 500;
`;

const EmailCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isEmailOk ? "none" : "block")};
`;

const EmailUserCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isRightUser ? "none" : "block")};
`;

const PassCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isPassOk ? "none" : "block")};
`;

const PassReCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isPassReOk ? "none" : "block")};
`;

const ServerCheck = styled.div`
  text-align: left;
  font-size: 12px;
  color: red;
  margin-left: 10%;
  display: ${(props) => (props.isServerOk ? "none" : "block")};
`;

const regExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const strongPassword = (str) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*^#?&])[A-Za-z\d@$!%*^#?&]{8,}$/.test(
    str
  );
};

const isMatch = (pass1, pass2) => {
  return pass1 === pass2;
};

const serverURL = "http://localhost:4000/users";

export default function ModalSignup({ settingLogin, settingSignModalIsClose }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordRetype, setUserPasswordRetype] = useState("");
  const [userNickName, setUserNickName] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [everythingIsOk, setEverythingIsOk] = useState(false);
  const [isRightUser, setIsRightUser] = useState(true);

  const [isEmailOk, setIsEmailOk] = useState(true);
  const [isPassOk, setIsPassOk] = useState(true);
  const [isPassReOk, setIsPassReOk] = useState(true);
  const [isServerOk, setIsServerOk] = useState(true);

  const validHandler = () => {
    // 1. 이메일 중복 검사 -> 통과하지 못하면 '이미 가입된 회원입니다.'

    // 2. 이메일 유효성 검사 -> 통과하지 못하면 '적절하지 않은 이메일입니다.'
    if (!userEmail.match(regExp)) {
      setIsEmailOk(false);
    } else {
      // db에 등록된 이메일 경우 -> 에러 메시지 처리
      getUsers();
    }
    // 3. 둘 다 통과할 경우 -> 다음으로 넘기기 (isValid true로)
  };

  const handlePasswordType = (e) => {
    setUserPassword(e.target.value);
    if (!strongPassword(e.target.value)) {
      setIsPassOk(false);
    } else {
      setIsPassOk(true);
    }
  };

  const handlePasswordReType = (e) => {
    setUserPasswordRetype(e.target.value);

    if (isMatch(userPassword, e.target.value)) {
      setIsPassReOk(true);
    } else {
      setIsPassReOk(false);
    }
  };

  const checkEverything = () => {
    if (isPassOk && isPassReOk && userNickName !== "") {
      setEverythingIsOk(true);
    }
  };

  async function getUsers() {
    setIsValid(false);
    setIsEmailOk(true);
    const response = await axios
      .post(serverURL + "/signup-check", {
        email: userEmail,
      })
      .catch((err) => {
        setIsServerOk(false);
      });
    if (response) {
      if (response.status === 204) {
        setIsRightUser(false);
      } else if (response.status === 200) {
        setIsValid(true);
        setIsRightUser(true);
      }
    }
    return;
  }

  async function joinHandler() {
    const response = await axios
      .post(serverURL + "/signup", {
        email: userEmail,
        password: userPassword,
        nickname: userNickName,
      })
      .catch((err) => {
        setIsServerOk(false);
      });
    if (response) {
      console.log(response);
      if (response.status === 201) {
        settingLogin();
        settingSignModalIsClose();
      } else {
        setIsServerOk(false);
      }
    }
  }

  const toFindModalHandler = () => {
    // 비밀번호 찾기 모달로 보내버리기
  };

  return (
    <div className="modal">
      <div className="modalLogin">
        <Xmark className="modalClose" onClick={() => settingSignModalIsClose()}>
          &times;
        </Xmark>
        {isValid ? (
          <ModalCon className="modalContents">
            <Logodiv className="logo">
              <img alt="every routine logo" src={logo} />
            </Logodiv>

            <StyledLabel htmlFor="email">이메일(아이디)</StyledLabel>
            <StyledInput
              id="email"
              type="email"
              readonly="readonly"
              value={userEmail}
              tabIndex="-1"
              onclick="this.blur()"
            />

            <StyledLabel htmlFor="password">비밀번호</StyledLabel>
            <StyledInput
              id="password"
              className="loginPw"
              type="password"
              value={userPassword}
              onChange={(e) => {
                handlePasswordType(e);
                checkEverything();
              }}
              onBlur={checkEverything}
            />
            <PassCheck isPassOk={isPassOk}>
              ! 비밀번호는 8자 이상, 알파벳/숫자/특수문자를 모두 포함시켜주세요.
            </PassCheck>

            <StyledLabel htmlFor="passwordRetype">비밀번호 확인</StyledLabel>
            <StyledInput
              id="passwordRetype"
              className="loginPw"
              type="password"
              value={userPasswordRetype}
              onChange={(e) => {
                handlePasswordReType(e);
                checkEverything();
              }}
              onBlur={checkEverything}
            />
            <PassReCheck isPassReOk={isPassReOk}>
              ! 동일한 비밀번호를 입력해주세요.
            </PassReCheck>

            <StyledLabel htmlFor="nickname">닉네임</StyledLabel>
            <StyledInput
              id="nickname"
              className="userNickName"
              type="text"
              value={userNickName}
              onChange={(e) => {
                setUserNickName(e.target.value);
                checkEverything();
              }}
              onBlur={checkEverything}
            />
            <ServerCheck isServerOk={isServerOk}>
              ! 네트워크 연결이 불안정합니다. 잠시 후 다시 시도해주세요.
            </ServerCheck>
            {/* <div className="recaptchaHolder">reCaptCha</div> */}
            <ButtonJoin
              everythingIsOk={everythingIsOk}
              className="loginBtn"
              onClick={joinHandler}
            >
              루틴 시작하기!
            </ButtonJoin>
          </ModalCon>
        ) : (
          <ModalCon className="modalContents">
            <Logodiv className="logo">
              <img alt="every routine logo" src={logo} />
            </Logodiv>

            <StyledLabel htmlFor="email">이메일(아이디)</StyledLabel>
            <StyledInput
              name="email"
              className="loginId"
              type="email"
              placeholder="email"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <EmailCheck isEmailOk={isEmailOk}>
              ! 이메일 주소를 정확히 입력해주세요.
            </EmailCheck>
            <EmailUserCheck isRightUser={isRightUser}>
              ! 이미 등록된 사용자입니다.
            </EmailUserCheck>
            <ServerCheck isServerOk={isServerOk}>
              ! 네트워크 연결이 불안정합니다. 잠시 후 다시 시도해주세요.
            </ServerCheck>

            <Button className="loginBtn" onClick={validHandler}>
              이메일로 가입하기
            </Button>

            {/* <Hrstyle />

            <div className="socialBox">
              <div className="kakaoLogin">카카오 계정으로 가입하기</div>
              <div className="naverLogin">네이버 계정으로 가입하기</div>
              <div className="githubLogin">깃허브 계정으로 가입하기</div>
            </div>

            <Hrstyle />

            <div className="joinEnd">
              <div className="joinEndText" onClick={toFindModalHandler}>
                비밀번호를 잃어버리셨나요?
              </div>
            </div> */}
          </ModalCon>
        )}
      </div>
    </div>
  );
}
