function Register(){
    username = document.getElementById('username');
    password = document.getElementById('password');

    var mysql = require('mysql');
    var con = mysql.createConnection({

    host: "192.168.64.52",
    user: "root",
    password: "root",
    database: "Project_QT"
    });

    request = con.query("SELECT COUNT(*) FROM Users WHERE username =" + username); 

    console.log(username + " / " + password);
}