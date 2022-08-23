import { useRef, useState } from 'react';
import { Button, Form, Badge } from 'react-bootstrap';
import axios from '../../../node_modules/axios/index';

const UpdateUser = () => {
  let [modal, setModal] = useState(0);

  const passwordRef = useRef();
  let [pwboolean, setPwboolean] = useState(0);
  const getPassword = (e) => {
    axios
      .post('http://localhost:8008/pwcheck', { user_id: sessionStorage.getItem('id') })
      .then((res) => {
        const { data } = res;
        console.log('pwcheck =>', data);
        if (passwordRef.current.value == data[0].user_pw) {
          setPwboolean(1);
        } else {
          setPwboolean(3);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <span
          onClick={() => {
            setModal(1);
          }}
        >
          비밀번호변경
        </span>
        &nbsp;&nbsp;
        <span
          onClick={() => {
            setModal(2);
          }}
        >
          정보수정
        </span>
      </div>
      {modal === 1 ? (
        <PasswordChange pwboolean={pwboolean} getPassword={getPassword} passwordRef={passwordRef} />
      ) : null}
      {modal === 2 ? (
        <InfoUpdate pwboolean={pwboolean} getPassword={getPassword} passwordRef={passwordRef} />
      ) : null}
    </>
  );
};

const PasswordChange = ({ pwboolean, getPassword, passwordRef }) => {
  const updatePwRef = useRef();
  const setPassword = (e) => {
    e.preventDefault();
    if (updatePwRef.current.value === '' || updatePwRef.current.value === undefined) {
      updatePwRef.current.focus();
      return false;
    } else {
      axios
        .post('http://localhost:8008/passwordupdate', {
          user_id: sessionStorage.getItem('id'),
          user_pw: updatePwRef.current.value
        })
        .then((res) => {
          const { data } = res;
          console.log('passwordupdate =>', data);
          //비밀번호 성공 안내 필요
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  return (
    <>
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              현재 비밀번호
              <Badge
                bg="secondary"
                style={{ marginLeft: '5px' }}
                onClick={() => {
                  getPassword();
                }}
              >
                pw check
              </Badge>
            </Form.Label>
            <Form.Control type="password" ref={passwordRef} placeholder="Password" />
            {pwboolean === 0 && (
              <Form.Text className="text-muted">비밀번호를 입력해주세요.</Form.Text>
            )}
            {pwboolean === 1 && (
              <>
                <Form.Text className="text-muted">
                  비밀번호가 일치합니다. 변경할 비밀번호를 입력해 주세요.
                </Form.Text>
                <br />
                <br />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>변경할 비밀번호</Form.Label>
                  <Form.Control type="password" ref={updatePwRef} placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
                <Button variant="primary" type="submit" onClick={setPassword}>
                  변경
                </Button>
              </>
            )}
            {pwboolean === 3 && (
              <Form.Text className="text-muted">
                비밀번호가 일치하지 않습니다. 비밀번호를 다시 한번 확인해 주세요.
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

const InfoUpdate = ({ pwboolean, getPassword, passwordRef }) => {
  const updateNameRef = useRef();
  const updateNicknameRef = useRef();
  const updateEmailRef = useRef();
  const updateImgRef = useRef();

  const setUserInfo = (e) => {
    axios
      .post('http://localhost:8008/updateuser', {
        user_id: sessionStorage.getItem('id'),
        user_name: updateNameRef.current.value,
        user_nickname: updateNicknameRef.current.value,
        user_email: updateEmailRef.current.value,
        profile_image: ''
      })
      .then((res) => {
        const { data } = res;
        console.log('updateuser =>', data);
        //비밀번호 성공 안내 필요
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              현재 비밀번호
              <Badge
                bg="secondary"
                style={{ marginLeft: '5px' }}
                onClick={() => {
                  getPassword();
                }}
              >
                pw check
              </Badge>
            </Form.Label>
            <Form.Control type="password" placeholder="Password" ref={passwordRef} />
            {pwboolean === 0 && (
              <Form.Text className="text-muted">비밀번호를 입력해주세요.</Form.Text>
            )}
            {pwboolean === 1 && (
              <>
                <Form.Text className="text-muted">
                  비밀번호가 일치합니다. 변경할 정보를 입력해 주세요.
                </Form.Text>
                <br />
                <br />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>이름</Form.Label>
                  <Form.Control type="text" placeholder="name" ref={updateNameRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>이메일</Form.Label>
                  <Form.Control type="text" placeholder="email" ref={updateEmailRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>닉네임</Form.Label>
                  <Form.Control type="text" placeholder="nickname" ref={updateNicknameRef} />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
                <Button variant="primary" type="submit" onClick={setUserInfo}>
                  Submit
                </Button>
              </>
            )}
            {pwboolean === 3 && (
              <Form.Text className="text-muted">
                비밀번호가 일치하지 않습니다. 비밀번호를 다시 한번 확인해 주세요.
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default UpdateUser;
