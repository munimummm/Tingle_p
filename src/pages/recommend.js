import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import RecommendList from "components/RecommendList";
import { useDispatch, useSelector } from "react-redux";
const RecommendContainer = styled.div``;

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
