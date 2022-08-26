import React, { useEffect } from 'react';
import Slide from './Slide';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useCallback, useRef } from 'react';

const MainPage = () => {
  const [article, setArticle] = useState({
    article1: '',
    article2: '',
    article3: '',
    article4: '',
    article5: '',
  });

  // const dateRef = useRef();
  const date = new Date();
  const year = String(date.getFullYear());
  let month;
  if (date.getMonth() + 1 >= 10) {
    month = String(date.getMonth());
  } else {
    month = '0' + String(date.getMonth() + 1);
  }

  const day = String(date.getDate());

  const checkDateValue = () => {
    axios
      .post('http://localhost:8008/festivalDate', {
        today: year + '-' +month+ '-' + day
      })
      .then((res) => {
        const { data } = res;
        console.log('fd => ', data);
        if (res.data.length > 0) {
          setArticle({
            article1: data[0],
            article2: data[1],
            article3: data[2],
            article4: data[3],
            article5: data[4],
          });
          console.log('AAAA =>', article);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    checkDateValue();

    // return () => {};
  }, []);
  // console.log('????????=>', article);
  // console.log('tq=>', article);
  return (
    <div>
      {console.log(article)}
      <Slide article={article} />
      {/* <div onClick={checkDateValue}>but</div> */}
    </div>
  );
};

export default MainPage;
