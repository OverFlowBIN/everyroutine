import React from "react";
import styled, { keyframes } from "styled-components";
// import Dance from "../assets/Dance.gif";
import YOF from "../assets/YOF.gif";
import yb from "../assets/yb.gif";
import green from "../assets/green.gif";
import bible from "../assets/bible.gif";
import elina from "../assets/elina.gif";

const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10em;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0;
  width: 100%;

  & p {
    display: flex;
    justify-content: center;
    padding: 1em;
  }
`;

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10em;
`;

const ColorChange = keyframes`
    0% {
        color: #697f6e;
      }
      20% {
        color: lightgray;
      }
      40% {
        color: #697f6e;
      }
      60% {
        color: gray;
      }
      80% {
        color: #697f6e;
      }
      100% {
        color: #697f6e;
      }
`;

const Color = styled.h1`
  animation: ${ColorChange} 5s linear infinite;
  width: 100%;
  height: auto;
  font-size: 5em;
  display: flex;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 3em;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 20em;
  margin-left: 5em;

  & h1 {
    margin-bottom: 0.5em;
  }
`;

const PositionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3em;
  color: #697f6e;
  margin-bottom: 10em;

  & ul {
    list-style: none;
    margin: 1em 0;
  }

  & h1 {
    font-weight: bold;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 5em;
`;

const Team = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 1em;
  margin-bottom: 10em;
  color: #697f6e;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3em;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

function About() {
  return (
    <AboutBody>
      <AboutContainer>
        <AboutDiv>
          <Color> ABOUT US</Color>

          <Team>
            <img alt="YOF" src={YOF} />

            <TextDiv>
              <h1>Team : YOF</h1>
              <h3>
                " 함께 만들어가는 스마트한 생활 하나씩 달성해나가는 좋은 습관
                모두의 루틴으로 하루를 완성해보세요."
              </h3>
            </TextDiv>
          </Team>

          <PositionDiv>
            <Div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <ImgDiv>
                <img alt="yb" src={yb} style={{ width: "15em" }} />
              </ImgDiv>

              <TextDiv>
                <h1>김영빈 (Back-End)</h1>
                <h3>👑 꽃보다 아름다운 YOF의 팀장님 </h3>
                <ul>
                  <li>데이터베이스 초기 설정 및 유지/보수</li>
                  <li>그룹 루틴 CRUD(router, controller)</li>
                  <li>그룹 루틴 사용자에 대한 응답 제어</li>
                  <li>데이터베이스 관계 설정</li>
                </ul>
              </TextDiv>
            </Div>

            <Div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <ImgDiv>
                <img alt="green" src={green} style={{ width: "15em" }} />
              </ImgDiv>

              <TextDiv>
                <h1>이초록 (Back-End)</h1>
                <h3>🧚 YOF의 엔딩요정</h3>
                <ul>
                  <li>서버 초기 설정</li>
                  <li>개인루틴 CRUD(router, controller)</li>
                  <li>정적 웹 호스팅 및 클라우드 프록시 서버 연결</li>
                  <li>배포 및 도메인 연결</li>
                </ul>
              </TextDiv>
            </Div>
          </PositionDiv>

          <PositionDiv>
            <Div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <ImgDiv>
                <img alt="bible" src={bible} style={{ width: "15em" }} />
              </ImgDiv>

              <TextDiv>
                <h1>박성경 (Front-End)</h1>
                <h3>💯 YOF의 정신적 지주. 만능 치트키</h3>
                <ul>
                  <li>전체적인 UI/UX 디자인</li>
                  <li>개인 루틴 & 그룹 루틴 기능</li>
                  <li>회원가입 기능</li>
                  <li>로그인 기능</li>
                </ul>
              </TextDiv>
            </Div>

            <Div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <ImgDiv>
                <img alt="elina" src={elina} style={{ width: "15em" }} />
              </ImgDiv>

              <TextDiv>
                <h1>박윤정 (Front-End)</h1>
                <h3>🥰 YOF의 해피바이러스 </h3>
                <ul>
                  <li></li>
                  <li>프로젝트 소개 페이지</li>
                  <li>팀 소개 페이지</li>
                  <li>회원정보 수정 기능</li>
                  <li>회원탈퇴 기능</li>
                </ul>
              </TextDiv>
            </Div>
          </PositionDiv>
        </AboutDiv>
      </AboutContainer>
    </AboutBody>
  );
}

export default About;
