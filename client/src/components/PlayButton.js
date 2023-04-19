import { PlayArrow } from "@mui/icons-material";
import { commonAxios } from "api/CommonAxios";
import { useDispatch, useSelector } from "react-redux";
import { AudioActions } from "store/AudioSlice";
function PlayButton({ onPlay, list }) {
  const dispatch = useDispatch();
  const listSongs = useSelector((state) => state.audio.listSongs);

  const addCnt = () => {
    commonAxios.put(`/addCnt/${list.id}`);
  };

  const addSong = () => {
    if (
      listSongs.filter((e) => {
        return e._id === list._id;
      }).length < 1
    ) {
      dispatch(AudioActions.setAddPlayList(list));
      addCnt();
    } else {
      console.log("중복곡입니다.");
    }
  };

  return (
    <PlayArrow
      style={{ cursor: "pointer", verticalAlign: "text-top" }}
      onClick={() => {
        addSong();
        onPlay();
      }}
    ></PlayArrow>
  );
}
export default PlayButton;
