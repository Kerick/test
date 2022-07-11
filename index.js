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
    sql="create table test_1(id bigint(20) NOT NULL AUTO_INCREMENT,lastName varchar(255) NOT NULL,firstName varchar(255) NOT NULL,gender varchar(10) NOT NULL,age int(10) NOT NULL,weight_kg int(8),height_cm int(8),country varchar(100) NOT NULL,add_Road varchar(100),add_Tumbon varchar(100),add_Aumper varchar(100),add_Jungwatt varchar(100),add_postCode varchar(10),PRIMARY KEY(id,age))ENGINE=InnoDB PARTITION BY RANGE(age)(PARTITION p0 VALUES LESS THAN (19),PARTITION p1 VALUES LESS THAN (36),PARTITION p2 VALUES LESS THAN (52),PARTITION p3 VALUES LESS THAN (60),PARTITION max VALUES LESS THAN MAXVALUE);";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Create successed");
    });
});