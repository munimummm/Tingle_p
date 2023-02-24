import { MoreVert, PlayArrow } from "@mui/icons-material";
import { NavLink, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import { useDispatch, useSelector } from "react-redux";
import { AudioActions } from "store/AudioSlice";
const TitleContainer = styled.div`
  max-width: 1600px;
  min-width: 800px;
  padding-top: 50px;

  .detailInfo {
    width: 100%;
    padding-left: 50px;
    box-sizing: border-box;
    position: relative;
    display: table;
    table-layout: fixed;
    .imgWrap {
      display: table-cell;
      width: 240px;
      height: 240px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4%;
      }
    }

    .trackInfo {
      vertical-align: middle;
      display: table-cell;
      position: relative;
      padding-left: 40px;
      cursor: pointer;
      padding-top: 24px;
    }
    .trackText {
      display: flex;
      align-items: center;
    }
    .firstText {
      font-size: 2em;
    }

    .dd {
      margin-top: 7px;
      margin-bottom: 14px;
      text-decoration: none;
    }
    .dt {
      float: left;
      font-size: 1em;
      margin-right: 20px;
      vertical-align: middle;
    }
    .select_icon {
      font-size: 15px;
      width: 100px;
      background: #000;
      color: #fff;
      text-align: center;
      border-radius: 4%;
      line-height: 40px;
    }
  }
  .tabText {
    width: 70px;
    height: 30px;
    padding: 8px;
    line-height: 15px;
    margin-top: 35px;
    margin-left: 30px;
    color: #fff;
    background: #9147ff;
    text-align: center;
    border-radius: 20px;
  }
  .tabItem {
    white-space: pre-wrap;
    width: 40%;
    /* padding: 35px; */
    padding-top: 35px;
    margin-left: 35px;
  }
`;

function DetailTitle() {
  // const location = useLocation();
  // const list = location.state.list;
  let detailList = useSelector((state) => state.detail.list);
  let dispatch = useDispatch();
  console.log(detailList);
  return (
    <TitleContainer>
      <div className="detailInfo">
        <div className="imgWrap">
          <img src={process.env.PUBLIC_URL + `/img/${detailList.cover_img}`} />
        </div>
        <div className="trackInfo">
          <div className="trackText">
            <div className="dt">곡명 </div>
            <NavLink
              to={`/detail/title/${detailList._id}`}
              className="detail_title"
            >
              <div className="dd firstText">{detailList.title}</div>
            </NavLink>
          </div>
          <div>
            <div className="dt">앨범 </div>
            <NavLink
              to={`/detail/album/${detailList._id}`}
              className="detail_album"
            >
              <div className="dd"> {detailList.album}</div>
            </NavLink>
          </div>
          <div>
            <div className="dt">가수 </div>
            <NavLink
              to={`/detail/artist/${detailList._id}`}
              className="detail_artist"
            >
              <div className="dd"> {detailList.artist}</div>
            </NavLink>
          </div>
          <div className="select_icon">
            <PlayButton
              list={detailList}
              onPlay={() => {
                dispatch(
                  AudioActions.setSong({
                    songs: detailList,
                  })
                );
              }}
            />
            재생
          </div>
        </div>
      </div>
      <div className="tabText">가사</div>
      <div className="tabItem">{detailList.lyrics}</div>
    </TitleContainer>
  );
}
export default DetailTitle;
