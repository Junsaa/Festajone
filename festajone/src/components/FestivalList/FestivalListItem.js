import React from 'react'

const FestivalListItem = ({data}) => {
  return (
    
    <div className='item'>
        <div className='FestivalImage'>
            <img src={data.f_thumbnail} alt="" />
        </div>
        <div className='FestivalDetail'>
            <div className='FestivalTitle'>축제명 : {data.f_title}</div>
            <div className='FestivalDate'>축제 시작 기간 : {data.f_startdate}~{data.f_enddate}</div>
        </div>
    </div>
    
  )
}

export default FestivalListItem
