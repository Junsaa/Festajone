import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = ({menu}) => {

  const [currentmenu ,setCurrentMenu] = useState(menu)
  const navigate = useNavigate();

  const changeFestival = useCallback (() => {
    setCurrentMenu(1)
    navigate("/festivallist")
  },[currentmenu])

  const changeRestaurant = useCallback (() => {
    setCurrentMenu(2)
    navigate("/restaurantlist")
  },[currentmenu])

  const changeBoard = useCallback (() => {
    var user = sessionStorage.getItem('id');

    if(user !== null){
      setCurrentMenu(3)
      navigate("/boardlist")
    }else{
      alert('로그인 후 사용 가능합니다.');
      navigate('/login');
    }
  },[currentmenu])

   
  return (
  <ul className="nav"> 
    <li style={currentmenu ===1 ? {backgroundColor :'black'} : {}} onClick={changeFestival}>
      <a  className="tab_day" >
        축제 정보
      </a>
    </li>
    <li>
      <a className="tab_day" style={currentmenu ===2 ? {backgroundColor :'black'} : {}} onClick={changeRestaurant}>
        맛집 정보
      </a>
    </li>
    <li>
      <a className="tab_day" style={currentmenu ===3 ? {backgroundColor :'black'} : {}} onClick={changeBoard}>
        게시판{' '}
      </a>
    </li>
  </ul>
  )
}
  

export default Nav;
