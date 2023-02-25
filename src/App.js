// import "./App.css";
import Nav from "./common/nav";
import Player from "./common/Player";
import SearchResult from "./pages/SearchResult";
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
import SearchTitle from "components/SearchTitle";
import SearchAlbum from "components/SearchAlbum";
import SearchArtist from "components/SearchArtist";

function App() {
  const ContainerWrap = styled.div`
    margin-bottom: 100px;
    max-width: 1800px;
  `;
  const PageContainer = styled.div`
    width: 100%;
    padding: 55px 20px 20px 290px;
    overflow-y: auto;
    .noPageImg {
      width: 256px;
      height: 256px;
    }
  `;

  return (
    <div className="App">
      <ContainerWrap>
        <Nav></Nav>
        <PageContainer>
          <Routes>
            <Route path="*" element={<div>준비중입니다.</div>} />
            <Route path="/search" element={<SearchResult />}>
              <Route path="title" element={<SearchTitle />} />
              <Route path="album" element={<SearchAlbum />} />
              <Route path="artist" element={<SearchArtist />} />
            </Route>
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
        </PageContainer>
      </ContainerWrap>
      <Player></Player>
    </div>
  );
}

export default App;
