import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const Navigate = useNavigate();

  const handleLogin = () => {
    if (idRef.current.value === '' || idRef.current.value === undefined) {
      alert('아이디를 입력하세요');
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === '' || pwRef.current.value === undefined) {
      alert('비밀번호를 입력하세요');
      pwRef.current.focus();
      return false;
    }

    console.log(
      'LoginForm:window.sessionStorage(login_id) =>',
      window.sessionStorage.getItem('id')
    );

    axios
      .post('http://localhost:8008/login', {
        id: idRef.current.value,
        pw: pwRef.current.value
      })
      .then((res) => {
        console.log('handleLogin =>', res);
        if (res.data[0].cnt === 1) {
          window.sessionStorage.setItem('id', idRef.current.value);
          Navigate('/');
        } else {
          alert('회원정보가 없습니다');
          Navigate('/login');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleJoin = () => {
    Navigate('/join');
  };

  return (
    <div className="Login" align="center" border-radius="22px">
      <h1>Login</h1>
      <form>
        <div className="text-area">
          <input type="text" name="username" placeholder=" ID" className="text_input" ref={idRef} />
          <div className="text-area">
            <input
              type="password"
              name="password"
              placeholder=" PASSWORD"
              className="text_input"
              ref={pwRef}
            />
          </div>
          <input type="button" value="로그인" className="btn" onClick={handleLogin} />
          <span>
            <i class="eye" aria-hidden="true" type="button" id="eye"></i> 
          </span>
        </div>
      </form>
      <input type="button" value="▷계정이 없으신가요?" onClick={handleJoin} className="submit" />
    </div>
  );
};

export default Login;
