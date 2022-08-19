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
    Credential: true,
}

app.use(cors(corsOptions));

const db = mysql.createPool({
    host: "192.168.21.197",
    user: "pesta",
    password: "Pesta123",
    database: "first",
});

app.post("/join", (req, res) => {
    console.log("/join", req.body);
    var id = req.body.id;
    var pw = req.body.pw;
    var email = req.body.email;
    var name = req.body.name;
    var nickname = req.body.nickname;

    const sqlQuery = "insert into user(user_id, user_pw, user_email, user_name, user_nickname) values (?,?,?,?,?);";
    db.query(sqlQuery, [id, pw, email, name, nickname], (err, result) => {
        res.send(result);
    });
});

app.post("/login", (req, res) => {
    console.log("/login", req.body);
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
    
    const sqlQuery = "select f_contentid,f_title,f_thumbnail,f_startdate,f_enddate from festival where f_areacode = ?;"
    db.query(sqlQuery,[f_areacode],(err,result) => {
        res.send(result)
    })
})

app.listen(PORT, () => {
console.log(`running on port ${PORT}`);
});