import React from 'react';
import './MainPage.css';

const MainPage = () => {
  const sampleFestival = {
    title: '행사 이름',
    content: '행사 내용',
    firstimage2: '',
    eventstartdate: '행사 시작 날짜',
    eventenddate: '행사 종료 날짜'
  };

  console.log(sampleFestival);

  return (
    <table>
      <div>
        <div className="ftblock">
          <div className="ftimage">
            <div>{sampleFestival.firstimage2}</div>
          </div>
          <div className="ftcontent">
            <div>{sampleFestival.title}</div>
            <div>{sampleFestival.content}</div>
            <div>{sampleFestival.firstimage2}</div>
            <div>{sampleFestival.eventenddate}</div>
            <div>{sampleFestival.eventstartdate}</div>
            {/* 현재날짜에서 가까운 순으로 정렬 4개*/}
          </div>
        </div>
        <div className="ftblock">
          <div className="ftimage">
            <div>{sampleFestival.firstimage2}</div>
          </div>
          <div className="ftcontent">
            <div>{sampleFestival.title}</div>
            <div>{sampleFestival.content}</div>
            <div>{sampleFestival.firstimage2}</div>
            <div>{sampleFestival.eventenddate}</div>
            <div>{sampleFestival.eventstartdate}</div>
            {/* 현재날짜에서 가까운 순으로 정렬 4개*/}
          </div>
        </div>
        <div className="ftblock">
          <div className="ftimage">
            <div>{sampleFestival.firstimage2}</div>
          </div>
          <div className="ftcontent">
            <div>{sampleFestival.title}</div>
            <div>{sampleFestival.content}</div>
            <div>{sampleFestival.firstimage2}</div>
            <div>{sampleFestival.eventenddate}</div>
            <div>{sampleFestival.eventstartdate}</div>
            {/* 현재날짜에서 가까운 순으로 정렬 4개*/}
          </div>
        </div>
        <div className="ftblock">
          <div className="ftimage">
            <div>{sampleFestival.firstimage2}</div>
          </div>
          <div className="ftcontent">
            <div>{sampleFestival.title}</div>
            <div>{sampleFestival.content}</div>
            <div>{sampleFestival.firstimage2}</div>
            <div>{sampleFestival.eventenddate}</div>
            <div>{sampleFestival.eventstartdate}</div>
            {/* 현재날짜에서 가까운 순으로 정렬 4개*/}
          </div>
        </div>
      </div>
    </table>
  );
};

export default MainPage;
