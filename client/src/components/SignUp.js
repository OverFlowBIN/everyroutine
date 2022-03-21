import React from "react";

function SignUp() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
        margin: "5em",
      }}
    >
      <div
        style={{
          margin: "3em",
        }}
      >
        <h3>닉네임</h3>
        <input type="text"></input>
        <h3>이메일</h3>
        <input type="text"></input>
        <h3>비밀번호</h3>
        <input type="text"></input>
        <h3>비밀번호 확인</h3>
        <input type="text"></input>
      </div>

      <div
        style={{
          margin: "1em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "salmon",
          color: "white",
          width: "150px",
          height: "50px",
        }}
      >
        "로봇이 아닙니다"
      </div>
      <div>
        <button>가입 후 루틴 시작하기</button>
      </div>
    </div>
  );
}

export default SignUp;
