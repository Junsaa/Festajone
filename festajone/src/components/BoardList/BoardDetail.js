import axios from 'axios';
// import arrayIncludes from '../../../node_modules/lodash/_arrayIncludes';
import './BoardDetail.css';

const handleDelete = (e) => {
  console.log('handleDelete(board_num) =>', e.target.id);
  axios
    .post('http://localhost:8008/delete', {
      num: e.target.id
    })
    .then(() => {
      document.location.href = '/boardlist';
    })
    .catch((e) => {
      console.error(e);
    });
};

var user_id = sessionStorage.getItem('id');

const BoardDetail = ({ article, handlelist, handleupdateform }) => {
  console.log('BoardDetail =>', article);
  var image1;
  var image2;
  var image3;
  if (article.board_image2 === null && article.board_image3 === null) {
    image1 = 'http://localhost:8008/uploads/' + article.board_image1;
    image2 = null;
    image3 = null;
  } else if (article.board_image3 === null) {
    image1 = 'http://localhost:8008/uploads/' + article.board_image1;
    image2 = 'http://localhost:8008/uploads/' + article.board_image2;
    image3 = null;
  } else {
    image1 = 'http://localhost:8008/uploads/' + article.board_image1;
    image2 = 'http://localhost:8008/uploads/' + article.board_image2;
    image3 = image3 = 'http://localhost:8008/uploads/' + article.board_image3;
  }

  if (user_id === article.board_writer) {
    return (
      <div>
        <form>
          <div className="board_wrap" align="center">
            <div className="board_detail_wrap">
              <div className="board_detail">
                <div className="title">
                  <dl align="left">
                    <dt>{article.board_title}</dt>
                    {/* <dt>{article.board_title}</dt> */}
                  </dl>
                </div>

                <div className="info">
                  <dl>
                    <dt>글번호 : {article.board_num}</dt>
                    {/* <dt>{article.board_num}</dt> */}
                  </dl>

                  <dl>
                    <dt>글쓴이 : {article.board_writer}</dt>
                    {/* <dt>{article.board_writer}</dt> */}
                  </dl>

                  <dl>
                    <dt>글쓴날짜 : {article.board_date}</dt>
                    {/* <dt>{article.board_date}</dt> */}
                  </dl>
                </div>

                <div className="content">
                  <dl>
                    <dt>{article.board_content}</dt>
                  </dl>
                </div>

                <div className="image">
                  <dl>
                    <dt>
                      <img src={image1} alt="image1" />
                    </dt>
                    <dt>
                      <img src={image2} alt="image2" />
                    </dt>
                    <dt>
                      <img src={image3} alt="image3" />
                    </dt>
                  </dl>
                </div>
              </div>
            </div>

            <div className="select_btn">
              <input className="list_but" type="button" value="목록" onClick={handlelist}></input>
              &nbsp;
              <input
                className="update"
                type="button"
                value="수정"
                id={article.board_num}
                onClick={handleupdateform}
              ></input>
              &nbsp;
              <input
                className="delete"
                type="button"
                value="삭제"
                id={article.board_num}
                onClick={handleDelete}
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form>
          <div className="board_wrap" align="center">
            <div className="board_detail_wrap">
              <div className="board_detail">
                <div className="title">
                  <dl align="left">
                    <dt>{article.board_title}</dt>
                    {/* <dt>{article.board_title}</dt> */}
                  </dl>
                </div>

                <div className="info">
                  <dl>
                    <dt>글번호 : {article.board_num}</dt>
                    {/* <dt>{article.board_num}</dt> */}
                  </dl>

                  <dl>
                    <dt>글쓴이 : {article.board_writer}</dt>
                    {/* <dt>{article.board_writer}</dt> */}
                  </dl>

                  <dl>
                    <dt>글쓴날짜 : {article.board_date}</dt>
                    {/* <dt>{article.board_date}</dt> */}
                  </dl>
                </div>

                <div className="content">
                  <dl>
                    <dt>{article.board_content}</dt>
                  </dl>
                </div>

                <div className="image">
                  <dl>
                    <dt>
                      <img src={image1} alt="image1" />
                    </dt>
                    <dt>
                      <img src={image2} alt="image2" />
                    </dt>
                    <dt>
                      <img src={image3} alt="image3" />
                    </dt>
                  </dl>
                </div>
              </div>
            </div>

            <div>
              <input className="list_but" type="button" value="목록" onClick={handlelist}></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default BoardDetail;
