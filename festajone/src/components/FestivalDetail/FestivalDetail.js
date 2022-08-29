/* global kakao */
import React, { useEffect, useState } from 'react';
import Map from '../MapApi/Map';
import './festivalDetail.css';
import { Carousel } from 'react-bootstrap';
import axios from '../../../node_modules/axios/index';
import { useLocation, useNavigate } from '../../../node_modules/react-router-dom/index';
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';

const FestivalDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let get_contentid = '';
  let get_areacode = '';
  // console.log(get_contentid, get_areacode);
  useEffect(() => {
    get_contentid = location.state.contentid;
    get_areacode = location.state.areacode;
    // console.log(get_contentid, get_areacode);
    festivalDetail();
    festivalImgs();
    recommendRestaurant();
    likeListCheck();
  }, []);

  const [festival, setFestival] = useState({
    f_d_contentid: '',
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
    sortation: '',
    f_d_areacode: ''
  });

  const [fesImg, setFesImg] = useState([]);

  const [recommendRes, setRecommendRes] = useState([]);

  const festivalDetail = (e) => {
    axios
      .post('http://localhost:8008/searchFestivalDetail', { content_id: get_contentid })
      .then((res) => {
        const { data } = res;
        console.log('festivalDetail =>', data);
        if (res.data.length > 0) {
          setFestival({
            ...festival,
            f_d_contentid: data[0].f_d_contentid,
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
            f_d_areacode: data[0].f_d_areacode,
            sortation: data[0].sortation
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const festivalImgs = (e) => {
    axios
      .post('http://localhost:8008/searchFestivalImg', { contentid: get_contentid })
      .then((res) => {
        const { data } = res;
        console.log('searchFestivalImg =>', data);
        if (res.data.length > 0) {
          for (var i = 0; i < res.data.length; i++) {
            fesImg.splice(i, 0, data[i].image_originimgurl);
          }
        }
        setFesImg(fesImg);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const recommendRestaurant = (e) => {
    axios
      .post('http://localhost:8008/recommendRes', { areacode: get_areacode })
      .then((res) => {
        const { data } = res;
        console.log('recommendRes =>', data);
        if (res.data.length > 0) {
          for (var i = 0; i < res.data.length; i++) {
            recommendRes.splice(i, 0, data[i]);
          }
        }
        setRecommendRes(recommendRes);
        // console.log(recommendRes);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const likeListAdd = (e) => {
    axios
      .post('http://localhost:8008/likeListAdd', {
        user_id: sessionStorage.getItem('id'),
        thumbnail: festival.f_d_image,
        title: festival.f_d_title,
        addr: festival.f_d_addr,
        content_id: festival.f_d_contentid,
        startdate: festival.f_d_startdate,
        enddate: festival.f_d_enddate,
        sortation: festival.sortation,
        areacode: festival.f_d_areacode
      })
      .then((res) => {
        const { data } = res;
        console.log('likeListAdd =>', data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const likeListDelete = (e) => {
    axios
      .post('http://localhost:8008/likeListDelete', { content_id: festival.f_d_contentid })
      .then((res) => {
        const { data } = res;
        console.log('likeListDelete =>', data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  let [likeListCnt, setLikeListCnt] = useState();
  const likeListCheck = (e) => {
    axios
      .post('http://localhost:8008/searchLike', { content_id: get_contentid })
      .then((res) => {
        const { data } = res;
        console.log('searchLike =>', data);
        if (data[0].cnt > 0) {
          setLikeListCnt(true);
        } else {
          setLikeListCnt(false);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

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
              {sessionStorage.getItem('id') === '' ||
              sessionStorage.getItem('id') === undefined ||
              sessionStorage.getItem('id') === null ? (
                <i
                  className="bi bi-heart"
                  onClick={() => {
                    alert('로그인을 해주세요');
                    navigate('/login');
                    //로그인 페이지 연결????
                  }}
                ></i>
              ) : likeListCnt ? (
                <i
                  className="bi bi-heart-fill"
                  onClick={() => {
                    setLikeListCnt(false);
                    likeListDelete();
                  }}
                ></i>
              ) : (
                <i
                  className="bi bi-heart"
                  onClick={() => {
                    setLikeListCnt(true);
                    likeListAdd();
                  }}
                ></i>
              )}
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
      <div id="photo_Tab" style={{ textAlign: '-webkit-center' }}>
        <DarkVariantExample fes_img={festival.f_d_image} fesImgs={fesImg}></DarkVariantExample>
      </div>

      <div className="detail_div" id="detail_Tab">
        <strong>상세정보</strong>
        <hr style={{ height: '1px', background: 'black' }} />
        <div dangerouslySetInnerHTML={{ __html: festival.f_d_pverview }}>
          {/* <p style={{ fontSize: '13px' }}></p> */}
        </div>{' '}
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
          {recommendRes === [] || recommendRes === undefined || recommendRes.length === 0
            ? null
            : recommendRes.map(function (res, i) {
                return <AroundResCompo recoRes={res} key={i}></AroundResCompo>;
              })}
        </ul>
      </div>
    </>
  );
};

//주변 맛집 리스트 컴포넌트
function AroundResCompo({ recoRes }) {
  // console.log(recoRes);
  var navigate = useNavigate();
  const goResDetail = () => {
    navigate('/restaurantdetail', {
      state: { get_r_contentid: recoRes.r_contentid, title: recoRes.r_title }
    });
  };
  return (
    <li className="list-group-item inline">
      {recoRes.r_mainimage === '' || recoRes.r_mainimage === undefined ? (
        <div className="list_img" align="center" style={{ fontSize: 'xx-large' }}>
          <i className="bi bi-image" onClick={goResDetail}></i>
        </div>
      ) : (
        <img className="list_img" src={recoRes.r_mainimage} onClick={goResDetail} />
      )}

      <span className="block" onClick={goResDetail}>
        <b style={{ marginLeft: '10px' }}>{recoRes.r_title}</b>
      </span>
      <span className="block">
        <p style={{ fontSize: '12px', marginLeft: '60px' }}>
          {' '}
          {recoRes.r_addr1} {recoRes.r_addr2}
        </p>{' '}
      </span>
    </li>
  );
}

//이미지 슬라이드 컴포넌트
function DarkVariantExample({ fes_img, fesImgs }) {
  // console.log(fesImgs);
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img src={fes_img} className="d-block w-100 slide_img" alt="" />
      </Carousel.Item>
      {fesImgs === [] || fesImgs === undefined
        ? null
        : fesImgs.map(function (img, i) {
            return (
              <Carousel.Item key={i}>
                <img src={img} className="d-block w-100 slide_img" alt="" />
              </Carousel.Item>
            );
          })}

      {/* <Carousel.Item>
        <img className="d-block w-100 slide_img" alt="" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default FestivalDetail;
