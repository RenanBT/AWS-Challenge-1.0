const mysql = require('mysql')

const connection = mysql.createConnection ({
host: 'localhost',
port: 3306,
database: 'Local instance MySQL80',
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

});