// 数据库连接助手
const mysql = require('mysql');

class DBHelper {
  getConn () {
    let conn = mysql.createConnection({
      // 数据库连接配置
      host: "127.0.0.1",
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'test2' // 数据库名称
    })
    return conn;
  }
};
module.exports = DBHelper;