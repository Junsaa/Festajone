/* global kakao */
import React, { useEffect, useState } from 'react';
import Map from '../MapApi/Map';
import './festivalDetail.css';
import { Carousel } from 'react-bootstrap';
import axios from '../../../node_modules/axios/index';

const FestivalDetail = () => {
  const [festival, setFestival] = useState({
    f_d_title: '',
    f_d_tel: '',
    f_d_telname: '',
    f_d_homepage: '',
    f_d_image: '',
    f_d_addr: '',
    f_d_mapx: '',
    f_d_mapy: '',
    f_d_startdate: '',
    f_d_enddate: '',
    f_d_pverview: '',
    sortation: ''
  });

  const festivalDetail = (e) => {
    axios
      .post('http://localhost:8008/searchFestivalDetail')
      .then((res) => {
        const { data } = res;
        console.log('festivalDetail =>', data);
        if (res.data.length > 0) {
          setFestival({
            ...festival,
            f_d_title: data[0].f_d_title,
            f_d_tel: data[0].f_d_tel,
            f_d_telname: data[0].f_d_telname,
            f_d_homepage: data[0].f_d_homepage,
            f_d_image: data[0].f_d_image,
            f_d_addr: data[0].f_d_addr,
            f_d_mapx: data[0].f_d_mapx,
            f_d_mapy: data[0].f_d_mapy,
            f_d_startdate: data[0].f_d_startdate,
            f_d_enddate: data[0].f_d_enddate,
            f_d_pverview: data[0].f_d_pverview,
            sortation: data[0].sortation
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    festivalDetail();
  }, []);

  return (
    <>
      <table className="table">
        <tr>
          <td style={{ textAlign: 'center' }}>
            <h2>{festival.f_d_title}</h2>
            <span>
              {festival.f_d_telname} &nbsp;|&nbsp; {festival.f_d_startdate}
            </span>
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
        <DarkVariantExample fes_img={festival.f_d_image}></DarkVariantExample>
      </div>

      <div className="detail_div" id="detail_Tab">
        <strong>상세정보</strong>
        <hr style={{ height: '1px', background: 'black' }} />
        <p style={{ fontSize: '13px' }}>{festival.f_d_pverview}</p>
        {/* <div className="cont_more">
          <button type="button" className="btn_more">
            내용 더보기 +
          </button>
        </div> */}
        <br />
        <ul>
          <li>
            <b className="detail_b">시작일</b>
            <span className="detail_span">{festival.f_d_startdate}</span>
          </li>
          <li>
            <b className="detail_b">종료일</b>
            <span className="detail_span">{festival.f_d_enddate}</span>
          </li>
          <li>
            <b className="detail_b">행사장소</b>
            <span className="detail_span"> {festival.f_d_addr}</span>
          </li>

          <li>
            <b className="detail_b">주관</b>
            <span className="detail_span"> {festival.f_d_telname}</span>
          </li>
          <li>
            <b className="detail_b">전화번호</b>
            <span className="detail_span">
              <div dangerouslySetInnerHTML={{ __html: festival.f_d_tel }}></div>{' '}
            </span>
          </li>
          <li>
            <b className="detail_b">홈페이지</b>
            <span className="detail_span">
              <div dangerouslySetInnerHTML={{ __html: festival.f_d_homepage }}></div>{' '}
            </span>
          </li>
        </ul>
      </div>

      {/* 지도 */}
      <br />
      <div id="map_Tab">
        <Map mapx={festival.f_d_mapx} mapy={festival.f_d_mapy}></Map>
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
function DarkVariantExample({ fes_img }) {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img src={fes_img} className="d-block w-100 slide_img" alt="" />
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
