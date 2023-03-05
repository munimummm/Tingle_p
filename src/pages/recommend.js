import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import RecommendList from "components/RecommendList";
import { useDispatch, useSelector } from "react-redux";
const RecommendContainer = styled.div`
  width: 100%;
  .main-imgBox {
    width: 100%;
    height: 500px;
    background: #000;
    margin-bottom: 50px;
    overflow: hidden;
    .main-img {
      width: 100%;
    }
  }
`;

function Recommend() {
  let genre = useSelector((state) => state.recommend.genre);

  return (
    <RecommendContainer>
      <div className="main-imgBox">
        <img
          className="main-img"
          src={process.env.PUBLIC_URL + `/img/main-2.jpg`}
        ></img>
      </div>
      {genre.map((genreList, i) => (
        <div key={i}>
          <h2>{genreList}</h2>
          <RecommendList genreList={genreList} />
        </div>
      ))}
    </RecommendContainer>
  );
}
export default Recommend;
