import React from 'react';
import './MainPageItem.css';

const MainPageItem = ({ data }) => {
  return (
    <div className="box">
      <div>
        <div className="firstimage2">
          <img src={data.firstimage2} />
        </div>
      </div>
      <div>
        <div>
          <div className="title">행사이름:{data.title}</div>
          <div className="content">행사내용:{data.title}</div>
          <div className="eventstartdate">행사시작날짜:{data.title}</div>
          <div className="eventenddate">행사종료날짜:{data.title}</div>
        </div>
      </div>
    </div>
  );
};

export default MainPageItem;
