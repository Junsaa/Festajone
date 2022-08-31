import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Join.css';

const Join = () => {
  const idRef = useRef();
  const pw1Ref = useRef();
  const pw2Ref = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const nicknameRef = useRef();

  const navigate = useNavigate();

  const handlepwcheck = () => {
    var pwcheck = document.getElementById('pwcheck')
    if(pw1Ref.current.value !== '' && pw2Ref.current.value !== '' ){
      if(pw1Ref.current.value === pw2Ref.current.value) {
        pwcheck.innerText = '비밀번호 확인 완료';
        pwcheck.style = 'color:blue';
      } else {
        pwcheck.innerText = '비밀번호가 다릅니다';
        pwcheck.style = 'color:red';
      }
    }
  }

  const handleidcheck = () => {
    var idcheck = document.getElementById('idcheck')
    if (idRef.current.value === '' || idRef.current.value === undefined) {
      alert('아이디를 입력하세요');
      idRef.current.focus();
      return false;
    }else{
      axios
      .post('http://localhost:8008/idcheck', {
        id: idRef.current.value,
      })
      .then((res) => {
        if (res.data[0].cnt === 1) {
          idcheck.innerText = '아이디 중복';
          idcheck.style = 'color:red';
        } else {
          idcheck.innerText = '아이디 사용가능';
          idcheck.style = 'color:blue';
        }
      })
      .catch((e) => {
        console.error(e);
      });
    }
  }

  const handleJoin = () => {
    if (idRef.current.value === '' || idRef.current.value === undefined) {
      alert('아이디를 입력하세요');
      idRef.current.focus();
      return false;
    } else {
      if (idRef.current.value.length > 8) {
        alert('아이디를 8자 이하로 입력하세요');
        idRef.current.focus();
        return;
      }
    }
    if (pw1Ref.current.value === '' || pw1Ref.current.value === undefined) {
      alert('비밀번호를 입력하세요');
      pw1Ref.current.focus();
      return false;
    } else {
      if (pw1Ref.current.value.length > 10) {
        alert('비밀번호를 10자 이하로 입력하세요');
        pw1Ref.current.focus();
        return;
      }
    }
    if (pw2Ref.current.value === '' || pw2Ref.current.value === undefined) {
      alert('확인용 비밀번호를 입력하세요');
      pw2Ref.current.focus();
      return false;
    } else {
      if (pw2Ref.current.value.length > 10) {
        alert('확인용 비밀번호를 10자 이하로 입력하세요');
        pw2Ref.current.focus();
        return;
      }
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

    var pwcheck = document.getElementById('pwcheck');
    var idcheck = document.getElementById('idcheck');

    if(idcheck.innerText === '아이디 사용가능' && pwcheck.innerText === '비밀번호 확인 완료'){
      axios
      .post('http://localhost:8008/join', {
        id: idRef.current.value,
        pw: pw1Ref.current.value,
        email: emailRef.current.value,
        name: nameRef.current.value,
        nickname: nicknameRef.current.value
      })
      .then((res) => {
        console.log('handleJoin =>', res);
        if (res.data.affectedRows === 1) {
          alert('회원가입이 되었습니다');
          navigate('/login');
        } else {
          alert('회원가입이 되지 않았습니다.');
          navigate('/join');
        }
      })
      .catch((e) => {
        console.error(e);
      });
    } else if(idcheck.innerText === '아이디 사용가능' && pwcheck.innerText !== '비밀번호 확인 완료'){
      alert('비밀번호 check 해주세요');
    }  else if(idcheck.innerText !== '아이디 사용가능' && pwcheck.innerText === '비밀번호 확인 완료'){
      alert('아이디 중복 체크 확인해주세요');
    } else {
      alert('아이디 중복 check, 비밀번호 check를 확인해주세요')
    }
  };

  return (
    <div className="Join" align="center">
      <h1 id='sign'>Sign Up</h1>
      <form>
        <div className="text-area">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="아이디를 입력해주세요"
            className="text_input"
            ref={idRef}
            defaultValue=""
            // minLength="8"
          />
          <div>
            <h8 id='idcheck'>아이디 중복 확인</h8>
            <input type='button' value="중복확인" onClick={handleidcheck} id='idcheckbutton'/> 
          </div>
          <div className="text-area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              className="text_input"
              ref={pw1Ref}
              defaultValue=""
              // minLength="10"
            />
          </div>
          <div className="text-area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="확인용 비밀번호 입력"
              className="text_input"
              ref={pw2Ref}
              defaultValue=""
              // minLength="10"
            />
          </div>
          <h8 id='pwcheck'>비밀번호 확인</h8>
          <input type='button' value="check" onClick={handlepwcheck} id='pwcheckbutton' /> 
          <div className="text-area">
            <input
              type="text"
              id="email"
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
              id="name"
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
              id="nick"
              name="nickname"
              placeholder="닉네임을 입력해주세요"
              className="text_input"
              ref={nicknameRef}
              defaultValue=""
            />
          </div>
          <input className="btn" id='signbtn' type="button" value="회원가입" onClick={handleJoin} />
        </div>
      </form>
    </div>
  );
};

export default Join;
