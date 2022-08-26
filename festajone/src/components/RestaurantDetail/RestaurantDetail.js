import { Carousel } from 'react-bootstrap';
import Map from '../MapApi/Map';
import '../FestivalDetail/festivalDetail.css';
import { useEffect, useMemo, useReducer, useState } from 'react';
import axios from '../../../node_modules/axios/index';
import { useLocation } from 'react-router-dom';
import { useNavigate } from '../../../node_modules/react-router-dom/index';

const RestaurantDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let get_r_contentid = '';
  let get_r_title = '';
  // console.log(typeof get_r_contentid);

  const [blogitems, setblogItems] = useState([]);
  const [imageitems, setimageItems] = useState([]);

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

  const get_api_blog = (e) => {
    axios
      .get('http://localhost:8008/search/blog', { params: { query: get_r_title } })
      .then((res) => {
        const { data } = res;
        // console.log('get_api_blog =>', data);
        if (res.data.items.length > 0) {
          for (var i = 0; i < res.data.items.length; i++) {
            blogitems.splice(i, 0, data.items[i]);
          }
        }
        setblogItems(blogitems);
        // console.log('blogitems : ', blogitems, typeof blogitems);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const get_api_image = (e) => {
    axios
      .get('http://localhost:8008/search/image', { params: { query: get_r_title } })
      .then((res) => {
        const { data } = res;
        // console.log('get_api image =>', data);
        // console.log(typeof data);
        // console.log(res.data.items.length);
        if (res.data.items.length > 0) {
          for (var i = 0; i < res.data.items.length; i++) {
            imageitems.push(data.items[i].thumbnail);
          }
        }
        setimageItems(imageitems);
        // console.log('imageitems : ', imageitems, typeof imageitems);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    get_r_contentid = location.state.get_r_contentid;
    get_r_title = location.state.title;
    resDetail();
    likeListCheck();
    get_api_blog();
    get_api_image();
  }, []);

  return (
    <>
      <table className="table">
        <tr>
          {/* <td style={{ textAlign: 'center' }}>
            <img src={restaurantD.r_mainimage} style={{ width: '150px', height: '150px' }} />
          </td> */}
          <td style={{ textAlign: 'center', padding: '20px' }}>
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
            <a href="#blog_Tab">
              <span>블로그 후기</span>
            </a>
          </li>
        </ul>
      </div>

      {/* 이미지 슬라이드 */}
      <div id="photo_Tab">
        <DarkVariantExample
          res_img={restaurantD.r_mainimage}
          imageitems={imageitems}
        ></DarkVariantExample>
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
      <div className="detail_div" id="blog_Tab">
        <strong>블로그 후기</strong>
        <hr style={{ height: '1px', background: 'black' }} />
        <ul className="list-group list-group-flush">
          {blogitems === [] || blogitems === undefined || blogitems.length === 0 || blogitems === {}
            ? null
            : blogitems.map(function (b, i) {
                return <BlogReview blog={b} key={i}></BlogReview>;
              })}
        </ul>
      </div>
    </>
  );
};

function BlogReview({ blog }) {
  // console.log(blog);
  return (
    <li className="list-group-item inline">
      <span className="block">
        <b>
          <a href={blog.link} target="_blank">
            <div dangerouslySetInnerHTML={{ __html: blog.title }}></div>
            {/* {blog.title.replace(/<[^>]*>?/g, '')}{' '} */}
          </a>
        </b>
      </span>
      <span className="block">
        <p style={{ fontSize: '12px' }}>
          <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
          {/* {blog.description.replace(/<[^>]*>?/g, '')}*/}
        </p>{' '}
        <p style={{ textAlign: 'right' }}>게시일 : {blog.postdate}</p>
      </span>
    </li>
  );
}

//이미지 슬라이드 컴포넌트
function DarkVariantExample({ res_img, imageitems }) {
  // console.log(imageitems);
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img src={res_img} className="d-block w-100 slide_img" alt="" />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
        </Carousel.Caption> */}
      </Carousel.Item>
      {imageitems === [] || imageitems === undefined
        ? null
        : imageitems.map(function (image, i) {
            return (
              <Carousel.Item key={i}>
                <img src={image} className="d-block w-100 slide_img" alt="" />
              </Carousel.Item>
            );
          })}
    </Carousel>
  );
}

export default RestaurantDetail;
