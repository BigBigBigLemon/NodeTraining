const mysql = require('mysql');

// 创建连接对象
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '111111',
  port: '3306',
  database: 'myblog',
});

// 开始连接
con.connect();

// 关闭连接
con.end();
