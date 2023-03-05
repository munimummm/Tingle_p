import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setRecommendList } from "store/RecommendSlice";
import { useState } from "react";
import PlayButton from "./PlayButton";
import { Link } from "react-router-dom";
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
    position: relative;
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
    z-index: 5;
    position: absolute;
    font-size: 15px;
    width: 40px;
    height: 40px;
    /* background: #9147ff; */
    text-align: center;
    background: #000;
    color: #fff;
    border-radius: 50%;
    line-height: 40px;
    bottom: 10px;
    right: 10px;
  }
`;
function RecommendList({ genreList }) {
  const [recommendList, setRecommendList] = useState([]);
  // let recommend = useSelector((state) => state.recommend.list);
  let dispatch = useDispatch();
  let loading = useSelector((state) => state.list.loading);

  useEffect(() => {
    const getRecommendList = async () => {
      try {
        dispatch(setLoading(true));
        const result = await axios.get(`http://localhost:1216/recommendList`, {
          params: {
            genre: genreList,
          },
        });
        setRecommendList(result.data);
        dispatch(setLoading(false));
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRecommendList();
  }, [genreList]);

  return (
    <RecommendBox>
      <ul className="recommend_table">
        {recommendList.map((list, i) => (
          <li key={i} className="recommend_box">
            <div className="imgBox">
              <Link
                to={`/detail/title/${list.title}`}
                onClick={() => {
                  dispatch(setDetailList(list));
                }}
              >
                <img
                  className="imgItem"
                  src={process.env.PUBLIC_URL + `/img/${list.cover_img}`}
                ></img>
              </Link>
              <div className="select_icon">
                <PlayButton
                  list={list}
                  onPlay={() => {
                    dispatch(AudioActions.setSong(list));
                  }}
                />
              </div>
            </div>

            <div className="textBox">
              <Link
                to={`/detail/title/${list.title}`}
                onClick={() => {
                  dispatch(setDetailList(list));
                }}
              >
                <strong> {list.title}</strong>
              </Link>
              <br />
            </div>

            <Link
              to={`/detail/artist/${list.artist_no}`}
              onClick={() => {
                dispatch(setDetailList(list));
              }}
            >
              <span style={{ fontSize: "14px", color: "#989898" }}>
                {list.artist}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </RecommendBox>
  );
}
export default RecommendList;
