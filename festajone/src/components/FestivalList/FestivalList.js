import React from 'react'
import './FestivalList.css'

const FestivalList = () => {
  return (
    <div className='root'>
      <div className='searchFestival'>
        <div className='region'>
          <div className='title'>지역</div>
          <div className='regionOption'>
            <select id="">
              <option value="">서울</option>
              <option value="">대구</option>
              <option value="">부산</option>
              <option value="">광주</option>
              <option value="">인천</option>
              <option value="">울산</option>
              <option value="">경기</option>
              <option value="">충남</option>
              <option value="">전남</option>
            </select>
          </div>
        </div>
        <div className='classify'>
          <div className='title'>분류</div>
          
          <div className='classfyOption'>
            <select name="" id="">
              <option value="">문화</option>
              <option value="">영화</option>
              <option value="">축제</option>
            </select>
          </div>
        </div>
        <div className='searchFinish'>
            <button>검색</button>
        </div>
      </div>



    </div>
  )
}

export default FestivalList
