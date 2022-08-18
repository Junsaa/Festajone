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
                    {menu ? (
                      <span style={{ fontSize: '20px' }}>
                        <i className="bi bi-heart-fill"></i>&nbsp;찜
                      </span>
                    ) : (
                      <span
                        style={{ fontSize: '20px' }}
                        onClick={() => {
                          setMenu(!menu);
                        }}
                      >
                        <i className="bi bi-heart"></i>&nbsp;찜
                      </span>
                    )}
                  </Nav.Link>
                  <Nav.Link eventKey="second">
                    {menu ? (
                      <span
                        style={{ fontSize: '20px' }}
                        onClick={() => {
                          setMenu(!menu);
                        }}
                      >
                        {/* <i class="bi bi-clipboard-minus"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-clipboard-minus"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                          />
                          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                        </svg>
                        &nbsp;내 글
                      </span>
                    ) : (
                      <span style={{ fontSize: '20px' }}>
                        {/* <i class="bi bi-clipboard-minus-fill"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-clipboard-minus-fill"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
                          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1ZM6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1Z" />
                        </svg>
                        &nbsp;내 글
                      </span>
                    )}
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
