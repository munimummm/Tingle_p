import styled from "styled-components";

import { Menu, Close } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import SidebarContent from "components/SidebarContent";
let SidebarContainer = styled.div`
  .mobileMenu {
    display: none;
    @media ${(props) => props.theme.mobile} {
      position: fixed;
      display: flex;
      width: 100%;
      height: 50px;
      justify-content: space-between;
      background: #fff;
      align-items: center;
      padding: 10px 10px;
      z-index: 1111;
      margin-bottom: 20px;
      grid-area: head;
    }
  }
  .mobileCloseToggle {
    position: fixed;
    top: 10px;
    right: 10px;
    display: none;
    @media ${(props) => props.theme.mobile} {
      display: block;
    }
  }
  .sidebarNormal {
    @media ${(props) => props.theme.mobile} {
      display: none;
    }
  }
`;
let Logo = styled(NavLink)`
  font-family: "Carter One", cursive;
  color: ${(props) => props.theme.mainColor};
`;
let SidebarBox = styled.div`
  position: fixed;
  grid-area: side;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  z-index: 2222;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  color: #000;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

function Sidebar() {
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = () => {
    setMobile(true);
  };
  const handleMenuClose = () => {
    setMobile(false);
  };

  return (
    <SidebarContainer>
      <div className="sidebarNormal">
        <SidebarBox>
          <SidebarContent />
        </SidebarBox>
      </div>

      <div className="mobileMenu">
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <Logo>Tingle</Logo>
        </div>

        <Menu onClick={handleMenuOpen} />
      </div>
      {mobile && (
        <SidebarBox>
          <Close
            className="mobileCloseToggle"
            onClick={handleMenuClose}
          ></Close>
          <SidebarContent handleMenuClose={handleMenuClose} />
        </SidebarBox>
      )}
    </SidebarContainer>
  );
}
export default Sidebar;
