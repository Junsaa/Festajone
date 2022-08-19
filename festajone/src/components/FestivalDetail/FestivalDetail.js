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
              <i className="bi bi-heart"></i>
              {/* 채워진 하트 <i className="bi bi-heart-fill"></i> */}
            </h1>
          </td>
        </tr>
      </table>

      <div className="detail_tab menuFixed">
        <ul>
          <li className="select_tab on" id="photoTab">
            <a href="#photo_Tab">
              <span>사진보기</span>
            </a>
          </li>
          <li className="select_tab" id="detailTab">
            <a href="#detail_Tab">
              <span>상세정보</span>
            </a>
          </li>
          <li className="select_tab" id="mapTab">
            <a href="#map_Tab">
              <span>지도보기</span>
            </a>
          </li>
          <li className="select_tab" id="aroundResTab">
            <a href="#aroundRes_Tab">
              <span>주변맛집</span>
            </a>
          </li>
        </ul>
      </div>

      {/* 이미지 슬라이드 */}
      <div id="photo_Tab">
        <DarkVariantExample></DarkVariantExample>
      </div>

      <div className="detail_div" id="detail_Tab">
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
      <div id="map_Tab">
        <Map></Map>
      </div>

      <br />

      <div className="detail_div" id="aroundRes_Tab">
        <strong>주변 맛집</strong>
        <hr style={{ height: '1px', background: 'black' }} />
        <ul className="list-group list-group-flush">
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
    <li className="list-group-item inline">
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
