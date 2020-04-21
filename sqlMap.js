// sql语句
var sqlMap = {
  user: {
    // 添加用户
    add: `insert into user(name, age) values (?, ?)`,
    // 查询用户模糊
    select: `select * from user where name like "%"?"%"`,
    // 查询用户精确
    selectAccurate: `select name from user where name = ?`,
    // 更新用户
    update: 'update user set name = ?, age = ? where id = ?',
    // 删除用户
    delete: 'delete from user where id = ?'
  }
}

module.exports = sqlMap;