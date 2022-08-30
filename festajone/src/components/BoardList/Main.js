import BoardList from './BoardList';
import BoardWrite from './BoardWrite';
import BoardDetail from './BoardDetail';
import BoardUpdateForm from './BoardUpdateForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Main() {
  // 게시글 저장
  const [boardlist, setBoardlist] = useState({
    boardList: []
  });

  const navigate = useNavigate();

  const [article, setArticle] = useState({
    board_num: 0,
    board_writer: '',
    board_title: '',
    board_content: '',
    board_date: '',
    board_image1: '',
    board_image2: '',
    board_image3: ''
  });

  // 0:글쓰기, 1:상세보기, 2:글수정
  const [actionMode, setActionMode] = useState({ mode: 0 });
  const [pageLink, setPageLink] = useState([]);

  var page_num = 1;
  const page_size = 10;
  var page_count = 1;
  var article_count = 0;

  useEffect(() => {
    // const login_id = window.sessionStorage.getItem("id");
    // console.log("window.sessionStorage(login_id) =>", login_id);
    // if (login_id === null) {
    //   alert("로그인후 사용가능합니다!!");
    //   navigate("/");
    // }
  }, []);

  const handlePage = (e) => {
    console.log('handlePage(e.target.id) =>', e.target.id);
    page_num = e.target.id;
    getList();
  };

  // 글목록
  async function getList() {
    // alert("getList(actionMode) =>" + actionMode.mode);
    await axios
      .get('http://localhost:8008/count', {})
      .then((res) => {
        const { data } = res;
        article_count = data[0].COUNT;
        page_count = Math.ceil(article_count / page_size);
        var page_link = [];
        for (let i = 1; i <= page_count; i++) page_link.push(i);
        console.log('getArticleCount(page_link) =>', page_link);
        setPageLink(page_link);
      })
      .catch((e) => {
        console.error(e);
      });
    console.log('article_count =>', article_count);
    await axios
      .post('http://localhost:8008/list', {
        page_num: page_num,
        page_size: page_size,
        article_count: article_count
      })
      .then((res) => {
        const { data } = res;
        console.log('data ==>', data);
        setBoardlist({
          boardList: data
        });
        setActionMode({
          ...actionMode,
          mode: 0 // 상세보기
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  // 상세보기
  const handleDetail = (e) => {
    // alert("handleDetail(actionMode) =>" + actionMode.mode);
    axios
      .post('http://localhost:8008/detail', { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log('detail =>', data);
        if (res.data.length > 0) {
          setArticle({
            ...article,
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
            board_image1: data[0].board_image1,
            board_image2: data[0].board_image2,
            board_image3: data[0].board_image3,
          });

          setActionMode({
            ...actionMode,
            mode: 1 // 상세보기
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // 수정폼 보기
  const handleUpdateForm = (e) => {
    // alert(
    //   "handleUpdateForm(actionMode) =>" + actionMode.mode + ", " + e.target.id
    // );
    axios
      .post('http://localhost:8008/detail', { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log('handleUpdateForm =>', data);
        if (res.data.length > 0) {
          setArticle({
            ...article,
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE
          });
          setActionMode({
            ...actionMode,
            mode: 2 // 글수정하기
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdate = () => {
    console.log('handleUpdate =>', article);
    axios
      .post('http://localhost:8008/update', {
        article: article
      })
      .then(() => {
        getList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (actionMode.mode === 0) {
    // alert("글쓰기");
    // 글쓰기
    return (
      <div>
        <br />
        <BoardList
          boardlist={boardlist}
          actionmode={actionMode}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
          handlepage={handlePage}
          pagelink={pageLink}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 1) {
    // alert("상세정보");
    // 상세보기
    return (
      <div>
        <BoardDetail
          article={article}
          handlelist={getList}
          handleupdateform={handleUpdateForm}
        ></BoardDetail>
        <br />
        {/* <BoardList
          boardlist={boardlist}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
          handlepage={handlePage}
          pagelink={pageLink}
        ></BoardList> */}
      </div>
    );
  } else if (actionMode.mode === 2) {
    // alert("글수정");
    // 글수정
    return (
      <div>
        <BoardUpdateForm
          article={article}
          setarticle={setArticle}
          handleupdate={handleUpdate}
          handlelist={getList}
        ></BoardUpdateForm>
        <br />
        {/* <BoardList
          boardlist={boardlist}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
          handlepage={handlePage}
          pagelink={pageLink}
        ></BoardList> */}
      </div>
    );
  }
}

export default Main;
