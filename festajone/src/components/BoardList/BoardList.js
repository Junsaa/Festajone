import { useEffect } from 'react';
import BoardArticle from './BoardArticle';
import { useNavigate } from 'react-router-dom';
import PageLink from './PageLink';
import './BoardList.css';

const writer = (e) => {
  document.location.href = '/writer';
};

const BoardList = ({
  boardlist,
  actionmode,
  handlelist,
  handledetail,
  handleupdateform,
  handlepage,
  pagelink
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    handlelist();
  }, []);

  const handleLogout = () => {
    console.log('handleLogout');
    window.sessionStorage.clear();
    console.log(
      'handleLogout:window.sessionStorage(login_id) =>',
      window.sessionStorage.getItem('id')
    );
    navigate('/'); // 로그인페이지로 이동
  };

  if (boardlist.boardList.length === 0) {
    return (
      <section className="notice">
        <div className="page-title">
          <div className="container">
            <h3>게시판</h3>
          </div>
        </div>

        <div id="board-list">
          <div className="container">
            <table className="board-table">
              <thead>
                <tr>
                  <th scope="col" className="th-num">
                    번호
                  </th>
                  <th scope="col" className="th-title">
                    제목
                  </th>
                  <th scope="col" className="th-writer">
                    작성자
                  </th>
                  <th scope="col" className="th-date">
                    작성일
                  </th>
                </tr>
              </thead>
            </table>
            {/* <div align="right" width="100%">
              <input type="button" className="but" value="글쓰기" onClick={writer} id="writer" />
            </div> */}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="notice">
        <div className="page-title">
          <div className="container">
            <h3>게시판</h3>
          </div>
        </div>

        <div id="board-list">
          <div className="container">
            <table className="board-table" border="0" align="center">
              <thead>
                <tr>
                  <th scope="col" className="th-num">
                    번호
                  </th>
                  <th scope="col" className="th-title">
                    제목
                  </th>
                  <th scope="col" className="th-writer">
                    작성자
                  </th>
                  <th scope="col" className="th-date">
                    작성일
                  </th>
                </tr>
              </thead>
              <tbody>
                {boardlist.boardList.map((article) => {
                  return (
                    <BoardArticle
                      actionmode={actionmode}
                      article={article}
                      key={article.board_num}
                      handlelist={handlelist}
                      handledetail={handledetail}
                      handleupdateform={handleupdateform}
                    />
                  );
                })}
              </tbody>
            </table>
            <div>
              <div className="board_page">
                {pagelink.map((page) => {
                  return <PageLink page={page} key={page} handlepage={handlepage} />;
                })}
              </div>
              <div align="right" width="100%">
                <input type="button" className="but" value="글쓰기" onClick={writer} id="writer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default BoardList;
