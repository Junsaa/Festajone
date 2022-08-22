import { Carousel } from 'react-bootstrap';
import Map from '../MapApi/Map';
import '../FestivalDetail/festivalDetail.css';

const RestaurantDetail = () => {
  return (
    <>
      <table className="table">
        <tr>
          <td style={{ textAlign: 'center' }}>
            <h2>맛집 이름</h2>
            <span>맛집 정보 &nbsp;|&nbsp; 맛집 정보</span>
          </td>
          <td>
            <h1>
              <i className="bi bi-heart"></i>
              {/* 채워진 하트 <i className="bi bi-heart-fill"></i> */}
            </h1>
          </td>
        </tr>
      </table>

      {/* 이미지 슬라이드 */}
      <div id="photo_Tab">
        <DarkVariantExample></DarkVariantExample>
      </div>

      <div className="detail_div" id="detail_Tab">
        <strong>상세정보</strong>
        <hr style={{ height: '1px', background: 'black' }} />
        <p style={{ fontSize: '13px' }}>상세 정보</p>
        {/* <div className="cont_more">
          <button type="button" className="btn_more">
            내용 더보기 +
          </button>
        </div> */}
        <br />
        <ul>
          <li>
            <b className="detail_b">주소</b>
            <span className="detail_span">주소</span>
          </li>

          <li>
            <b className="detail_b">전화번호</b>
            <span className="detail_span">
              010
              {/* <div dangerouslySetInnerHTML={{ __html: festival.f_d_tel }}></div>{' '} */}
            </span>
          </li>
          <li>
            <b className="detail_b">홈페이지</b>
            <span className="detail_span">
              ㄹㅇ
              {/* <div dangerouslySetInnerHTML={{ __html: festival.f_d_homepage }}></div>{' '} */}
            </span>
          </li>
        </ul>
      </div>

      {/* 지도 */}
      <br />
      <div id="map_Tab">
        <Map mapx={126.570667} mapy={33.450701}></Map>
      </div>

      <br />
    </>
  );
};

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

export default RestaurantDetail;
