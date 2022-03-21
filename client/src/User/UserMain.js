import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import smileImg from "../assets/smile.png";
import logo from "../assets/er_logo.svg";

// axios.defaults.withCredentials = true;

const UserMainContainer = styled.div`
  /* background-image: url(${smileImg}); */
  color: #697f6e;
  display: flex;
  flex-direction: column;
  border: 3px solid #697f6e;
  /* margin-top: -140px;
  margin-left: 200px; */
  width: 100%;
  height: 80vh;
  margin-top: 0.5em;
  margin-left: -1em;
  z-index: 30;
`;

const UserMainDiv = styled.div`
  /* margin-top: -1em; */
  margin: 1em;
`;

const UserMainImg = styled.img.attrs({
  src: `${smileImg}`,
})`
  width: 20em;
  height: auto;
  opacity: 0.5;
  margin-top: 1em;
  margin-left: 25em;
  z-index: 0;
`;

const Button = styled.button`
  background-color: #697f6e;
  margin-left: 0.5em;
  width: 70px;
  height: 30px;
  border: none;
  color: white;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const Label = styled.label`
  display: inline-block;
  background-color: #697f6e;
  margin-left: 0.5em;
  width: 70px;
  height: 30px;
  border: none;
  color: white;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
`;

const Input = styled.input`
  margin-left: 1em;
`;

const serverURL = "http://localhost:4000/users";

function UserMain() {
  const [image, setImage] = useState(logo);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await axios.get(serverURL + "/user-info");
        console.log(res.data);
        // 데이터는 response.data 안에 들어있습니다.
        setName(res.data.data.nickname);
        setEmail(res.data.data.email);
        setImage(res.data.data.profile);
      } catch (e) {
        console.log(e);
      }
    };
    getUserInfo();
  }, []);

  // * 이미지 저장
  const saveImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  // * 이미지 삭제
  const deleteImage = (e) => {
    URL.revokeObjectURL(image);
    setImage("");
  };

  const SendNameData = async () => {
    const cookieOption = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cache: "no-cache",
      },
      withCredentials: true,
    };
    await axios
      .post(serverURL + "/user-edit", { nickname: name }, cookieOption)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setName(name);
          console.log(res.data);
          alert("닉네임이 변경되었습니다.", res.data.data.nickname);
        }
      })
      .catch((err) => console.log(err));
  };

  const SendPwdData = async () => {
    const cookieOption = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cache: "no-cache",
      },
      withCredentials: true,
    };
    await axios
      .post(
        serverURL + "/user-edit",
        { password: password, newPassword: newPassword },
        cookieOption
      )
      .then((res) => {
        console.log("비밀번호 응답res", res);
        if (res.status === 200) {
          setPassword(password);
          setNewPassword(newPassword);
          console.log(res.data);
          alert("비밀번호가 변경되었습니다.", res.data.password);
        }
      })
      .catch((err) => console.log(err));
  };

  const SendImgData = async () => {
    const cookieOption = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cache: "no-cache",
      },
      withCredentials: true,
    };
    await axios
      .post(serverURL + "/user-edit", { profile: image }, cookieOption)
      .then((res) => {
        if (res.status === 200) {
          setImage(image);
          console.log(res.data);
          alert("프로필 이미지가 변경되었습니다.", res.data.profile);
        }
      })
      .catch((err) => console.log(err));
  };

  // *same password

  const SamePassword = async () => {
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
        if (password) {
          // console.log("입력 비밀번호???", password);
          // console.log("비밀번호 조회는 잘 되었나????===", res.data.data.password);
          if (password !== res.data.data.password) {
            alert("비밀번호가 일치하지 않습니다.", res.data.password);
          } else if (password === res.data.data.password) {
            alert("새로운 비밀번호를 입력해주세요.", res.data.password);
          }
        }
      })
      .catch((err) => console.log(err));
  };

  // * onChange
  const handleChangeName = (item) => {
    setName(item);
    console.log(name);
  };

  const handleChangePwd = (item) => {
    setPassword(item);
    console.log(password);
  };

  const handleChangePwdConfirm = (item) => {
    setNewPassword(item);
    console.log(newPassword);
  };

  const handleChangeImg = (item) => {
    setImage(item);
    console.log(image);
  };

  return (
    <UserMainContainer>
      <UserMainImg />
      <div style={{ marginTop: "-19em", marginLeft: "2em" }}>
        <h1>회원 정보 관리</h1>
        <p>여러분을 개성 있게 소개해보세요.</p>
        <h3>이메일 : {email}</h3>
      </div>

      {/* // * */}
      <UserMainDiv>
        <UserMainDiv>
          <h3>
            닉네임 변경 :
            <Input
              type="text"
              value={name}
              style={{ marginLeft: "0.5em" }}
              onChange={(e) => handleChangeName(e.target.value)}
            />
            <Button onClick={(e) => SendNameData(e)}>수정</Button>
          </h3>
        </UserMainDiv>

        <UserMainDiv>
          <h3>프로필 변경</h3>
          <img
            alt="profile_img"
            src={image}
            // value={image}
            style={{ width: "15em", height: "auto" }}
          />
          {/* {image && (
            <img
              alt="profile_img"
              src={image}
              value={image}
              style={{ width: "15em", height: "auto" }}
              onChange={(e) => handleChangeImg(e.target.value)}
            />
          )} */}

          <Label htmlFor="file">업로드</Label>
          <input
            id="file"
            name="file"
            type="file"
            accept="image/*"
            onChange={saveImage}
            style={{ display: "none" }}
          />

          <Button onClick={() => deleteImage()}>삭제</Button>
          <Button onClick={(e) => SendImgData(e)}>수정</Button>
        </UserMainDiv>

        <div style={{ marginTop: "3em" }}>
          <UserMainDiv>
            <h3>비밀번호 변경</h3>
          </UserMainDiv>

          <UserMainDiv>
            <h3>
              기존 비밀번호 :
              <Input
                type="password"
                value={password}
                onChange={(e) => handleChangePwd(e.target.value)}
              />
              <Button onClick={() => SamePassword()}>확인</Button>
            </h3>
          </UserMainDiv>
          <UserMainDiv>
            <h3>
              새로운 비밀번호 :
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => handleChangePwdConfirm(e.target.value)}
              />
              <Button onClick={(e) => SendPwdData(e)}>수정</Button>
            </h3>
          </UserMainDiv>
        </div>
      </UserMainDiv>

      {/* // * */}
    </UserMainContainer>
  );
}

export default UserMain;
