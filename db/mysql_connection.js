const mysqlJ = require("mysql2");

const pool = mysqlJ.createPool({
  host: process.env.MYSQL_HOSTJ,
  user: process.env.MYSQL_USERJ,
  database: process.env.DB_NAMEJ,
  password: process.env.DB_PASSWDJ,
  waitForConnections: true,
  connectionLimit: 10,
});

const connection = pool.promise();

module.exports = connection;
