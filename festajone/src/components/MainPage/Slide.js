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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  console.log('sdfsd=>', { article });
  const navigate = useNavigate();

  const onClick1 = () => {
    navigate('/FestivalDetail', {
      state: {
        contentid: article.article.article1.f_contentid,
        areacode: article.article.article1.f_areacode
      }
    });
  };

  const onClick2 = () => {
    navigate('/FestivalDetail', {
      state: {
        contentid: article.article.article2.f_contentid,
        areacode: article.article.article2.f_areacode
      }
    });
  };

  const onClick3 = () => {
    navigate('/FestivalDetail', {
      state: {
        contentid: article.article.article3.f_contentid,
        areacode: article.article.article3.f_areacode
      }
    });
  };

  const onClick4 = () => {
    navigate('/FestivalDetail', {
      state: {
        contentid: article.article.article4.f_contentid,
        areacode: article.article.article4.f_areacode
      }
    });
  };

  const onClick5 = () => {
    navigate('/FestivalDetail', {
      state: {
        contentid: article.article.article5.f_contentid,
        areacode: article.article.article5.f_areacode
      }
    });
  };

  var nowDate = new Date();
  var month = nowDate.getMonth() + 1;

  // console.log('cs=>', article.article.article[0].f_thumbnail);
  return (
    <div className="container">
      <h2 className="SlideTitle" id='month'> {month}월의 행사 </h2>
      <Slider {...settings}>
        <div className="slidebox" align="center">
          <div className="firstimag">
            <img src={article.article.article1.f_thumbnail} className="img" onClick={onClick1} />
          </div>
          <h3 className='title'>{article.article.article1.f_title}</h3>

          <h3 className='date'>
            {article.article.article1.f_startdate} ~ {article.article.article1.f_enddate}
          </h3>
        </div>
        <div className="slidebox" align="center">
          <div className="firstimag">
            <img src={article.article.article2.f_thumbnail} className="img" onClick={onClick2} />
          </div>
          <h3 className='title'>{article.article.article2.f_title}</h3>

          <h3 className='date'>
            {article.article.article2.f_startdate} ~ {article.article.article2.f_enddate}
          </h3>
        </div>
        <div className="slidebox" align="center">
          <div className="firstimag">
            <img src={article.article.article3.f_thumbnail} className="img" onClick={onClick3} />
          </div>
          <h3 className='title'>{article.article.article3.f_title}</h3>

          <h3 className='date'>
            {article.article.article3.f_startdate} ~ {article.article.article3.f_enddate}
          </h3>
        </div>
        <div className="slidebox" align="center">
          <div className="firstimag">
            <img src={article.article.article4.f_thumbnail} className="img" onClick={onClick4} />
          </div>
          <h3 className='title'>{article.article.article4.f_title}</h3>

          <h3 className='date'>
            {article.article.article4.f_startdate} ~ {article.article.article4.f_enddate}
          </h3>
        </div>
        <div className="slidebox" align="center">
          <div className="firstimag">
            <img src={article.article.article5.f_thumbnail} className="img" onClick={onClick5} />
          </div>
          <h3 className='title'>{article.article.article5.f_title}</h3>

          <h3 className='date'>
            {article.article.article5.f_startdate} ~ {article.article.article5.f_enddate}
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
