import { Carousel } from 'react-bootstrap';
import Map from '../MapApi/Map';
import '../FestivalDetail/festivalDetail.css';
import { useEffect, useState } from 'react';
import axios from '../../../node_modules/axios/index';
import { useLocation } from 'react-router-dom';
import { useNavigate } from '../../../node_modules/react-router-dom/index';

const RestaurantDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let get_r_contentid = '';
  // console.log(typeof get_r_contentid);

  useEffect(() => {
    get_r_contentid = location.state.get_r_contentid;
    resDetail();
    likeListCheck();
  }, []);

  const [restaurantD, setRestaurantD] = useState({
    r_contentid: '',
    r_title: '',
    r_mainimage: '',
    r_addr1: '',
    r_addr2: '',
    r_mapx: '',
    r_mapy: ''
  });

  const resDetail = (e) => {
    axios
      .post('http://localhost:8008/searchResDetail', { res_contentid: get_r_contentid })
      .then((res) => {
        const { data } = res;
        // console.log('resDetail =>', data);
        if (res.data.length > 0) {
          setRestaurantD({
            ...restaurantD,
            r_contentid: data[0].r_contentid,
            r_title: data[0].r_title,
            r_mainimage: data[0].r_mainimage,
            r_addr1: data[0].r_addr1,
            r_addr2: data[0].r_addr2,
            r_mapx: data[0].r_mapx,
            r_mapy: data[0].r_mapy
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  let res_addr = restaurantD.r_addr1 + restaurantD.r_addr2;
  const likeListAdd = (e) => {
    axios
      .post('http://localhost:8008/likeListAdd', {
        user_id: sessionStorage.getItem('id'),
        thumbnail: restaurantD.r_mainimage,
        title: restaurantD.r_title,
        addr: res_addr,
        content_id: restaurantD.r_contentid,
        startdate: '',
        enddate: '',
        sortation: 3
      })
      .then((res) => {
        const { data } = res;
        // console.log('likeListAdd =>', data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const likeListDelete = (e) => {
    axios
      .post('http://localhost:8008/likeListDelete', { content_id: restaurantD.r_contentid })
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
      .post('http://localhost:8008/searchLike', { content_id: get_r_contentid })
      .then((res) => {
        const { data } = res;
        // console.log('searchLike =>', data);
        if (data[0].cnt > 0) {
          setLikeListCnt(true);
        } else {
          setLikeListCnt(false);
        }
        // console.log(likeListCnt);
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
            <h2>{restaurantD.r_title}</h2>
            {/* <span>{restaurantD.r_addr1} {restaurantD.r_addr2}</span> */}
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
                    likeListDelete();
                    setLikeListCnt(false);
                  }}
                ></i>
              ) : (
                <i
                  className="bi bi-heart"
                  onClick={() => {
                    likeListAdd();
                    setLikeListCnt(true);
                  }}
                ></i>
              )}
            </h1>
          </td>
        </tr>
      </table>

      {/* 이미지 슬라이드 */}
      <div id="photo_Tab">
        <DarkVariantExample res_img={restaurantD.r_mainimage}></DarkVariantExample>
      </div>

      <div className="detail_div" id="detail_Tab">
        <strong>상세정보</strong>
        <hr style={{ height: '1px', background: 'black' }} />
        {/* <p style={{ fontSize: '13px' }}>상세 정보</p> */}
        {/* <div className="cont_more">
          <button type="button" className="btn_more">
            내용 더보기 +
          </button>
        </div> */}
        <ul>
          <li>
            <b className="detail_b">주소</b>
            <span className="detail_span">
              {restaurantD.r_addr1} {restaurantD.r_addr2}
            </span>
          </li>

          {/* <li>
            <b className="detail_b">전화번호</b>
            <span className="detail_span">
              010
              <div dangerouslySetInnerHTML={{ __html: festival.f_d_tel }}></div>{' '}
            </span>
          </li>
          <li>
            <b className="detail_b">홈페이지</b>
            <span className="detail_span">
              ㄹㅇ
              <div dangerouslySetInnerHTML={{ __html: festival.f_d_homepage }}></div>{' '}
            </span>
          </li> */}
        </ul>
      </div>

      {/* 지도 */}
      <br />
      <div id="map_Tab">
        <Map mapx={restaurantD.r_mapx} mapy={restaurantD.r_mapy}></Map>
      </div>

      <br />
    </>
  );
};

//이미지 슬라이드 컴포넌트
function DarkVariantExample({ res_img }) {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img src={res_img} className="d-block w-100 slide_img" alt="" />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default RestaurantDetail;
