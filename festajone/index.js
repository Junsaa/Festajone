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
    host: "localhost",
    user: "root",
    password: "75303306",
    database: "first",
    ssl: false
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

app.post("/searchfestival" , (req,res) =>{
    console.log("searchfestival")
    var f_areacode = parseInt(req.body.f_areacode)
    console.log(f_areacode)
    
    const sqlQuery = "select f_contentid,f_title,f_thumbnail,f_startdate,f_enddate from festival where f_areacode = ? order by f_startdate;"
    db.query(sqlQuery,[f_areacode],(err,result) => {
      // console.log(err);
      // console.log(result);
      res.send(result);
    })
})

app.post("/sortrecent", (req,res) => {
  console.log("sortrecent")
  var f_areacode = parseInt(req.body.f_areacode)
  var today = req.body.today

  const sqlQuery = "select f_contentid,f_title,f_thumbnail,f_startdate,f_enddate from festival where f_areacode = ? and f_startdate >=? order by f_startdate;"
  db.query(sqlQuery,[f_areacode, today],(err, result) => {
    res.send(result)
  })
})

app.post("/searchrestaurant", (req,res) => {
  console.log('searchrestaurant')
  var r_areacode = parseInt(req.body.r_areacode)
  console.log(r_areacode)

  const sqlQuery = "select r_contentid,r_title,r_thumbnail,r_addr1 from restaurant where r_areacode= ?;"
  db.query(sqlQuery,[r_areacode],(err,result) => {
    console.log(result)
    console.log(err)
    res.send(result)
  })
})

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
