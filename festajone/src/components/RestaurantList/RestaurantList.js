import React, { useRef, useState } from 'react'
import axios from '../../../node_modules/axios/index';
import './RestaurantList.css'
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState({
    restaurantList : []
})

  const regionRef = useRef();

  const checkRegionValue =() => {
    console.log(regionRef.current.value)

    axios
      .post('http://localhost:8008/searchrestaurant',{
        r_areacode : regionRef.current.value,
      }).then((res)=>{
        const{data} = res;
        setRestaurantList({
          restaurantList : data
        })
        console.log("담겼다!",restaurantList)
      }).catch((e) => {
        console.error(e)
      })
  }

  if(restaurantList.restaurantList.length === 0){
    return(
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
    </div>
    )
  }
  else {
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
              restaurantList.restaurantList.map((restaurantList) => {
                return (
                  <RestaurantListItem data={restaurantList}/>
                )
              })
            }
          </div>
        </div>
          
      </div>
    )
  }
}

export default RestaurantList
