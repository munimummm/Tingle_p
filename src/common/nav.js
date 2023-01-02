import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  Recommend,
  BarChart,
  Storage,
  SupportAgent,
  ManageAccounts,
  AccountCircle,
} from "@mui/icons-material";
import { Button, ButtonGroup, TextField, InputAdornment } from "@mui/material";

let SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 250px;
  height: 100%;
  background: #000;
  overflow-x: hidden;
  overflow-y: auto;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  z-index: 1;
  color: ${(props) => props.theme.subColor};
`;
let SidebarNav = styled.div`
  width: 250px;
  button {
    justify-content: flex-start;
    color: ${(props) => props.theme.subColor};
    width: 100%;
    padding: 10px 18px 10px 24px;
  }
`;

let SidebarBrand = styled.div`
  font-size: 2rem;
  line-height: 2.5em;
  padding: 10px 18px 10px 24px;
`;
let Logo = styled(NavLink)`
  font-family: "Carter One", cursive;
  color: ${(props) => props.theme.mainColor};
`;
let MenuAll = styled.div`
  font-size: 1.2rem;
  padding: 0;
  .btnGroup {
    width: 100%;
    padding: 10px 0px 10px 0px;
  }
`;
let SearchTextField = styled(TextField)`
  & .MuiInputBase-root {
    margin-left: 10px;
    width: 80%;
    background: #1a1a1a;
    border-color: white;
    color: ${(props) => props.theme.subColor};
  }
`;
function Nav() {
  const navigate = useNavigate();
  const searchOnkeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.value !== null) {
        console.log(e.target.value);
        navigate("/search", {
          state: {
            value: e.target.value,
          },
        });
      }
    }
  };

  return (
    <SidebarContainer>
      <SidebarNav>
        <SidebarBrand>
          <Logo>Tingle</Logo>
        </SidebarBrand>
        <Button
          startIcon={<AccountCircle />}
          onClick={() => {
            navigate("/");
          }}
        >
          로그인
        </Button>

        <MenuAll>
          <SearchTextField
            onKeyPress={searchOnkeyPress}
            margin="dense"
            size="small"
            placeholder="검색"
            color="primary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "white" }}>
                  <Search />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />

          <ButtonGroup
            orientation="vertical"
            variant="string"
            className="btnGroup"
          >
            <Button
              startIcon={<Recommend />}
              onClick={() => {
                navigate("/recommend");
              }}
            >
              추천
            </Button>
            <Button
              startIcon={<BarChart />}
              onClick={() => {
                navigate("/chart");
              }}
            >
              차트
            </Button>
            <Button
              startIcon={<Storage />}
              onClick={() => {
                navigate("/storage");
              }}
            >
              보관함
            </Button>
            <Button
              startIcon={<SupportAgent />}
              onClick={() => {
                navigate("/helpCenter");
              }}
            >
              고객센터
            </Button>
            <Button
              startIcon={<ManageAccounts />}
              onClick={() => {
                navigate("/myPage");
              }}
            >
              마이페이지
            </Button>
          </ButtonGroup>
        </MenuAll>
      </SidebarNav>
    </SidebarContainer>
  );
}
export default Nav;
