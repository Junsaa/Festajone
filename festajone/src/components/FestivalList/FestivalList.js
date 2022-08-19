import React, { useRef, useState } from 'react'
import axios from '../../../node_modules/axios/index'
import './FestivalList.css'
import FestivalListItem from './FestivalListItem'

const FestivalList = () => {

  const [festivalList, setFestivalList] = useState({
    festivalList : [],
  })

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
  const regionRef = useRef();


  const checkRegionValue =() => {
    console.log(regionRef.current.value)

    axios
      .post('http://localhost:8008/searchfestival',{
        f_areacode : regionRef.current.value
      }).then((res)=>{
        const{data} = res;
        setFestivalList({
          festivalList : data
        })
      }).catch((e) => {
        console.error(e)
      })
  }



  return (
    <div className='root'>
      <div className='searchFestival'>
        <div className='region'>
          <div className='title'>지역</div>
          <div className='regionOption'>
            <select id="selectRegion" ref={regionRef}>
              <option value="1">서울</option>
              <option value="2">인천</option>
              <option value="3">대전</option>
              <option value="4">대구</option>
              <option value="5">광주</option>
              <option value="6">부산</option>
              <option value="7">울산</option>
              <option value="8">세종</option>
              <option value="31">경기도</option>
              <option value="32">강원도</option>
              <option value="33">충청북도</option>
              <option value="34">충청남도</option>
              <option value="35">경상북도</option>
              <option value="36">경상남도</option>
              <option value="37">전라북도</option>
              <option value="38">전라남도</option>
              <option value="39">제주도</option>
            </select>
          </div>
        </div>

        <div className='searchFinish'>
            <button onClick={checkRegionValue}>검색</button>
        </div>
      </div>

      <div className='listFlex'>
        <div className='festivalList'>
          {
            festivalList.map((festivalList) => {
              return (
                <FestivalListItem data={festivalList} />
              )
            })
          }
        </div>
      </div>
          {console.log(festivalList)}
    </div>
  )
}

export default FestivalList
