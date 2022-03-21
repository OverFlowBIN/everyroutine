import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import logo from "../assets/er_logo.svg";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import AOS from "aos";

const CardCon = styled(Slider)`
  .slick-track {
  }
  .slick-list {
    min-height: 420px;
  }
  .slick-slide {
  }
  .slick-slide div {
    padding: 10px;
  }
`;
const Card = styled.div`
  /* border-radius: 1em; */
  background-color: #ddeede;
  min-height: 370px;
  cursor: pointer;
  box-shadow: 5px 5px #697f6e;
`;
const CardImg = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  background-color: white;
  margin-bottom: 10px;
`;
const CardBody = styled.div``;
const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  border: 3px solid #697f6e;
  margin: -5px;
  background-color: white;
`;
const CardSubtitle = styled.div`
  margin: 10px -5px;
  background-color: white;
  overflow: hidden;
`;
const CardLink = styled(Link)`
  color: #697f6e;
  &:link {
    text-decoration: none;
    color: #697f6e;
  }
`;
const settings = {
  dots: true,
  infinite: false,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 3,
};
const CardText = styled.div`
  margin: -5px;
`;
const TagSpan = styled.div`
  color: #697f6e;
  border: 3px solid #697f6e;
  font-size: 20px;
  font-weight: 500;
  padding: 15px 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const TagButtonDiv = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TagButton = styled.button`
  color: white;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.7em 2em;
  background-color: gray;
  border: none;
  border-radius: 5em;
  cursor: pointer;
  &.selected {
    background-color: #697f6e;
  }
`;

const TagButtonSmall = styled(TagButton)`
  font-size: 1em;
  margin: 0.2em;
  padding: 0.3em 1em;
  background-color: #697f6e;
`;

AOS.init({
  duration: 1200,
});

const serverURL = "http://localhost:4000/group-routine";

const dummyData = [
  {
    contents:
      "하루동안 물을 2L 마시는 루틴입니다. 출석률에 따라 물양 조정합니다.",
    createdAt: "2022-03-09T12:35:12.000Z",
    editor_id: 1,
    id: 1,
    image:
      "https://dmwedtsa0n9p4.cloudfront.net/media/uploads/2021/07/12/06_-1.png",
    routine_name: "물 2L 마시기",
    tag_name: "[health, lifestyle, workout]",
    updatedAt: "2022-03-09T12:35:12.000Z",
  },
];

export default function GroupRoutineNewList() {
  const [newGroupRoutineList, setNewGroupRoutineList] = useState(dummyData);
  const [selectedTag, setSelectedTag] = useState("all");
  const [tagCheck, setTagCheck] = useState([
    { name: "ALL", id: "all" },
    { name: "생활", id: "life" },
    { name: "건강", id: "health" },
    { name: "운동", id: "workout" },
    { name: "미션", id: "mission" },
  ]);

  const tagCheckHandler = (e) => {
    setSelectedTag(e.target.id);
  };

  useEffect(() => {
    const getNewGroupRoutineList = async () => {
      try {
        const response = await axios
          .get(serverURL + "/tag?name=" + selectedTag)
          .catch((err) => console.log(err));
        if (response.status === 200) {
          setNewGroupRoutineList(response.data.data);
        } else {
          console.log(response.status);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getNewGroupRoutineList();
  }, [selectedTag]);

  const stringToArray = (string) => {
    return string.split(",");
  };

  return (
    <div>
      <TagSpan>
        &#10024; 아직 가입하지 않은 그룹 루틴이 이렇게나 많아요! &#10024;
      </TagSpan>
      <TagButtonDiv>
        {tagCheck.map((el, idx) => (
          <TagButton
            key={idx}
            name={el.id}
            id={el.id}
            onClick={(e) => tagCheckHandler(e)}
            className={el.id === selectedTag ? "selected" : "none"}
          >
            # {el.name}
          </TagButton>
        ))}
      </TagButtonDiv>

      <CardCon {...settings}>
        {newGroupRoutineList.map((el) => (
          <Card key={el.id} id={el.id} data-aos="flip-right">
            <CardImg
              id={el.id}
              src={el.image ? el.image : logo}
              alt="Card image"
            />
            <CardLink
              key={el.id}
              id={el.id}
              to={"/groupRoutines/detail/" + el.id}
              className={el.id}
            >
              <CardBody id={el.id}>
                <CardTitle id={el.id}>&#9994; {el.routine_name}</CardTitle>
                <CardSubtitle id={el.id}>{el.contents}</CardSubtitle>
                <CardText id={el.id}>
                  {stringToArray(el.tag_name).map((tag, idx) => (
                    <TagButtonSmall key={idx}> # {tag}</TagButtonSmall>
                  ))}
                </CardText>
              </CardBody>
            </CardLink>
          </Card>
        ))}
      </CardCon>
    </div>
  );
}
