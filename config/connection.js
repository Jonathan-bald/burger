var mysql = require("mysql");

//Basic connetion setup

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
})

connection.connect((err) => {
    if (err){
        console.error("error while connecting: "+ err.stack);
        return
    }
    console.log("connected as id: " + connection.threadId);
})

//exports the connetion for ORM
module.exports = connection;