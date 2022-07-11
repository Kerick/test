var mysql = require('mysql');

var con = mysql.createConnection({
    host: "192.168.100.123",
    user: "admin",
    password: "password",
    database: "ultra"
});

con.connect(function(err){
    if (err) throw err;
    console.log("[MYSQL] : *** Connected ***");
    sql="select * from persons";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("[MySQL] : Create successed");
    });
});