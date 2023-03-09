import styled from "styled-components";
import RecommendList from "components/RecommendList";
import { useSelector } from "react-redux";
const RecommendContainer = styled.div`
  width: 100%;
  .main-imgBox {
    width: 1500px;
    height: 500px;
    border-radius: 12px;
    margin-bottom: 50px;
    overflow: hidden;
    .main-img {
      width: 100%;
      height: 100%;

      @media ${(props) => props.theme.mobile} {
        width: auto;
      }
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
          alt="main_img"
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
