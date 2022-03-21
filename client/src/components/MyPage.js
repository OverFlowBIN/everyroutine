import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyPageContainer = styled.div`
  display: block;
  width: 56em;
  padding: 50px;
`;

const MyPageUserMain = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 10px 30px;
  outline: none;
  background-color: ${(props) =>
    props.usermode === "true" ? "#697f6e" : "gray"};
  cursor: pointer;
  margin-right: 5px;
`;

const MyPageUserDelete = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 10px 30px;
  outline: none;
  background-color: ${(props) =>
    props.usermode === "true" ? "gray" : "#697f6e"};
  cursor: pointer;
  margin-right: 5px;
`;

const EditWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function MyPage({ isLogin }) {
  // 어차피 바로 로그아웃 되어야 하니까
  // useEffect로 페이지로드시 바로 적용하면 되는거다...
  const [usermode, setUsermode] = useState("true");
  const changeToUserMain = () => {
    setUsermode("true");
  };
  const changeToUserDelete = () => {
    setUsermode("false");
  };

  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginUser = async () => {
      try {
        if (!isLogin) {
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkLoginUser();
  }, [isLogin, navigate]);

  return (
    <Container>
      <MyPageContainer>
        <MyPageUserMain
          usermode={usermode}
          onClick={() => changeToUserMain()}
          to=""
        >
          회원정보 수정
        </MyPageUserMain>
        <MyPageUserDelete
          usermode={usermode}
          onClick={() => changeToUserDelete()}
          to="userDelete"
        >
          회원탈퇴
        </MyPageUserDelete>

        <EditWrap>
          <Outlet />
        </EditWrap>
      </MyPageContainer>
    </Container>
  );
}

export default MyPage;
