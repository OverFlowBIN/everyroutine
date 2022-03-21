import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import sadImg from "../assets/sad.png";

const UserDeleteContainer = styled.div`
  border: 3px solid #697f6e;
  color: #697f6e;
  min-width: 580px;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
  margin-left: -1em;
`;

const UserDeleteDiv = styled.div`
  margin: 2em;
`;

const UserDeleteInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
`;

const UserDeleteInput = styled.input`
  margin: 1em;
  width: 20em;
  height: 2em;
`;

const UserDeleteImg = styled.img`
  width: 20em;
  height: auto;
  opacity: 0.5;
  margin: 1em 0;
`;

const CheckedBtn = styled.button`
  background-color: gray;
  width: 5em;
  height: auto;
  border: none;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s ease;

  :hover {
    background-color: #697f6e;
  }
`;

const DeleteBtn = styled.button`
  background-color: gray;
  margin-top: 2em;
  width: 5em;
  height: auto;
  border: none;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s ease;

  :hover {
    background-color: #697f6e;
  }
`;

const serverURL = "http://localhost:4000/users";

function UserDelete({ settingLogout }) {
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await axios.get(serverURL + "/user-info");
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getUserInfo();
  }, []);

  // * 클릭하면 무조건 회원탈퇴 처리됨
  const handleDelete = async () => {
    // console.log("찍히나?!");
    const cookieOption = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cache: "no-cache",
      },
      withCredentials: true,
    };
    await axios
      .get(serverURL + "/resign", { email: email }, cookieOption)
      .then((res) => {
        console.log(res);
        if (!isActive) {
          alert("이메일이 일치하지 않습니다.");
        } else {
          if (res.status === 200) {
            alert("회원탈퇴완료. 잘가~", res.data.data);
            // 로그아웃 시키기
            settingLogout();
            // 홈화면으로 이동하기
            navigate("/");
          }
        }
      });
  };

  const handleChange = (e) => {
    setEmail(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("이메일을 입력하세요.");
    }
  };

  // * 입력된 이메일과 일치여부 확인하기
  const checkedValid = async () => {
    const cookieOption = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cache: "no-cache",
      },
      withCredentials: true,
    };
    await axios
      .get(serverURL + "/user-info", cookieOption)
      .then((res) => {
        // console.log("비밀번호 응답res", res);
        if (email) {
          // console.log("입력 비밀번호???", password);
          // console.log("비밀번호 조회는 잘 되었나????===", res.data.data.password);
          if (email !== res.data.data.email) {
            alert("이메일이 일치하지 않습니다.", res.data.email);
          } else if (email === res.data.data.email) {
            // * 이메일이 일치할 경우 회원탈퇴 버튼 활성화
            setIsActive(true);
            console.log("isActive=======", isActive);
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserDeleteContainer>
      <UserDeleteDiv>
        <h1>회원 탈퇴</h1>
        <p> 회원탈퇴를 위한 페이지입니다. </p>
      </UserDeleteDiv>
      <UserDeleteInfo>
        <UserDeleteImg alt="profile_img" src={sadImg} />
        <h3>
          이메일 :
          <UserDeleteInput
            style={{ margin: "1em 10px" }}
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={(e) => handleChange(e.target.value)}
          />
        </h3>

        {/* //* 이메일이 일치하지 않는 경우 회원탈퇴 버튼 비활성화 */}
        <form onSubmit={handleSubmit}>
          {!isActive ? (
            <CheckedBtn onClick={(e) => checkedValid(e.target.value)}>
              확인
            </CheckedBtn>
          ) : (
            <></>
          )}

          {isActive ? (
            <>
              <DeleteBtn onClick={(e) => handleDelete(e)}>회원탈퇴</DeleteBtn>
            </>
          ) : (
            <></>
          )}
        </form>
      </UserDeleteInfo>
    </UserDeleteContainer>
  );
}

export default UserDelete;
