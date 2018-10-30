var mysql = require("mysql");
var connection;


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'burgers_db'
        });
    };
connection.connect((err) => {
    if (err){
        console.error("error while connecting: "+ err.stack);
        return
    }
    console.log("connected as id: " + connection.threadId);
})

//exports the connetion for ORM

module.exports = connection;