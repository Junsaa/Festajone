import React, { useState } from 'react';

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BoardList from './components/BoardList/Main';
import MainPage from './components/MainPage/MainPage';
import FestivalList from './components/FestivalList/FestivalList';
import RestaurantList from './components/RestaurantList/RestaurantList';
import Mypage from './components/Mypage/Mypage';
import Login from './components/Login/Login';
import Join from './components/Join/Join';
import FestivalDetail from './components/FestivalDetail/FestivalDetail';
import UpdateUser from './components/UpdateUser/UpdateUser';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';
import Writer from './components/BoardList/writer';
import axios from '../node_modules/axios/index';

const App = () => {
  const [menu, setMenu] = useState(0);

  return (
    <div>
      <Header />
      <Nav menu={menu} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/boardlist" element={<BoardList />} />
        <Route path="/festivallist" element={<FestivalList />} />
        <Route path="/restaurantlist" element={<RestaurantList />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/updateuser" element={<UpdateUser />} />
        <Route path="/festivaldetail" element={<FestivalDetail />} />
        <Route path="/restaurantdetail" element={<RestaurantDetail />} />
        <Route path="/writer" element={<Writer />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
