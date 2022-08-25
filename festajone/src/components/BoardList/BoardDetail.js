import axios from "axios";

const handleDelete = (e) => {
  console.log("handleDelete(board_num) =>", e.target.id);
  axios
    .post("http://localhost:8008/delete", {
      num: e.target.id,
    })
    .then(() => {
      document.location.href='/boardlist';
    })
    .catch((e) => {
      console.error(e);
    });
  }

  var user_id = sessionStorage.getItem('id');

const BoardDetail = ({ article, handlelist, handleupdateform }) => {
  console.log("BoardDetail =>", article);
  const image = "http://localhost:8008/uploads/" + article.board_image;
  console.log("image =>", image);
  if(user_id === article.board_writer) {
    return (
      <div>
        <form>
          <table border="1" width="700px" align="center">
            <tr>
              <td width="100px">글번호</td>
              <td align="left" width="600px">
                {article.board_num}
              </td>
            </tr>
            <tr>
              <td width="100px">제목</td>
              <td align="left" width="600px">
                {article.board_title}
              </td>
            </tr>
            <tr>
              <td width="100px">글쓴이</td>
              <td align="left" width="600px">
                {article.board_writer}
              </td>
            </tr>
            <tr>
              <td width="100px">글쓴날짜</td>
              <td align="left" width="600px">
                {article.board_date}
              </td>
            </tr>
            <tr>
              <td width="100px">글내용</td>
              <td align="left" width="600px">
                {article.board_content}
              </td>
            </tr>
            <tr>
              <td width="100px">이미지</td>
              <td align="left" width="600px">
                <img src={image} />
              </td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                <input type="button" value="글목록" onClick={handlelist}></input>
                &nbsp;
                <input type="button" value="수정" id={article.board_num} onClick={handleupdateform}></input>
                &nbsp;
                <input type="button" value="삭제" id={article.board_num} onClick={handleDelete} ></input>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form>
          <table border="1" width="700px" align="center">
            <tr>
              <td width="100px">글번호</td>
              <td align="left" width="600px">
                {article.board_num}
              </td>
            </tr>
            <tr>
              <td width="100px">제목</td>
              <td align="left" width="600px">
                {article.board_title}
              </td>
            </tr>
            <tr>
              <td width="100px">글쓴이</td>
              <td align="left" width="600px">
                {article.board_writer}
              </td>
            </tr>
            <tr>
              <td width="100px">글쓴날짜</td>
              <td align="left" width="600px">
                {article.board_date}
              </td>
            </tr>
            <tr>
              <td width="100px">글내용</td>
              <td align="left" width="600px">
                {article.board_content}
              </td>
            </tr>
            <tr>
              <td width="100px">이미지</td>
              <td align="left" width="600px">
                <img src={image} />
              </td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                <input type="button" value="글목록" onClick={handlelist}></input>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
};

export default BoardDetail;