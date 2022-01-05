const mysql = require('mysql')

const connection = mysql.createConnection ({
host: 'localhost',
port: 3306,
database: 'eldorado_server',
user: 'root',
password: 'Bem280919'

});

connection.connect(function (err){
if(err) {
    console.log("Error occured while connecting")
}
else{
    console.log("Mysql connection successful");
}

var sql = "INSERT INTO devices ( Category, Color, partNumber) VALUES {{Device}}";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("1 record inserted");  
})

var sql = "INSERT INTO categ ( Name ) VALUES {{Category}}";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("1 record inserted"); 

})
 });