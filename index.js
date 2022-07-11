var mysql = require('mysql');

var con = mysql.createConnection({
    host: "192.168.100.123",
    user: "admin",
    password: "password"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!!");
});