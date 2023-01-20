// import "./App.css";
import Nav from "./common/nav";
import Player from "./common/player";
import Search from "./pages/Search";
import Recommend from "./pages/Recommend";
import Chart from "./pages/Chart";
import Storage from "./pages/Storage";
import MyPage from "./pages/MyPage";
import HelpCenter from "./pages/HelpCenter";
import Detail from "./pages/Detail";
import DetailTitle from "components/DetailTitle";
import DetailAlbum from "components/DetailAlbum";
import DetailArtist from "components/DetailArtist";

import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  const PageContainer = styled.div`
    padding-left: 250px;
    margin-bottom: 100px;
  `;
  const PageWrapper = styled.div`
    width: 100%;
    padding: 20px;
    overflow-y: auto;
  `;
  return (
    <div className="App">
      <Nav></Nav>
      <PageContainer>
        <PageWrapper>
          <Routes>
            <Route path="*" element={<div>없는페이지요</div>} />
            <Route path="/search" element={<Search />} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/helpCenter" element={<HelpCenter />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/detail" element={<Detail />}>
              <Route path="title/:detailId" element={<DetailTitle />} />
              <Route path="album/:detailId" element={<DetailAlbum />} />
              <Route path="artist/:detailId" element={<DetailArtist />} />
            </Route>
          </Routes>
        </PageWrapper>
      </PageContainer>
      <Player></Player>
    </div>
  );
}

export default App;
