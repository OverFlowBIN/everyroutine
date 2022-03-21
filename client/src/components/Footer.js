import React from "react";
import { SiGithub } from "react-icons/si";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background-color: #f3f8f2;
`;

const Github = styled.div`
  font-size: 3em;
  color: darkgray;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    color: #697f6e;
    transform: scale(1.1);
  }
`;

const Text = styled.p`
  font-size: 0.8em;
  color: #697f6e;
`;

function Footer() {
  return (
    <Container>
      <Github>
        <SiGithub
          onClick={() =>
            window.open("https://github.com/codestates/everyroutine", "_blank")
          }
        />
      </Github>
      <Text>Copyright© 2022 YOF all rights reserved</Text>
    </Container>
  );
}

export default Footer;
