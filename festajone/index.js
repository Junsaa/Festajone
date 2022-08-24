const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.port || 8008;
const cors = require('cors');
const iconv = require('iconv-lite');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: '*',
  Credential: true
};

app.use(cors(corsOptions));

const db = mysql.createPool({
  host: 'localhost',
  user: 'pesta',
  password: 'Pesta123',
  database: 'first'
});

const multer = require('multer');
const path = require('path');
const fs = require('fs');

try {
  fs.readdirSync('userimgFolder');
} catch (error) {
  console.error('userimgFolder 폴더가 없어 userimgFolder 폴더를 생성합니다.');
  fs.mkdirSync('userimgFolder');
}

const userimg_upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'userimgFolder/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(
        null,
        path.basename(iconv.decode(file.originalname, 'utf-8').toString(), ext) + Date.now() + ext
      );
    }
  }),
  limits: { fileSize: 10 * 1024 * 1024 }
});

// 이미지가 저장된 경로를 static으로 지정하면 불러올 수 있다.
app.use('/userimgFolder', express.static('userimgFolder'));

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

// app.post('/searchfestival', (req, res) => {
//   console.log('searchfestival');
//   var f_areacode = parseInt(req.body.f_areacode);

//   const sqlQuery =
//     'select f_contentid,f_title,f_thumbnail,f_startdate,f_enddate, f_areacode from festival where f_areacode = ? order by f_startdate;';
//   db.query(sqlQuery, [f_areacode], (err, result) => {
//     // console.log(err);
//     // console.log(result);
//     res.send(result);
//   });
// });

//축제 리스트
app.post('/searchfestival', (req, res) => {
  console.log('searchfestival');
  var f_areacode = parseInt(req.body.f_areacode);
  console.log(f_areacode);

  const sqlQuery =
    'select f_contentid,f_title,f_thumbnail,f_startdate,f_enddate, f_areacode from festival where f_areacode = ? order by f_startdate;';
  db.query(sqlQuery, [f_areacode], (err, result) => {
    // console.log(err);
    // console.log(result);
    res.send(result);
  });
});

//축제 리스트 오늘 날짜 기준으로 가져오기
app.post('/sortrecent', (req, res) => {
  console.log('sortrecent');
  var f_areacode = parseInt(req.body.f_areacode);
  var today = req.body.today;

  const sqlQuery =
    'select f_contentid,f_title,f_thumbnail,f_startdate,f_enddate from festival where f_areacode = ? and f_startdate >=? order by f_startdate;';
  db.query(sqlQuery, [f_areacode, today], (err, result) => {
    res.send(result);
  });
});
//맛집 리스트
app.post('/searchrestaurant', (req, res) => {
  console.log('searchrestaurant');
  var r_areacode = parseInt(req.body.r_areacode);
  console.log(r_areacode);

  const sqlQuery =
    'select r_contentid,r_title,r_thumbnail,r_addr1 from restaurant where r_areacode= ?;';
  db.query(sqlQuery, [r_areacode], (err, result) => {
    console.log(result);
    console.log(err);
    res.send(result);
  });
});

// 축제 상세 정보 가져오기
app.post('/searchFestivalDetail', (req, res) => {
  // console.log('searchFestivalDetail');
  var content_id = req.body.content_id;

  const sqlQuery =
    'SELECT f_d_contentid, f_d_title, f_d_tel, f_d_telname, f_d_homepage, f_d_image, f_d_addr, f_d_mapx, f_d_mapy, f_d_startdate, f_d_enddate, f_d_pverview, sortation,f_d_areacode FROM festival_detail where f_d_contentid=?;';
  db.query(sqlQuery, [content_id], (err, result) => {
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
  console.log('맛집 지역', areacode);

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
  var areacode = req.body.areacode;

  const sqlQuery =
    'insert into user_like(user_id, thumbnail, title, addr, content_id, startdate, enddate, sortation, areacode) values (?,?,?,?,?,?,?,?,?);';
  db.query(
    sqlQuery,
    [user_id, thumbnail, title, addr, content_id, startdate, enddate, sortation, areacode],
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
    'SELECT user_id, thumbnail, title, addr, content_id, startdate, enddate, sortation, areacode FROM user_like where user_id=? and sortation=?;';
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

//사용자 비밀번호 일치 여부
app.post('/pwcheck', (req, res) => {
  console.log('/pwcheck', req.body);
  var user_id = req.body.user_id;

  const sqlQuery = 'select user_pw from user where user_id=?;';
  db.query(sqlQuery, [user_id], (err, result) => {
    res.send(result);
    console.log('result=', result);
  });
});

//사용자 정보 수정
app.post('/updateuser', userimg_upload.single('image'), (req, res) => {
  console.log('/updateuser', req.file, req.body);
  var user_id = req.body.user_id;
  var user_name = req.body.user_name;
  var user_nickname = req.body.user_nickname;
  var user_email = req.body.user_email;

  const sqlQuery =
    'update user set user_name=?, user_nickname=?, user_email=?,profile_image=? where user_id=?;';
  db.query(
    sqlQuery,
    [user_name, user_nickname, user_email, req.file.filename, user_id],
    (err, result) => {
      res.send(result);
      console.log('result=', result);
    }
  );
});

//사용자비밀번호 수정
app.post('/passwordupdate', (req, res) => {
  console.log('/passwordupdate', req.body);
  var user_id = req.body.user_id;
  var user_pw = req.body.user_pw;

  const sqlQuery = 'update user set user_pw=? where user_id=?;';
  db.query(sqlQuery, [user_pw, user_id], (err, result) => {
    res.send(result);
    console.log('result=', result);
  });
});

//로그인한 사용자 정보 가져오기
app.post('/user_login', (req, res) => {
  console.log('/user_login', req.body);
  var user_id = req.body.user_id;

  const sqlQuery =
    'select user_name, user_nickname, user_email, profile_image from user where user_id=?;';
  db.query(sqlQuery, [user_id], (err, result) => {
    res.send(result);
    console.log('result=', result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
