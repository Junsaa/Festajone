import { useEffect, useRef, useState } from 'react';
import { Button, Form, Badge, Modal } from 'react-bootstrap';
import axios from '../../../node_modules/axios/index';

const UpdateUser = () => {
  let [modal, setModal] = useState(0);

  const passwordRef1 = useRef();
  const passwordRef2 = useRef();
  let [pwboolean1, setPwboolean1] = useState(0);
  let [pwboolean2, setPwboolean2] = useState(0);

  const getPassword1 = (e) => {
    axios
      .post('http://localhost:8008/pwcheck', { user_id: sessionStorage.getItem('id') })
      .then((res) => {
        const { data } = res;
        // console.log('pwcheck =>', data);
        if (passwordRef1.current.value == data[0].user_pw) {
          setPwboolean1(1);
        } else {
          setPwboolean1(3);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const getPassword2 = (e) => {
    axios
      .post('http://localhost:8008/pwcheck', { user_id: sessionStorage.getItem('id') })
      .then((res) => {
        const { data } = res;
        // console.log('pwcheck =>', data);
        if (passwordRef2.current.value == data[0].user_pw) {
          setPwboolean2(1);
        } else {
          setPwboolean2(3);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <Form>
        {['radio'].map((type) => (
          <div
            key={`inline-${type}`}
            className="mb-3"
            style={{ textAlign: 'center', padding: '20px' }}
          >
            <Form.Check
              inline
              label="비밀번호변경"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              onClick={() => {
                setModal(1);
              }}
            />
            <Form.Check
              inline
              label="사용자 정보 수정"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              onClick={() => {
                setModal(2);
              }}
            />
          </div>
        ))}
      </Form>

      {/* <div style={{ padding: '20px' }}>
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
      </div> */}
      {modal === 1 ? (
        <PasswordChange
          pwboolean={pwboolean1}
          getPassword={getPassword1}
          passwordRef={passwordRef1}
          setmodal={setModal}
        />
      ) : null}
      {modal === 2 ? (
        <InfoUpdate
          pwboolean={pwboolean2}
          getPassword={getPassword2}
          passwordRef={passwordRef2}
          setmodal={setModal}
        />
      ) : null}
    </>
  );
};

const PasswordChange = ({ pwboolean, getPassword, passwordRef, setmodal }) => {
  const updatePwRef = useRef();

  const setPassword = (e) => {
    // e.preventDefault();
    if (updatePwRef.current.value === '' || updatePwRef.current.value === undefined) {
      updatePwRef.current.focus();
      return false;
    }
    axios
      .post('http://localhost:8008/passwordupdate', {
        user_id: sessionStorage.getItem('id'),
        user_pw: updatePwRef.current.value
      })
      .then((res) => {
        const { data } = res;
        console.log('passwordupdate =>', data);
        alert('비밀번호 수정 성공');
        setmodal(0);
      })
      .catch((e) => {
        console.error(e);
        alert('비밀번호 수정 실패');
      });
  };

  return (
    <>
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              비밀번호
              <Badge
                bg="secondary"
                style={{ marginLeft: '5px' }}
                onClick={() => {
                  getPassword();
                }}
              >
                비밀번호 확인
              </Badge>
            </Form.Label>
            <Form.Control type="password" ref={passwordRef} placeholder="현재 비밀번호" />
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
                  <Form.Label>새로운 비밀번호</Form.Label>
                  <Form.Control
                    type="password"
                    ref={updatePwRef}
                    placeholder="변경할 비밀번호를 입력해 주세요."
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
                <div align="center">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => {
                      setPassword();
                    }}
                  >
                    비밀번호 변경
                  </Button>
                </div>
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

const InfoUpdate = ({ pwboolean, getPassword, passwordRef, setmodal }) => {
  const updateNameRef = useRef();
  const updateNicknameRef = useRef();
  const updateEmailRef = useRef();

  let [image_name, setImage_name] = useState('');

  function onImage(e) {
    setImage_name(e.target.files[0]);
  }

  const [user, setUser] = useState({
    user_name: '',
    user_nickname: '',
    user_email: '',
    profile_image: ''
  });
  const getUser = (e) => {
    axios
      .post('http://localhost:8008/user_login', { user_id: sessionStorage.getItem('id') })
      .then((res) => {
        const { data } = res;
        // console.log('user_login =>', data);
        setUser({
          ...user,
          user_name: data[0].user_name,
          user_nickname: data[0].user_nickname,
          user_email: data[0].user_email,
          profile_image: data[0].profile_image
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const setUserInfo = (e) => {
    // e.preventDefault();
    if (updateNameRef.current.value === '' || updateNameRef.current.value === undefined) {
      updateNameRef.current.value = user.user_name;
    }
    if (updateNicknameRef.current.value === '' || updateNicknameRef.current.value === undefined) {
      updateNicknameRef.current.value = user.user_nickname;
    }
    if (updateEmailRef.current.value === '' || updateEmailRef.current.value === undefined) {
      updateEmailRef.current.value = user.user_email;
    }
    // if (image_name === '' || image_name === undefined) {
    //   setImage_name(user.profile_image);
    // }

    console.log(
      updateNameRef.current.value,
      updateNicknameRef.current.value,
      updateEmailRef.current.value,
      image_name
    );

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    };

    axios
      .post(
        'http://localhost:8008/updateuser',
        {
          user_id: sessionStorage.getItem('id'),
          user_name: updateNameRef.current.value,
          user_nickname: updateNicknameRef.current.value,
          user_email: updateEmailRef.current.value,
          user_image: user.profile_image,
          image: image_name
        },
        config
      )
      .then((res) => {
        const { data } = res;
        console.log('updateuser =>', data);
        alert('정보 수정 성공');
        setmodal(0);
      })
      .catch((e) => {
        console.error(e);
        alert('정보 수정 실패');
      });
  };

  return (
    <>
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              비밀번호
              <Badge
                bg="secondary"
                style={{ marginLeft: '5px' }}
                onClick={() => {
                  getPassword();
                }}
              >
                비밀번호 확인
              </Badge>
            </Form.Label>
            <Form.Control type="password" placeholder="현재 비밀번호" ref={passwordRef} />
            {pwboolean === 0 && (
              <Form.Text className="text-muted">비밀번호를 입력해주세요.</Form.Text>
            )}
            {pwboolean === 1 && (
              <>
                <Form.Text className="text-muted">
                  비밀번호가 일치합니다. 변경할 정보를 입력해 주세요. 입력하지 않은 정보는 그대로
                  유지됩니다.
                </Form.Text>
                <br />
                <br />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>이름</Form.Label>
                  <Form.Control type="text" placeholder={user.user_name} ref={updateNameRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>이메일</Form.Label>
                  <Form.Control type="text" placeholder={user.user_email} ref={updateEmailRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>닉네임</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={user.user_nickname}
                    ref={updateNicknameRef}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>프로필 사진</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={onImage}
                    required={false}
                  />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
                <div align="center">
                  <Button variant="primary" type="button" onClick={setUserInfo}>
                    정보 수정
                  </Button>
                </div>
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
