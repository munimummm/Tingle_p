import styled from "styled-components";
let PlayerContainer = styled.div`
  width: 100%;
  height: 100px;
  background: #191919;
  z-index: 2;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
function Player() {
  return (
    <PlayerContainer>
      <audio className="audio"></audio>
        <img className="player-img" src="<c:url value="/img/"/>default_image.png" alt="">
        <div className="player-title"></div>
        <div className="control-zone">
            <i className="player-shuffle" class="player-control2 fa-solid fa-shuffle"></i>
            <br>
            <i className="player-repeat" class="player-control2 fa-solid fa-repeat"></i>
            <i className="player-repeat-1" class="player-control fa-solid fa-1" style="display: none"></i>
        </div>
        <i class="player-control fa-solid fa-backward"></i>
        <i id="player-play" class="player-control fa-solid fa-play"></i>
        <i id="player-pause" class="player-control fa-solid fa-pause" style="display: none"></i>
        <i class="player-control fa-solid fa-forward"></i>
        <span id="currentTime"></span>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span id="duration"></span>
        <i id="player-volume" class="player-control fa-solid fa-volume-high"></i>
        <i id="player-volume-mute" class="player-control fa-solid fa-volume-xmark" style="display: none"></i>
        <input id="player-volume-range" type="range" className="form-range" value="100">
        <i id="player-list" class="player-control fa-solid fa-list"></i>
    </PlayerContainer>
  );
}
export default Player;
