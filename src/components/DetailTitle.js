import { MoreVert, PlayArrow } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

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
      margin-right: 50px;
      margin-left: 35px;
      border-radius: 6px;
      overflow: hidden;
      img {
        width: 125%;
        height: 125%;
        object-fit: cover;
      }
    }

    .trackInfo {
      vertical-align: top;
      display: table-cell;
      position: relative;
      padding-top: 10px;
      padding-left: 20px;
      text-align: start;
      cursor: pointer;
    }
    .trackInfo > div:first-child {
      color: #000;
      padding-top: 24px;
      font-size: 2em;
      text-decoration: none;
    }
    .trackInfo > div {
      margin-top: 14px;
      margin-bottom: 14px;
    }
  }
  .lyricsInfo {
    width: 70px;
    height: 30px;
    padding: 8px;
    line-height: 15px;
    margin-left: 30px;
    color: white;
    background: #9147ff;
    text-align: center;
    border-radius: 20px;
  }
  .detail_lyrics {
    white-space: pre-wrap;
    width: 40%;
    padding: 35px;
  }
`;

function DetailTitle() {
  const location = useLocation();

  return (
    <TitleContainer className="detailTitle">
      <div className="detailInfo">
        <div className="imgWrap">
          <img src={process.env.PUBLIC_URL + "/img/Adele.jpg"} />
        </div>
        <div className="trackInfo">
          <div>
            <NavLink className="detail_title">{location.state.title}</NavLink>
          </div>
          <div>
            <NavLink className="detail_album">{location.state.album}</NavLink>
          </div>
          <div>
            <NavLink className="detail_artist">{location.state.artist}</NavLink>
          </div>

          <div className="select_icon">
            <PlayArrow></PlayArrow>
            <i className="selectList fa-solid fa-list"></i>
            <i className="selectAdd fa-solid fa-folder-plus"></i>
          </div>
        </div>
      </div>
      <div class="lyricsInfo">??????</div>
      <div className="detail_lyrics">{location.state.lyrics}</div>
    </TitleContainer>
  );
}
export default DetailTitle;
