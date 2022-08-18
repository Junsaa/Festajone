import React from 'react'
import './FestivalList.css'
import FestivalListItem from './FestivalListItem'

const FestivalList = () => {
  const samples = [
    {
      title : "나비축제",
      startDate : "03-04",
      endDate : "03-25",
      image : "http://www.mdilbo.com/lib/thumb.html?type=file&src=202204/28/20220428191037728396.png&w=700"
    },
    {
      title : "국화축제",
      startDate : "03-04",
      endDate : "03-25",
      image : "https://mblogthumb-phinf.pstatic.net/MjAxNzExMDFfMTUy/MDAxNTA5NDk2MDY5MDIy.YyHqRp2bUiofUzPJEb8agKbf_Nkgl5DUwtqON27z8FQg._sip6IvKsMBSdf7hLqpQPAtx2N7wpEKui6GhgPwJv9Qg.JPEG.namdokorea/함평여행.jpg?type=w800"
    },
    {
      title : "국화축제",
      startDate : "04-04",
      endDate : "04-25",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuubyOT5ty-cno4gwF33waO_Z9LxEgqcC2w&usqp=CAU"
    },
    {
      title : "국화축제",
      startDate : "04-04",
      endDate : "04-25",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuubyOT5ty-cno4gwF33waO_Z9LxEgqcC2w&usqp=CAU"
    },
    {
      title : "국화축제",
      startDate : "04-04",
      endDate : "04-25",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuubyOT5ty-cno4gwF33waO_Z9LxEgqcC2w&usqp=CAU"
    }
  ]

  const sample1 ={
    title : "나비축제",
    startDate : "03-04",
    endDate : "03-25",
    image : "http://www.mdilbo.com/lib/thumb.html?type=file&src=202204/28/20220428191037728396.png&w=700"
  }
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

      <div className='listFlex'>
        <div className='festivalList'>
          {
            samples.map((samples) => {
              return (
                <FestivalListItem data={samples} />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default FestivalList
