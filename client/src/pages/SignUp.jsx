import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import styled from "styled-components";
const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 20px;

   div {
    max-width: 500px;
 
  }
  `;
function SignUp() {
  return (
    <SignUpContainer>
    <div>
      <h2 style={{marginBottom:"16px"}}>회원가입</h2>
   
      <Grid container spacing={2}>
 
        <Grid item xs={12}>
   
          <TextField
            required
            fullWidth
            id="lastName"
            label="이름"
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="비밀번호 확인"
            type=""
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="이메일 수신"
          />
        </Grid> */}
      </Grid>
      <Button
        type="submit"
        fullWidth
        color="secondary"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        회원가입
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link to={"/login"} variant="body2">
            로그인 하러가기
          </Link>
        </Grid>
      </Grid>
    </div>
    </SignUpContainer>
  );
}
export default SignUp;
