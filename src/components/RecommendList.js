import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setRecommendList } from "store/RecommendSlice";
import { useState } from "react";
import PlayButton from "./PlayButton";
import { NavLink } from "react-router-dom";
const RecommendWrap = styled.div`
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
  .imgBox {
    width: 240px;
    height: 240px;
    overflow: hidden;
    border-radius: 4%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .imgItem {
    width: 100%;
    height: 100%;
  }
  .textBox {
    width: 230px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .select_icon {
    margin-left: 0px;
    margin-top: 32px;
  }
`;
function RecommendList({ genreList }) {
  const [recommendList, setRecommendList] = useState([]);
  let recommend = useSelector((state) => state.recommend.list);
  let dispatch = useDispatch();
  console.log("받은장르" + genreList);
  useEffect(() => {
    axios
      .get(`http://localhost:1216/recommendList`, {
        params: {
          genre: genreList,
        },
      })
      .then((result) => {
        console.log(result.data);
        setRecommendList(result.data);
      })
      .catch(() => {
        console.log("실패함");
      });
  }, [genreList]);
  return (
    <RecommendWrap>
      <table className="suggestion_table">
        <tr>
          {recommendList.map((list, i) => (
            <td key={i} className="suggestion_box">
              <NavLink>
                <div className="imgBox">
                  <img
                    className="imgItem"
                    src={process.env.PUBLIC_URL + `/img/${list.cover_img}`}
                  ></img>
                </div>
                <div className="textBox">
                  <strong> {list.title}</strong>
                  <br />
                  <span style={{ fontSize: "12px", color: "#989898" }}>
                    {list.artist}
                  </span>
                </div>
                {list.genre}
              </NavLink>
              <div className="select_icon">
                <PlayButton
                  list={list}
                  // onPlay={() => {
                  //   dispatch(
                  //     setUrl({
                  //       src: `mp3/${list.file_path}`,
                  //       albumImage: `img/${list.cover_img}`,
                  //       title: list.title,
                  //       artist: list.artist,
                  //     })
                  //   );
                  // }}
                />
              </div>
            </td>
          ))}
        </tr>
      </table>
    </RecommendWrap>
  );
}
export default RecommendList;
