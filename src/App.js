import "./App.css";
import Nav from "./common/nav";
import Player from "./common/player";
import Chart from "./pages/chart";
import Recommend from "./pages/recommend";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  const PageContainer = styled.div`
    padding-left: 250px;
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
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/chart" element={<Chart />} />
          </Routes>
        </PageWrapper>
      </PageContainer>
      <Player></Player>
    </div>
  );
}

export default App;
