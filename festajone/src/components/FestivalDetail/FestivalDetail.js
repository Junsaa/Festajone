/* global kakao */
//npm i bootstrap-icons
import React from 'react';
import Map from '../MapApi/Map';
import './festivalDetail.css';
import { Card } from 'react-bootstrap';

const FestivalDetail = () => {
  return (
    <>
      <table width="100%" height="100px" align="center" style={{ padding: '30px' }}>
        <tr>
          <td style={{ textAlign: 'center' }}>
            <h2>축제 이름</h2>
            <span>개최 지역 &nbsp;|&nbsp; 개최 일자</span>
          </td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
              style={{ align: 'right' }}
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </td>
        </tr>
      </table>

      {/* 이미지가 이미지마다 크기가 다르면? */}
      <div
        width="100%"
        height="100px"
        align="center"
        style={{ backgroundColor: '#eceeef', padding: '50px' }}
      >
        이미지
      </div>

      <div width="100%" height="400px" style={{ padding: '20px' }}>
        <strong>상세정보</strong>
        <hr style={{ height: '1px', background: 'black' }} />
        {/* <Card>
          <Card.Body> */}
        <ul>
          <li>
            <b className="b">시작일</b>
            <span className="span">2022.09.01</span>
          </li>
          <li>
            <b className="b">종료일</b>
            <span className="span">2022.09.01</span>
          </li>
          <li>
            <b className="b">전화번호</b>
            <span className="span"> 043-830-3463</span>
          </li>
          <li>
            <b className="b">주소</b>
            <span className="span"> 충청북도 괴산군 임꺽정로 113</span>
          </li>
        </ul>
        {/* </Card.Body>
        </Card> */}
      </div>

      {/* 지도 */}
      <br />
      <Map></Map>
      <br />

      <div width="100%" height="400px" style={{ padding: '20px' }}>
        <strong>주변 맛집</strong>
        <hr style={{ height: '1px', background: 'black' }} />
        <ul class="list-group list-group-flush">
          <li class="list-group-item" style={{ display: 'inline' }}>
            <img style={{ width: '50px', height: '50px', float: 'left' }} />
            <span style={{ display: 'block' }}>
              <b style={{ marginLeft: '10px' }}>맛집 이름</b>
            </span>
            <span style={{ display: 'block' }}>
              <p style={{ fontSize: '12px', marginLeft: '60px' }}> 맛집 설명</p>{' '}
            </span>
          </li>
          <li class="list-group-item" style={{ display: 'inline' }}>
            <img style={{ width: '50px', height: '50px', float: 'left' }} />
            <span style={{ display: 'block' }}>
              <b style={{ marginLeft: '10px' }}>맛집 이름</b>
            </span>
            <span style={{ display: 'block' }}>
              <p style={{ fontSize: '12px', marginLeft: '60px' }}> 맛집 설명</p>{' '}
            </span>
          </li>
          <li class="list-group-item" style={{ display: 'inline' }}>
            <img style={{ width: '50px', height: '50px', float: 'left' }} />
            <span style={{ display: 'block' }}>
              <b style={{ marginLeft: '10px' }}>맛집 이름</b>
            </span>
            <span style={{ display: 'block' }}>
              <p style={{ fontSize: '12px', marginLeft: '60px' }}> 맛집 설명</p>{' '}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FestivalDetail;
