import { MoreVert, PlayArrow } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function DetailArtist() {
  return (
    <div className="detail">
      {/* <img>이미지</img> */}
      aaa
      <div className="detailInfo">
        <div>
          <NavLink href="#" className="detail_title">
            타이틀
          </NavLink>
        </div>
        <div>
          <NavLink href="#" className="detail_album">
            앨범
          </NavLink>
        </div>

        <div>
          <NavLink href="#" className="detail_artist">
            아티스트
          </NavLink>
        </div>
        <div className="select_icon">
          <i className="selectPlay fa-solid fa-play"></i>
          <i className="selectList fa-solid fa-list"></i>
          <i className="selectAdd fa-solid fa-folder-plus"></i>' + '
        </div>
      </div>
      <div class="lyricsD">가사</div>
      <div className="sug_lylics"></div>
    </div>
  );
}
export default DetailArtist;
