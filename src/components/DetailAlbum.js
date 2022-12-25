import { MoreVert, PlayArrow } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";

function DetailAlbum() {
  const location = useLocation();

  return (
    <div className="detail">
      <img src={process.env.PUBLIC_URL + "/img/Adele.jpg"} />
      ㅌㅌㅌ
      <div className="detailInfo">
        <div>
          <NavLink href="#" className="detail_title">
            {location.state.title}
          </NavLink>
        </div>
        <div>
          <NavLink href="#" className="detail_album">
            {location.state.album}
          </NavLink>
        </div>

        <div>
          <NavLink href="#" className="detail_artist">
            {location.state.artist}
          </NavLink>
        </div>
        <div className="select_icon">
          <i className="selectPlay fa-solid fa-play"></i>
          <i className="selectList fa-solid fa-list"></i>
          <i className="selectAdd fa-solid fa-folder-plus"></i>
        </div>
      </div>
      <div class="lyricsD"> {location.state.lyrics}</div>
      <div className="sug_lylics"></div>
    </div>
  );
}
export default DetailAlbum;
