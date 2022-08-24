import React from 'react'

const FestivalListItem = ({data}) => {

  

  return (
    
    <div className='item'>
        <div className='FestivalImage' style={data.f_thumbnail ? 
          {backgroundImage : `url(${data.f_thumbnail})`} :
          {backgroundImage: 'url(/assets/no-image.jpeg)'}}>
            {/* <img src={data.f_thumbnail} alt="" /> */}
        </div>
        <div className='FestivalDetail'>
            <div className='FestivalTitle'>축제명 : {data.f_title.length >= 15 ? data.f_title.substr(0,16) + "..." : data.f_title}</div>
            <div className='FestivalDate'>축제 시작 기간 : {data.f_startdate.substr(0,10)}~{data.f_enddate}</div>
        </div>
    </div>
    
  )
}

export default FestivalListItem
