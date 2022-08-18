import React, { useState } from 'react';
import { Button, Tab, Col, Nav, Row } from 'react-bootstrap';
import './mypage.css';

const Mypage = () => {
  let [menu, setMenu] = useState(false);

  return (
    <>
      <div className="profile">
        <table className="table">
          <tr>
            <td width="70%" style={{ textAlign: 'center' }}>
              {/* 프로필 사진이 없을 때 */}
              <i class="bi bi-person-circle" style={{ lineHeight: '100px', fontSize: '100px' }}></i>
              {/* 프로필 사진이 있을 때
        <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} /> */}
            </td>
          </tr>
        </table>
      </div>

      <div width="100%" align="center" style={{ padding: '10px' }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column" style={{ background: 'white' }}>
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <span
                      style={{ fontSize: '20px' }}
                      onClick={() => {
                        setMenu(!menu);
                      }}
                    >
                      <i className="bi bi-heart"></i>&nbsp;찜
                    </span>
                    {/* // <span
                      //   style={{ fontSize: '20px' }}
                      //   onClick={() => {
                      //     setMenu(!menu);
                      //   }}
                      // >
                      //   <i className="bi bi-heart-fill"></i>&nbsp;찜
                      // </span> */}
                  </Nav.Link>
                  <Nav.Link eventKey="second">
                    <span style={{ fontSize: '20px' }}>
                      <i class="bi bi-journal"></i>&nbsp;내 글
                    </span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <ul className="list-group list-group-flush">
                    <LikeRes />
                    <LikeRes />
                    <LikeRes />
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ul className="list-group list-group-flush">
                    <MyBoard />
                    <MyBoard />
                    <MyBoard />
                  </ul>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};

function LikeRes() {
  return (
    <li className="list-group-item inline">
      <img className="list_img" />
      <span className="block">
        <b style={{ marginLeft: '10px' }}>맛집 이름</b>
      </span>
      <span className="block">
        <p style={{ fontSize: '12px', marginLeft: '60px' }}>맛집 설명</p>{' '}
      </span>
    </li>
  );
}

function MyBoard() {
  return (
    <li className="list-group-item inline">
      <img className="list_img" />
      <span className="block">
        <b style={{ marginLeft: '10px' }}>제목</b>
      </span>
      <span className="block">
        <p style={{ fontSize: '12px', marginLeft: '60px' }}>작성일</p>{' '}
      </span>
    </li>
  );
}

export default Mypage;
