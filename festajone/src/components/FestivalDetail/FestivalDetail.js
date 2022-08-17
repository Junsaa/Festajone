/* global kakao */
//npm i bootstrap-icons
import React from 'react';
import Map from '../MapApi/Map';
import './festivalDetail.css';
import { Card, Carousel } from 'react-bootstrap';

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
            <h1>
              <i class="bi bi-heart"></i>
            </h1>
          </td>
        </tr>
      </table>

      {/* 이미지가 이미지마다 크기가 다르면? */}
      <DarkVariantExample></DarkVariantExample>

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
          <AroundResCompo></AroundResCompo>
          <AroundResCompo></AroundResCompo>
          <AroundResCompo></AroundResCompo>
        </ul>
      </div>
    </>
  );
};

function AroundResCompo() {
  return (
    <li class="list-group-item" style={{ display: 'inline' }}>
      <img style={{ width: '50px', height: '50px', float: 'left' }} />
      <span style={{ display: 'block' }}>
        <b style={{ marginLeft: '10px' }}>맛집 이름</b>
      </span>
      <span style={{ display: 'block' }}>
        <p style={{ fontSize: '12px', marginLeft: '60px' }}> 맛집 설명</p>{' '}
      </span>
    </li>
  );
}

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" alt="" style={{ width: '90%', height: '200px' }} />
        <Carousel.Caption>
          <h5>First slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="" style={{ width: '90%', height: '200px' }} />
        <Carousel.Caption>
          <h5>Second slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="" style={{ width: '90%', height: '200px' }} />
        <Carousel.Caption>
          <h5>Third slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FestivalDetail;
