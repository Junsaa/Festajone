import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const UpdateUser = () => {
  let [modal, setModal] = useState(0);

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
      {modal === 1 ? <PasswordChange /> : null}
      {modal === 2 ? <InfoUpdate /> : null}
    </>
  );
};

const PasswordChange = () => {
  return (
    <>
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>원래 비밀번호</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">일치여부</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>변경할 비밀번호</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

const InfoUpdate = () => {
  return (
    <>
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">일치여부 등</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="text" placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>닉네임</Form.Label>
            <Form.Control type="text" placeholder="nickname" />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateUser;
