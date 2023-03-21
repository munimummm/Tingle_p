import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
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
  }
  .recommend_box {
    position: relative;
    display: inline-block;
    margin-top: 30px;
    /* margin-left: 20px; */
    word-break: break-all;
    vertical-align: top;
    background: rgb(255, 255, 255);
    padding: 0px 22px 40px 0px;
  }
  .imgBox {
    width: 280px;
    height: 280px;
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
    width: 260px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    margin-left: 10px;
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
  let dispatch = useDispatch();
  let loading = useSelector((state) => state.list.loading);

  useEffect(() => {
    const getRecommendList = async () => {
      try {
        dispatch(setLoading(true));
        const result = await axios.get(`http://localhost:8080/recommendList`, {
          params: {
            genre: genreList,
          },
        });
        setRecommendList(result.data);
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error);
      }
    };
    getRecommendList();
  }, [dispatch, genreList]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                      src={`/img/${list.cover_img}`}
                      alt="album_img"
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
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#989898",
                      marginLeft: "10px",
                    }}
                  >
                    {list.artist}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </RecommendBox>
      )}
    </>
  );
}
export default RecommendList;
