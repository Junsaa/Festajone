const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.port || 8008;
const cors = require('cors');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: '*',
  Credential: true
};

app.use(cors(corsOptions));

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'pesta',
  password: 'Pesta123',
  database: 'first'
});

app.post('/join', (req, res) => {
  console.log('/join', req.body);
  var id = req.body.id;
  var pw = req.body.pw;
  var email = req.body.email;
  var name = req.body.name;
  var nickname = req.body.nickname;

  const sqlQuery =
    'insert into user(user_id, user_pw, user_email, user_name, user_nickname) values (?,?,?,?,?);';
  db.query(sqlQuery, [id, pw, email, name, nickname], (err, result) => {
    res.send(result);
  });
});

app.post('/login', (req, res) => {
  console.log('/login', req.body);
  var id = req.body.id;
  var pw = req.body.pw;

  const sqlQuery = "select count(*) as 'cnt' from user where user_id=? and user_pw=?;";
  db.query(sqlQuery, [id, pw], (err, result) => {
    res.send(result);
  });
});

app.post('/searchfestival', (req, res) => {
  console.log('searchfestival');
  var f_areacode = parseInt(req.body.f_areacode);

  const sqlQuery =
    'select f_contentid,f_title,f_thumbnail,f_startdate,f_enddate from festival where f_areacode = ?;';
  db.query(sqlQuery, [f_areacode], (err, result) => {
    res.send(result);
  });
});

// 축제 상세 정보 가져오기
app.post('/searchFestivalDetail', (req, res) => {
  // console.log('searchFestivalDetail');
  var festival_contentid = 2833886;

  const sqlQuery =
    'SELECT f_d_contentid, f_d_title, f_d_tel,  f_d_telname, f_d_homepage, f_d_image,f_d_addr, f_d_mapx, f_d_mapy, f_d_startdate, f_d_enddate, f_d_pverview,f_d_areacode, sortation FROM festival_detail where f_d_contentid=?;';
  db.query(sqlQuery, [festival_contentid], (err, result) => {
    res.send(result);
    console.log(result);
  });
});

//축제 이미지 가져오기
app.post('/searchFestivalImg', (req, res) => {
  // console.log('searchFestivalImg');
  var contentid = req.body.contentid;

  const sqlQuery =
    'SELECT image_contentid, image_originimgurl, image_smallimageurl FROM festival_image where image_contentid=?;';
  db.query(sqlQuery, [contentid], (err, result) => {
    res.send(result);
    console.log(result);
  });
});

//축제 상세 페이지 - 주변 맛집 랜덤 추천
app.post('/recommendRes', (req, res) => {
  // console.log('recommendRes');
  var areacode = req.body.areacode;

  const sqlQuery =
    'SELECT r_contentid, r_title, r_mainimage, r_thumbnail,r_addr1, r_addr2, r_mapx,r_mapy FROM restaurant where r_areacode=? order by rand() limit 3;';
  db.query(sqlQuery, [areacode], (err, result) => {
    res.send(result);
  });
});

// 맛집 상세 정보 가져오기
app.post('/searchResDetail', (req, res) => {
  // console.log('searchFestivalDetail');
  var res_contentid = req.body.res_contentid;

  const sqlQuery =
    'SELECT r_contentid, r_title, r_mainimage, r_addr1, r_addr2, r_mapx, r_mapy FROM restaurant where r_contentid=?;';
  db.query(sqlQuery, [res_contentid], (err, result) => {
    res.send(result);
    console.log(result);
  });
});

// 찜하면 찜 테이블에 추가
app.post('/likeListAdd', (req, res) => {
  console.log('/likeListAdd', req.body);
  var user_id = req.body.user_id;
  var thumbnail = req.body.thumbnail;
  var title = req.body.title;
  var addr = req.body.addr;
  var content_id = req.body.content_id;
  var startdate = req.body.startdate;
  var enddate = req.body.enddate;
  var sortation = req.body.sortation;

  const sqlQuery =
    'insert into user_like(user_id, thumbnail, title, addr, content_id, startdate, enddate, sortation) values (?,?,?,?,?,?,?,?);';
  db.query(
    sqlQuery,
    [user_id, thumbnail, title, addr, content_id, startdate, enddate, sortation],
    (err, result) => {
      res.send(result);
    }
  );
});

// 찜 해제하면 짐 테이블에서 삭제
app.post('/likeListDelete', (req, res) => {
  const content_id = req.body.content_id;

  const sqlQuery = 'DELETE FROM user_like WHERE content_id = ?;';
  db.query(sqlQuery, [content_id], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

//찜 여부 확인
app.post('/searchLike', (req, res) => {
  console.log('searchLike');
  var content_id = req.body.content_id;

  const sqlQuery = 'SELECT count(*) cnt FROM user_like where content_id=?;';
  db.query(sqlQuery, [content_id], (err, result) => {
    res.send(result);
  });
});

//찜 한 축제
app.post('/searchLikeFes', (req, res) => {
  console.log('searchLikeFes');
  var user_id = req.body.user_id;
  var sortation = 2;

  const sqlQuery =
    'SELECT user_id, thumbnail, title, addr, content_id, startdate, enddate, sortation FROM user_like where user_id=? and sortation=?;';
  db.query(sqlQuery, [user_id, sortation], (err, result) => {
    res.send(result);
  });
});

//찜 한 맛집
app.post('/searchLikeRes', (req, res) => {
  console.log('searchLikeRes');
  var user_id = req.body.user_id;
  var sortation = 3;

  const sqlQuery =
    'SELECT user_id, thumbnail, title, addr, content_id, startdate, enddate, sortation FROM user_like where user_id=? and sortation=?;';
  db.query(sqlQuery, [user_id, sortation], (err, result) => {
    res.send(result);
  });
});

//내가 쓴 글
app.post('/searchMyBoard', (req, res) => {
  console.log('searchMyBoard');
  var user_id = '';

  const sqlQuery =
    'SELECT board_title, board_content, board_date, board_image1 FROM board where user_id=?;';
  db.query(sqlQuery, [user_id], (err, result) => {
    res.send(result);
  });
});

//사용자 정보 수정
// app.post("/update", (req, res) => {
//   console.log("/update", req.body);
//   var title = req.body.article.board_title;
//   var content = req.body.article.board_content;
//   var num = req.body.article.board_num;

//   const sqlQuery =
//     "update BOARD_TBL set BOARD_TITLE=?, BOARD_CONTENT=?, BOARD_DATE=now() where board_num=?;";
//   db.query(sqlQuery, [title, content, num], (err, result) => {
//     res.send(result);
//     console.log("result=", result);
//   });
// });

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
