import axios from "axios";
import { MoreVert, PlayArrow, ArrowForwardIos } from "@mui/icons-material";
import styled from "styled-components";
import { useEffect, useState } from "react";

const RecommendContainer = styled.div`
  .suggestion_table {
    width: 100%;
    height: 20vh;
    padding-left: 10px;
    border-collapse: separate;
    border-spacing: 10px;
    margin-bottom: 50px;
  }
  .suggestion_box {
    background: #ffffff;
    width: 240px;
    height: 240px;
    margin: 0px;
    padding: 0px;
  }
  .viewDetail {
    width: 20%;
    height: 240px;
    border: none;
  }
  img {
    width: 240px;
    height: 240px;
  }
  .select_icon {
    margin-left: 0px;
    margin-top: 32px;
  }
`;

function Recommend() {
  const [recommendList, setRecommendList] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1216/recommendList", )
  //     .then((result) => {
  //       console.log(result.status);
  //       setRecommendList(result.data);
  //     })
  //     .catch(() => {
  //       console.log("실패함");
  //     });
  // }, []);
  return (
    <RecommendContainer>
      {/* {recommendList.map((list, i) => ( */}
      <>
        <h2>list</h2>
        <table className="suggestion_table">
          <tr>
            <td className="suggestion_box">
              <button type="button" className="viewDetail">
                <img src={process.env.PUBLIC_URL + "/img/Adele.jpg"} />
              </button>
              <div className="suggestion_title"></div>
              <div className="suggestion_artist"></div>
              <div className="select_icon">
                <PlayArrow></PlayArrow>
              </div>
            </td>
          </tr>
        </table>
      </>
      {/* ))} */}
    </RecommendContainer>
  );
}
export default Recommend;
