import axios from 'axios';

const BoardArticle = ({ article, handlelist, handledetail, handleupdateform }) => {
  const handleDelete = (e) => {
    console.log('handleDelete(board_num) =>', e.target.id);
    axios
      .post('http://localhost:8008/delete', {
        num: e.target.id
      })
      .then(() => {
        handlelist();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // console.log("BoardArticle =>", article);

  return (
    <tr>
      <td>{article.BOARD_NUM}</td>
      <td>
        <a href="#" id={article.BOARD_NUM} onClick={handledetail}>
          {article.BOARD_TITLE}
        </a>
      </td>
      <td>{article.BOARD_WRITER}</td>
      <td>{article.BOARD_DATE}</td>
    </tr>
  );
};

export default BoardArticle;
