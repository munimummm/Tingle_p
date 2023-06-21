import React from "react";
import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import styled from "styled-components";
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 20px;

   div {
    max-width: 500px;
 
  }
  `;

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <LoginContainer>
    <div>
    <h2>로그인</h2>
      <TextField
        margin="normal"
        required
        fullWidth
        autoFocus
        id="Id"
        label="아이디"
        name="Id"
        autoComplete="username"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="비밀번호"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="아이디 저장"
      />
      <Button
        type="submit"
        fullWidth
        color="secondary"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        로그인
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            비밀번호 찾기
          </Link>
        </Grid>
        <Grid item>
          <Link to={"/register"} variant="body2">
            회원가입
          </Link>
        </Grid>
      </Grid>
    </div>
    </LoginContainer>
  );
}
export default Login;
