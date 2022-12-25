import "./App.css";
import Nav from "./common/nav";
import Player from "./common/player";
import Chart from "./pages/Chart";
import Storage from "./pages/Storage";
import MyPage from "./pages/MyPage";
import HelpCenter from "./pages/HelpCenter";
import Recommend from "./pages/Recommend";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  const PageContainer = styled.div`
    padding-left: 250px;
    margin-bottom: 100px;
  `;
  const PageWrapper = styled.div`
    width: 100%;
  `;
  return (
    <div className="App">
      <Nav></Nav>
      <PageContainer>
        <PageWrapper>
          <Routes>
            <Route path="*" element={<div>없는페이지요</div>} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/helpCenter" element={<HelpCenter />} />
            <Route path="/myPage" element={<MyPage />} />
          </Routes>
        </PageWrapper>
      </PageContainer>
      <Player></Player>
    </div>
  );
}

export default App;
