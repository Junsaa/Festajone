import './Board.css';
// import { useEffect } from 'react';
// import { Axios } from 'axios';
// import BoardArticle from './BoardArticle';

const BoardList = () => {

  return (
    <section class="notice">
      <div class="page-title">
        <div class="container">
          <h3>게시판</h3>
        </div>
      </div>

      <div id="board-search">
        <div class="container">
          <div class="search-window">
            <form action="">
              <div class="search-wrap">
                <label for="search" class="blind">
                  내용 검색
                </label>
                <input
                  id="search"
                  type="search"
                  name=""
                  placeholder="검색어를 입력해주세요."
                  value=""
                />
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                  integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                  crossorigin="anonymous"
                  referrerpolicy="no-referrer"
                />
                <button type="button" className="but but-dark">
                  <i class="fas fa-search"></i>
                </button>
                <label for="search" class="blind">
                  글쓰기
                </label>
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                  integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                  crossorigin="anonymous"
                  referrerpolicy="no-referrer"
                />
                <button type="button" className="write wri-dark">
                  <i class="fa-solid fa-pen"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="board-list">
        <div class="container">
          <table class="board-table">
            <thead>
              <tr>
                <th scope="col" class="th-num">
                  번호
                </th>
                <th scope="col" class="th-title">
                  제목
                </th>
                <th scope="col" class="th-writer">
                  작성자
                </th>
                <th scope="col" class="th-date">
                  등록일
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <th>
                  <a href="#!">광주 ㄴㄴ 맛집</a>
                </th>
                <td>작성자3</td>
                <td>2022.08.19</td>
              </tr>

              <tr>
                <td>2</td>
                <th>
                  <a href="#!">순천 ㅁㅁ 맛집</a>
                </th>
                <td>작성자2</td>
                <td>2022.08.19</td>
              </tr>

              <tr>
                <td>1</td>
                <th>
                  <a href="#!">통영 ㅇㅇ 맛집</a>
                </th>
                <td>작성자1</td>
                <td>2022.08.19</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BoardList;
