var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "qrs9yep1ere6lkdt",
  password: "ojf5wsew0qpktqm8",
  database: "yg2x9f6m2g2eszyl"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;