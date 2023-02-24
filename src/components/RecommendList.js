import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setRecommendList } from "store/RecommendSlice";
import { useState } from "react";
import PlayButton from "./PlayButton";
import { NavLink } from "react-router-dom";
import { setLoading } from "store/ListSlice";
import Loading from "pages/Loading";
import { setDetailList } from "store/DetailSlice";
import { AudioActions } from "store/AudioSlice";
const RecommendBox = styled.div`
  .recommend_table {
    width: 100%;
    /* margin-bottom: 30px; */
    /* display: block; */
  }
  .recommend_box {
    position: relative;
    display: inline-block;
    margin-top: 30px;
    margin-left: 30px;
    word-break: break-all;
    vertical-align: top;
    background: #ffffff;
    padding: 0 25px 40px 0;
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
    font-size: 16px;
  }
  .select_icon {
    margin-top: 24px;
  }
`;
function RecommendList({ genreList }) {
  const [recommendList, setRecommendList] = useState([]);
  // let recommend = useSelector((state) => state.recommend.list);
  let dispatch = useDispatch();
  let loading = useSelector((state) => state.list.loading);
  console.log("누른아이디" + genreList);

  useEffect(() => {
    const getRecommendList = async () => {
      dispatch(setLoading(true));
      const result = await axios.get(`http://localhost:1216/recommendList`, {
        params: {
          genre: genreList,
        },
      });
      setRecommendList(result.data);
      dispatch(setLoading(false));
      console.log(result.data);
    };
    getRecommendList();
  }, [genreList]);

  return (
    <RecommendBox>
      <ul className="recommend_table">
        {recommendList.map((list, i) => (
          <li key={i} className="recommend_box">
            <NavLink
              to={`/detail/title/${list._id}`}
              onClick={() => {
                dispatch(setDetailList(list));
              }}
            >
              <div className="imgBox">
                <img
                  className="imgItem"
                  src={process.env.PUBLIC_URL + `/img/${list.cover_img}`}
                ></img>
              </div>
              <div className="textBox">
                <strong> {list.title}</strong>
                <br />
              </div>
            </NavLink>
            <NavLink
              to={`/detail/artist/${list._id}`}
              onClick={() => {
                dispatch(setDetailList(list));
              }}
            >
              <span style={{ fontSize: "14px", color: "#989898" }}>
                {list.artist}
              </span>
            </NavLink>
            {/* {list.genre} */}

            <div className="select_icon">
              <PlayButton
                list={list}
                onPlay={() => {
                  dispatch(
                    AudioActions.setSong({
                      songs: list,
                    })
                  );
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </RecommendBox>
  );
}
export default RecommendList;
