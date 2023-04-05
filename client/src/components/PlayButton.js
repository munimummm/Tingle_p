import { PlayArrow } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AudioActions } from "store/AudioSlice";
function PlayButton({ onPlay, list }) {
  const dispatch = useDispatch();
  let listSongs = useSelector((state) => state.audio.listSongs);

  const addSong = () => {
    if (
      listSongs.filter((e) => {
        return e._id === list._id;
      }).length < 1
    ) {
      dispatch(AudioActions.setAddPlayList(list));
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
