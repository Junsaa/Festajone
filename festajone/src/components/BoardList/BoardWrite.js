import { useRef, useState } from 'react';
import axios from 'axios';
import './BoardWrite.css';

const BoardWrite = ({ handlelist }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const imageRef = useRef();

  const [image_name, setImage_name] = useState({
    image_0: '',
    image_1: '',
    image_2: ''
  });
  
  const [image_name22, setImage_name22] = useState([]);

  var user_id = window.sessionStorage.getItem('id');
  var result;

  var upload_files = new Array();
  function onImage(e) {
    // setImage_name({
    //   ...image_name,
    //   [e.target.id]: e.target.files[0]
    // });
    if (e.target.files.length < 3) {
      for (let i = 0; i < e.target.files.length; i++) {
        upload_files.push(e.target.files[i]);
        console.log(i, '=> ', e.target.files[i]);
      }
      for (let j = e.target.files.length; j < 3; j++) {
        upload_files.push(null);
        console.log(j, '=> ', e.target.files[j]);
      }
      console.log(upload_files);
    } else {
      for (let i = 0; i < e.target.files.length; i++) {
        upload_files.push(e.target.files[i]);
        console.log(i, '=> ', e.target.files[i]);
      }
    }
    setImage_name22(upload_files);
  }

  const Main = (e) => {
    document.location.href = '/boardlist';
  };

  const handleInsert = (e) => {
    console.log('handleInsert =>', titleRef.current.value);
    e.preventDefault();
    if (titleRef.current.value === '' || titleRef.current.value === undefined) {
      alert('제목을 입력하세요!!!');
      titleRef.current.focus();
      return false;
    }
    if (contentRef.current.value === '' || contentRef.current.value === undefined) {
      alert('내용을 입력하세요!!!');
      contentRef.current.focus();
      return false;
    }
    // if (imageRef.current.value === "" || imageRef.current.value === undefined) {
    //   alert("이미지를 선택하세요!!!");
    //   return false;
    // }

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    };
    // const formData = new FormData();
    // formData.append("image", imageRef.current.value);
    // alert(formData);
    console.log('image1_name,image2_name,image3_name =>', image_name);
    axios
      .post(
        'http://localhost:8008/insert',
        {
          title: titleRef.current.value,
          writer: user_id,
          content: contentRef.current.value,
          // imgs: image_name22
          image1: image_name22[0],
          image2: image_name22[1],
          image3: image_name22[2]
        },
        config
      )
      .then((res) => {
        console.log('handleInsert =>', res.data[0].BOARD_NUM + 1);
        result = parseInt(res.data[0].BOARD_NUM) + 1;
        handlelist();
        titleRef.current.value = '';
        contentRef.current.value = '';
      })
      .catch((e) => {
        console.error(e);
      });

    alert('글쓰기 완료');
    document.location.href = '/boardlist';
  };

  return (
    <div>
      <form encType="multipart/form-data">
        <div className="board_wrap" align="center">
          <div className="board_title" id='write' align="left">
            글작성
          </div>

          <div className="board_write_wrap">
            <div className="board_write">
              <div className="title">
                <dl>
                  <dt className="write-title">제목</dt>
                  <dt className="write-txt">
                    <input
                      type="text"
                      name="title"
                      size="68"
                      ref={titleRef}
                      placeholder="제목을 입력하세요"
                    />
                  </dt>
                </dl>
              </div>

              <div className="content">
                <dl>
                  <dt className="write-title">내용</dt>
                  <dt className="write-txt" border="0">
                    <textarea
                      rows="5"
                      cols="70"
                      name="content"
                      ref={contentRef}
                      placeholder="내용을 입력하세요"
                    ></textarea>
                  </dt>
                </dl>
              </div>
            </div>

            <div className="image-file">
              <dl>
                <div align="left">
                <input
                  type="file"
                  name="imgs"
                  multiple
                  id="image_0"
                  ref={imageRef}
                  accept="image/*"
                  onChange={onImage}
                />
                </div>
              </dl>
            </div>

            <div className="three">
              <td colSpan="2">
                <input type="submit" value="글쓰기" className="insert" onClick={handleInsert}></input>
                &nbsp;
                <input type="reset" value="취소" className="reset"></input>
                &nbsp;
                <input type="button" value="목록" className="list_but" onClick={Main}></input>
              </td>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BoardWrite;
