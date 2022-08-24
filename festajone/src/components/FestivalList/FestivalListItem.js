import React from 'react';
import { useNavigate } from '../../../node_modules/react-router-dom/index';

const FestivalListItem = ({ data }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/festivaldetail', {
      state: {
        contentid: data.f_contentid,
        areacode: data.f_areacode
      }
    });
  };

  return (
    <div className="item">
      <div
        className="FestivalImage"
        style={
          data.f_thumbnail
            ? { backgroundImage: `url(${data.f_thumbnail})` }
            : { backgroundImage: 'url(/assets/no-image.jpeg)' }
        }
        onClick={onClick}
      >
        {/* <img src={data.f_thumbnail} alt="" /> */}
      </div>
      <div className="FestivalDetail" onClick={onClick}>
        <div className="FestivalTitle">
          축제명 : {data.f_title.length >= 15 ? data.f_title.substr(0, 16) + '...' : data.f_title}
        </div>
        <div className="FestivalDate">
          축제 시작 기간 : {data.f_startdate.substr(0, 10)}~{data.f_enddate}
        </div>
      </div>
    </div>
  );
};

export default FestivalListItem;
