import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slide from './Slide';

const TOTAL_SLIDES = 3;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transtion = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <div>
        <h1>축제</h1>
        <p>{currentSlide + 1}번째 사진</p>
      </div>
      <SliderContainer ref={slideRef}>
        <Slide img={<img src="https://t1.daumcdn.net/cfile/tistory/995E83505D2423201C" />} />
        <Slide
          img={
            <img src="https://a.cdn-hotels.com/gdcs/production104/d931/bf23d79a-3721-445e-86e3-6a753df1ba18.jpg?impolicy=fcrop&w=800&h=533&q=medium" />
          }
        />
        <Slide
          img={<img src="https://www.sejong.go.kr/images/tour/sub02/sub02_0101_img02.jpg" />}
        />
      </SliderContainer>
      <Center>
        <Button onClick={PrevSlide}>Prev</Button>
        <Button onClick={NextSlide}>Next</Button>
      </Center>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  margin: auto;
  height: 1000px;
  overflow: hidden;
`;
const Button = styled.div`
  all: unset;
  padding: 1em 2em;
  color: burlywood;
  border-radius: 10px;
  border: 1px solid burlywood;
  cursor: pointer;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
`;

const Text = styled.div`
  text-align: center;
  color: burlywood;
  p {
    color: #fff;
    font-size: 20px;
    background-color: burlywood;
    display: inline-block;
    border-radius: 50px;
    padding: 0.5em 1em;
  }
`;

const Center = styled.div`
  text-align: center;
`;
