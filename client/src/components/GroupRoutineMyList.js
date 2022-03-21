import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/er_logo.svg";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import AOS from "aos";

const CardCon = styled(Slider)`
  .slick-track {
  }
  .slick-list {
  }
  .slick-slide {
  }
  .slick-slide div {
    padding: 15px;
  }
`;
const Card = styled.div`
  background-color: #ddeede;
  min-height: 235px;
  box-shadow: 5px 5px #697f6e;
`;
const NewCard = styled(Card)`
  background-color: #ececec;
`;
const BigPlus = styled.div`
  line-height: 175px;
  text-align: center;
  font-size: 50px;
  color: #697f6e;
`;

const CardImg = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  background-color: white;
`;
const CardBody = styled.div`
  padding-top: 10px;
  cursor: pointer;
`;
const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  border: 3px solid #697f6e;
  margin: 0 -15px -10px -15px;
  background-color: white;
  padding: 5px !important;
`;
const CardLink = styled(Link)`
  color: #697f6e;
  &:link {
    text-decoration: none;
    color: #697f6e;
  }
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
const settings = {
  dots: true,
  infinite: false,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 3,
};

AOS.init({
  duration: 1200,
});

export default function GroupRoutineMyList({
  openGropRoutineModal,
  myGroupRoutineList,
}) {
  return (
    <>
      <TagSpan>&#128293; 오늘도 다 함께 힘차게 달려봐요! &#128293;</TagSpan>
      <CardCon {...settings}>
        <NewCard
          data-aos="flip-right"
          onClick={() => {
            openGropRoutineModal();
          }}
        >
          <BigPlus>+</BigPlus>
        </NewCard>

        {myGroupRoutineList.map((el) => (
          <Card key={el.id} id={el.id} data-aos="flip-right">
            <CardImg
              id={el.id}
              src={el.image ? el.image : logo}
              alt="Card image"
            />
            <CardLink
              key={el.id}
              id={el.id}
              to={"/grouproutines/detail/" + el.id}
              className={el.id}
            >
              <CardBody id={el.id}>
                <CardTitle id={el.id}>&#128526; {el.routine_name}</CardTitle>
              </CardBody>
            </CardLink>
          </Card>
        ))}
      </CardCon>
    </>
  );
}
