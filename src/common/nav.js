import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Search, Recommend, BarChart, Storage } from "@mui/icons-material";

let SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 250px;
  height: 100%;
  background: #000;
  overflow-x: hidden;
  overflow-y: auto;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  z-index: 1231;
`;
let SidebarNav = styled.ul`
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

let SidebarBrand = styled.li`
  font-size: 1.7rem;
  line-height: 2.5em;
`;
let Logo = styled.a`
  text-indent: 26px;
  font-family: "Carter One", cursive;
  color: #9147ff;
`;
let MenuAll = styled.div`
  font-size: 1.2rem;

  li {
    margin: 5px;
    text-indent: 1.5rem;
    line-height: 2em;
  }
  a {
    display: block;
    text-decoration: none;
    color: #cccccc;
  }
`;

function Nav() {
  const clickStyle = {
    color: "blue",
  };
  return (
    <SidebarWrapper>
      <SidebarNav>
        <SidebarBrand>
          <Logo>Tingle</Logo>
        </SidebarBrand>

        {/* <c:choose>
                    <c:when test="${userData == null}">
                        <li class="login"><a href="<c:url value="/user/UserLogIn"/>">
                            <span class="material-symbols-outlined">account_circle</span>로그인</a></li>
                    </c:when>
                    <c:otherwise>
                        <li class="login"><a href="<c:url value="/user/UserLogOut"/>">
                            <span class="material-symbols-outlined">account_circle</span>로그아웃</a></li>
                    </c:otherwise>
                </c:choose> */}
        <MenuAll>
          <NavLink>
            <fieldset className="find_fieldset">
              <Search></Search>
              <input
                spellcheck="false"
                className="findEnter find-input iptxt"
                type="text"
                placeholder="검색"
              />
            </fieldset>
          </NavLink>
          <li className="btncolor">
            <NavLink
              className="suggestion"
              to="/recommend"
              style={({ isActive }) => (isActive ? clickStyle : undefined)}
            >
              <Recommend></Recommend>추천
            </NavLink>
          </li>
          <li className="btncolor">
            <NavLink
              className="chart"
              to="/chart"
              style={({ isActive }) => (isActive ? clickStyle : undefined)}
            >
              <BarChart></BarChart>차트
            </NavLink>
          </li>
          <li className="btncolor">
            <NavLink className="library">
              <Storage />
              보관함
            </NavLink>
          </li>
          <li className="btncolor">
            <NavLink className="board">
              <span className="material-symbols-outlined">help_center</span>
              고객센터
            </NavLink>
          </li>
          <li className="btncolor">
            <NavLink className="myPage">
              <span className="material-symbols-outlined">how_to_reg</span>
              마이페이지
            </NavLink>
          </li>
        </MenuAll>
      </SidebarNav>
    </SidebarWrapper>
  );
}
export default Nav;
