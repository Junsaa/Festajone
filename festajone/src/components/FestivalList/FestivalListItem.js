import React from 'react'

const FestivalListItem = ({data}) => {
  return (
    
    <div className='item'>
        <div className='FestivalImage'>
            <img src={data.image} alt="" />
        </div>
        <div className='FestivalDetail'>
            <div className='FestivalTitle'>축제명 : {data.title}</div>
            <div className='FestivalDate'>축제 시작 기간 : {data.startDate}~{data.endDate}</div>
        </div>
    </div>
    
  )
}

export default FestivalListItem
