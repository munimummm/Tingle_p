import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import Sidebar from "./common/Sidebar";
import Player from "./common/Player";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SearchResult from "./pages/SearchResult";
import Recommend from "./pages/Recommend";
import Chart from "./pages/Chart";
import Storage from "./pages/Storage";
import MyPage from "./pages/MyPage";
import HelpCenter from "./pages/HelpCenter";
import Detail from "./pages/Detail";
import DetailTitle from "components/detail/DetailTitle";
import DetailAlbum from "components/detail/DetailAlbum";
import DetailArtist from "components/detail/DetailArtist";
import SearchTitle from "components/Search/SearchTitle";
import SearchAlbum from "components/Search/SearchAlbum";
import SearchArtist from "components/Search/SearchArtist";
import ScrollToTop from "common/ScrollToTop";


const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "side main";
  margin-bottom: 100px;
  max-width: 1800px;

  @media ${(props) => props.theme.mobile} {
    display: block;
  }
`;
const PageContainer = styled.div`
  grid-area: main;
  width: 100%;
  /* padding: 55px 20px 20px 40px; */
  padding: 30px 20px;
  overflow-y: auto;
`;



function App() {
  const showSidebar = useSelector((state) => state.login.showSidebar);
  return (
    <div className="App">
      <BrowserRouter>
        <AppContainer>
        {showSidebar && <Sidebar />}
          <PageContainer>
            <ScrollToTop />
            <Routes>
              <Route path="*" element={<div>없는 페이지 입니다.</div>} />
              <Route path="/" element={<Recommend />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/search" element={<SearchResult />}>
                <Route path="title" element={<SearchTitle />} />
                <Route path="album" element={<SearchAlbum />} />
                <Route path="artist" element={<SearchArtist />} />
              </Route>
              <Route path="/chart/:id" element={<Chart />} />
              <Route path="/storage" element={<Storage />} />
              <Route path="/helpCenter/:id" element={<HelpCenter />} />
              <Route path="/myPage" element={<MyPage />} />
              <Route path="/detail" element={<Detail />}>
                <Route path="title/:detailId" element={<DetailTitle />} />
                <Route path="album/:detailId" element={<DetailAlbum />} />
                <Route path="artist/:detailId" element={<DetailArtist />} />
              </Route>
            </Routes>
          </PageContainer>
        </AppContainer>
        <Player></Player>
      </BrowserRouter>
    </div>
  );
}

export default App;
