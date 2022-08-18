import React from 'react';
import './MainPage.css';
import { usestate, setusestate } from 'react';
import MainPageItem from './MainPageItem';
import { AiFillCaretRight } from 'react-icons/ai';
import { AiFillCaretLeft } from 'react-icons/ai';

const MainPage = () => {
  const slideElementalList = [slide1, slide2, slide3, slide4, slide5];

  const [currentSlide, setCurrentSlide] = usestate(0);

  const slideElementalStyle = css`
    width: 50%;
    height: 70%;
    background-image: url(${slideElementalList[currentSlide]});
    backgroun-size: cover;
    background-repeat: no-repeat;
  `;

  const slideArrowRStyle = <AiFillCaretRight width="50px" height="50px" />;
  const slideArrowLStyle = <AiFillCaretLeft width="50px" height="50px" />;

  const slideshow = (idx) => {
    const listLength = slideElementalList.length - 1;

    if (idx < 0) {
      setCurrentSlide(listLength);
    } else if (idx > listLength) {
      setCurrentSlide(0);
    } else if (idx <= listLength) {
      currentSlide(idx);
    }
  };

  const onPrev = () => {
    slideshow(currentSlide - 1);
  };

  const onNext = () => {
    slideshow(currentSlide + 1);
  };

  console.log();

  return <div></div>;
};

export default MainPage;
