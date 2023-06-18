import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { commonAxios } from "api/CommonAxios";
const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 20px;
   div {
    max-width: 500px;
 
  }
  `;
function Register() {
  const [usernameReg, setUsernameReg] = useState('');
  const [idReg, setIdReg] = useState('');
	const [passwordReg, setPasswordReg] = useState('');
  const [passwordConfirmReg, setPasswordConfirmReg] = useState('');
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);


  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirmReg(currentPasswordConfirm);
    if (passwordReg !== currentPasswordConfirm) {
      setIsPasswordConfirm(false);
    } else {
      setIsPasswordConfirm(true);
    }
  };

  const userRegister = async (e) => {
    try {
      e.preventDefault();
      if (!isPasswordConfirm) {
        return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        
      }
      const result = await commonAxios.post(`/register`, {
        username: usernameReg,
        password: passwordReg,
        id: idReg
      });

      console.log(result.data); // 성공 응답
    } catch (error) {
      console.error(error.response.data); // 오류 응답
    }
  }
  return (
    <RegisterContainer>
    <div>
      <h2 style={{marginBottom:"16px"}}>회원가입</h2>
   
      <Grid container spacing={2}>
 
        <Grid item xs={12}>
   
          <TextField
            required
            fullWidth
            id="username"
            label="이름"
            name="username"
            autoComplete="username"
            onChange={(e)=> setUsernameReg(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="Id"
            label="아이디"
            name="Id"
            autoComplete="username"
            onChange={(e)=> setIdReg(e.target.value)}
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
            onChange={(e)=> setPasswordReg(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="비밀번호 확인"
              type="password"
              id="password-confirm"
              autoComplete="new-password"
              onChange={onChangePasswordConfirm}
             
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
        onClick={userRegister}
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
    </RegisterContainer>
  );
}
export default Register;
