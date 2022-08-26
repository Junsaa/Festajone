import React from 'react';
import { useNavigate } from '../../../node_modules/react-router-dom/index';

const RestaurantListItem = (data) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/restaurantdetail', {
      state: {
        get_r_contentid: data.data.r_contentid,
        title: data.data.r_title
      }
    });
  };

  return (
    <div>
      {console.log('아이템별 ', data)}
      {console.log('아이템별 제목', data.data.r_title)}
      <div className="item" onClick={onClick}>
        <div
          className="FestivalImage"
          style={
            data.data.r_thumbnail
              ? { backgroundImage: `url(${data.data.r_thumbnail})` }
              : { backgroundImage: 'url(/assets/no-image.jpeg)' }
          }
        >
          {/* <img src={data.f_thumbnail} alt="" /> */}
        </div>
        <div className="FestivalDetail">
          {/* <div className='FestivalTitle'>축제명 : {data.r_title.length >= 15 ? data.r_title.substr(0,16) + "..." : data.r_title}</div> */}
          <div className="restaurantTitle">가게명 : {data.data.r_title}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantListItem;
