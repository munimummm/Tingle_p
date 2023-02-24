import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import RecommendList from "components/RecommendList";
import { useDispatch, useSelector } from "react-redux";
const RecommendContainer = styled.div`
  .main-imgBox {
    width: 100%;
    height: 500px;
    background: #000;
    margin-bottom: 50px;
    overflow: hidden;
    .main-img {
      width: 100%;
      /* height: 100%; */
      /* object-fit: fill; */
    }
  }
`;

function Recommend() {
  // const [genre, setGenre] = useState([

  // ]);
  let genre = useSelector((state) => state.recommend.genre);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:1216/recommendList${genre}`, {
  //       params: {
  //         genre: genre,
  //       },
  //     })
  //     .then((result) => {
  //       console.log(result.data);
  //       setRecommendList(result.data);
  //     })
  //     .catch(() => {
  //       console.log("실패함");
  //     });
  // }, [genre]);
  return (
    <RecommendContainer>
      <div className="main-imgBox">
        <img
          className="main-img"
          src={process.env.PUBLIC_URL + `/img/main-2.jpg`}
        ></img>
      </div>
      {genre.map((genreList, i) => (
        <>
          <h2>{genreList}</h2>
          <RecommendList key={i} genreList={genreList} />
        </>
      ))}
    </RecommendContainer>
  );
}
export default Recommend;
