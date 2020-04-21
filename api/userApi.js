const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');
// 增加用户
router.post('/addUser', (req, res) => {
  let sqlStr = sql.user.add;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.name, params.age], (err1, result1) => {
    if (err1) {
      res.json(err1);
    } else {
      res.json(result1);
    }
  });
  conn.end();
});
// 新增用户时查询用户是否已经存在
router.post('/selectAccurateUser', (req, res) => {
  let sqlStr = sql.user.selectAccurate;
  let params = req.body;
  let conn = new DBHelper().getConn();
  // 精确查询用户
  conn.query(sqlStr, [params.name], (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
});
// 查询用户
router.post('/selectUser', (req, res) => {
  let sqlStr = sql.user.select;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.name], (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
  conn.end();
});

// 更新用户
router.post('/updateUser', (req, res) => {
  let sqlStr = sql.user.update;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.name, params.age, params.id], (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
  conn.end();
});

// 删除用户
router.post('/deleteUser', (req, res) => {
  let sqlStr = sql.user.delete;
  let params = req.body;
  let conn = new DBHelper().getConn();
  conn.query(sqlStr, [params.id], (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
  conn.end();
});

module.exports = router;