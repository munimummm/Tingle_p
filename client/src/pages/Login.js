import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      로그인
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="이메일"
        name="email"
        autoComplete="email"
        autoFocus
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
          <Link to={"/signup"} variant="body2">
            회원가입
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
export default Login;
