import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slide.css';
import { useState, setuseState } from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const Slide = (article) => {
  console.log('ddd+', article);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log('sdfsd=>', { article });
  const navigate = useNavigate();

  const handleslide = () => {
    navigate('/FestivalDetail');
  };

  var nowDate = new Date();
  var month = nowDate.getMonth() +1;

  // console.log('cs=>', article.article.article[0].f_thumbnail);
  return (
    <div className="container">
      <h2 className="SlideTitle"> {month}월의 행사 </h2>
      <Slider {...settings}>
        <div className="slidebox" align="center">
          <div className="firstimag">
            <img src={article.article.article1.f_thumbnail} className="img" />
          </div>
          <h3>{article.article.article1.f_title}</h3>

          <h3>
            {article.article.article1.f_startdate} ~ {article.article.article1.f_enddate}
          </h3>
        </div>
        <div className="slidebox" align="center">
          <div className="firstimag">
            <img src={article.article.article2.f_thumbnail} className="img" />
          </div>
          <h3>{article.article.article2.f_title}</h3>

          <h3>
            {article.article.article2.f_startdate} ~ {article.article.article2.f_enddate}
          </h3>
        </div>
        <div className="slidebox" align="center">
          <div className="firstimag">
            <img src={article.article.article3.f_thumbnail} className="img" />
          </div>
          <h3>{article.article.article3.f_title}</h3>

          <h3>
            {article.article.article3.f_startdate} ~ {article.article.article3.f_enddate}
          </h3>
        </div>
        <div className="slidebox" align="center">
          <div className="firstimag">
            <img src={article.article.article4.f_thumbnail} className="img" />
          </div>
          <h3>{article.article.article4.f_title}</h3>

          <h3>
            {article.article.article4.f_startdate} ~ {article.article.article4.f_enddate}
          </h3>
        </div>
        <div className="slidebox" align="center">
          <div className="firstimag">
            <img src={article.article.article5.f_thumbnail} className="img" />
          </div>
          <h3>{article.article.article5.f_title}</h3>

          <h3>
            {article.article.article5.f_startdate} ~ {article.article.article5.f_enddate}
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
