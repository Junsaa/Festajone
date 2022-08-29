import './BoardUpdateForm.css';

const BoardUpdateForm = ({ article, setarticle, handleupdate, handlelist }) => {
  console.log('BoardUpdateForm =>', article);

  const onChange = (e) => {
    setarticle({
      ...article,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form>
        <div className="board_wrap" align="center">
          <div className="board_title" align="left">
            글수정
          </div>

          <div className="board_update_wrap">
            <div className="board_update">
              <div className="title">
                <dl>
                  <dt className="update-title">제목</dt>
                  <dt className="update-txt">
                    <input
                      type="text"
                      name="board_title"
                      defaultValue={article.board_title}
                      onChange={onChange}
                    ></input>
                  </dt>
                </dl>
              </div>

              <div className="writer">
                <dl>
                  <dt className="update-title">작성자</dt>
                  <dt className="update-txt">{article.board_writer}</dt>
                </dl>
              </div>

              <div className="content">
                <dl>
                  <dt className="update-title" border="1">
                    내용
                  </dt>
                  <dt className="update-txt">
                    <textarea
                      type="text"
                      name="board_content"
                      defaultValue={article.board_content}
                      onChange={onChange}
                    ></textarea>
                  </dt>
                </dl>
              </div>
            </div>
          </div>
          <td colspan="2" align="center">
            <input
              type="button"
              value="글수정"
              className="update-btn"
              onClick={handleupdate}
            ></input>
            &nbsp;
            <input type="button" value="목록" className="list_but" onClick={handlelist}></input>
          </td>
        </div>
      </form>
    </div>
  );
};

export default BoardUpdateForm;
