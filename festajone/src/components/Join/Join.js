import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Join.css';

const Join = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const nicknameRef = useRef();

  const navigate = useNavigate();

  const handleJoin = () => {
    if (idRef.current.value === '' || idRef.current.value === undefined) {
      // if (idRef.length < 8) {
      //   alert('8자 이상 입력하세요');
      //   idRef.current.focus();
      //   return;
      // }
      alert('아이디를 입력하세요');
      idRef.current.focus();
      return false;
    } else {
      if (idRef.current.value.length < 8) {
        alert('8자 이상 입력하세요');
        idRef.current.focus();
        return;
      }
    }
    if (pwRef.current.value === '' || pwRef.current.value === undefined) {
      alert('비밀번호를 입력하세요');
      pwRef.current.focus();
      return false;
    }
    if (emailRef.current.value === '' || emailRef.current.value === undefined) {
      alert('이메일을 입력하세요');
      emailRef.current.focus();
      return false;
    }
    if (nameRef.current.value === '' || nameRef.current.value === undefined) {
      alert('이름을 입력하세요');
      nameRef.current.focus();
      return false;
    }
    if (nicknameRef.current.value === '' || nicknameRef.current.value === undefined) {
      alert('닉네임을 입력하세요');
      nicknameRef.current.focus();
      return false;
    }

    function handleputLength(el, min) {
      if (el.value.length > min) {
        el.value = el.value.substr(0, min);
      } else {
        alert('8자 이상 입력하세요');
        return false;
      }
    }

    axios
      .post('http://localhost:8008/join', {
        id: idRef.current.value,
        pw: pwRef.current.value,
        email: emailRef.current.value,
        name: nameRef.current.value,
        nickname: nicknameRef.current.value
      })
      .then((res) => {
        console.log('handleJoin =>', res);
        if (res.data.affectedRows === 1) alert('회원가입이 되었습니다');
        else alert('회원가입이 되지 않았습니다.');
        navigate('/');
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="Join" align="center">
      <h1>Sign Up</h1>
      <form>
        <div className="text-area">
          <input
            type="text"
            name="username"
            placeholder="아이디를 입력해주세요"
            className="text_input"
            ref={idRef}
            defaultValue=""
            minLength="8"
          />
          <div className="text-area">
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              className="text_input"
              ref={pwRef}
              defaultValue=""
              minLength="10"
            />
          </div>
          <div className="text-area">
            <input
              type="text"
              name="email"
              placeholder="abcde@email.com"
              className="text_input"
              ref={emailRef}
              defaultValue=""
            />
          </div>
          <div className="text-area">
            <input
              type="text"
              name="name"
              placeholder="이름을 입력해주세요"
              className="text_input"
              ref={nameRef}
              defaultValue=""
            />
          </div>
          <div className="text-area">
            <input
              type="text"
              name="nickname"
              placeholder="닉네임을 입력해주세요"
              className="text_input"
              ref={nicknameRef}
              defaultValue=""
            />
          </div>
          <input className="btn" type="button" value="회원가입" onClick={handleJoin} />
        </div>
      </form>
    </div>
  );
};

export default Join;
