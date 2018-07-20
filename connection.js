var mysql = require('mysql');

// First you need to create a connection to the db
var connection = mysql.createConnection({
  host: "192.168.83.17",
  user: "homestead",
  password: "secret",
  database : 'homestead-lyferx-dev'
});

connection.connect(function(err){
  if(err){
    console.log('hii ' + JSON.stringify(err));
    return;
  }
  console.log('Connection established');
});
module.exports = connection;