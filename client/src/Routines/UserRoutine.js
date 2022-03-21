import React from "react";
import UserRoutineMyList from "../components/UserRoutineMyList";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  border: 3px solid #697f6e;
  width: 800px;
  margin-left: calc((100% - 800px) / 2);
  padding: 30px;
  margin-bottom: 50px;
`;

function UserRoutine({ settingLogin }) {
  return (
    <Container>
      <UserRoutineMyList settingLogin={settingLogin} />
    </Container>
  );
}

export default UserRoutine;
