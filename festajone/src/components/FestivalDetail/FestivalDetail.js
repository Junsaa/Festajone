/* global kakao */
import React from 'react';
import Map from '../MapApi/Map';
import './festivalDetail.css';
import { Carousel } from 'react-bootstrap';

const FestivalDetail = () => {
  return (
    <>
      <table className="table">
        <tr>
          <td style={{ textAlign: 'center' }}>
            <h2>축제 이름</h2>
            <span>개최 지역 &nbsp;|&nbsp; 개최 일자</span>
          </td>
          <td>
            <h1>
              <i class="bi bi-heart"></i>
              {/* 채워진 하트 <i class="bi bi-heart-fill"></i> */}
            </h1>
          </td>
        </tr>
      </table>

      {/* 이미지 슬라이드 */}
      <DarkVariantExample></DarkVariantExample>

      <div className="detail_div">
        <strong>상세정보</strong>
        <hr style={{ height: '1px', background: 'black' }} />

        <ul>
          <li>
            <b className="detail_b">시작일</b>
            <span className="detail_span">2022.09.01</span>
          </li>
          <li>
            <b className="detail_b">종료일</b>
            <span className="detail_span">2022.09.01</span>
          </li>
          <li>
            <b className="detail_b">전화번호</b>
            <span className="detail_span"> 043-830-3463</span>
          </li>
          <li>
            <b className="detail_b">주소</b>
            <span className="detail_span"> 충청북도 괴산군 임꺽정로 113</span>
          </li>
        </ul>
      </div>

      {/* 지도 */}
      <br />
      <Map></Map>
      <br />

      <div className="detail_div">
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

//주변 맛집 리스트 컴포넌트
function AroundResCompo() {
  return (
    <li class="list-group-item inline">
      <img className="list_img" />
      <span className="block">
        <b style={{ marginLeft: '10px' }}>맛집 이름</b>
      </span>
      <span className="block">
        <p style={{ fontSize: '12px', marginLeft: '60px' }}> 맛집 설명</p>{' '}
      </span>
    </li>
  );
}

//이미지 슬라이드 컴포넌트
function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100 slide_img" alt="" />
        <Carousel.Caption>
          <h5>First slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 slide_img" alt="" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 slide_img" alt="" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FestivalDetail;
