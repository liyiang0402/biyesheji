var models = require('./db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('./sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};


//获取所有服装
router.get('/getCloth/:uid', (req, res) => {
    var sql = $sql.user.getCloth;
    var params = req.params.uid;
    conn.query(sql,[params] , function(err, result) {
        if (err) {
        }
        if (result) {
            res.json({
              data:result
            });
        }
    })
});
//获得用户信息
router.get('/getUser/:uid', (req, res) => {
    var sql = $sql.user.getUser;
    var uid = req.params.uid;
    conn.query(sql, [uid], function(err, result) {
        if (err) {
        }
        if (result) {
            res.json({
              data:result
            });
        }
    })
});
//删除服装
router.get('/deleteCloth/:cid', (req, res) => {
    var sql = $sql.user.deleteCloth;
    var params = req.params.cid;
    conn.query(sql, [params], function(err, result) {
        if (err) {
        }
        if (result) {
            res.json({
              success:200
            });
        }
    })
});
//获得cid的服装
router.get('/getaCloth/:cid', (req, res) => {
    var sql = $sql.user.selectCloth;
    var params = req.params.cid;
    conn.query(sql, [params], function(err, result) {
        if (err) {
        }
        if (result) {
            res.json({
              data:result
            });
        }
    })
});
//注册
router.post('/addUser', (req, res) => {
    var sql = $sql.user.addUser;
    var params = req.body;
    conn.query(sql, [params.userName,params.password,params.phoneNumber], function(err, result) {
        if (err) {
        }
        if (result) {
            res.json({
              data:{}
            });
        }
    })
});
// 登录
router.post('/getPassword', (req, res) => {
    var sql = $sql.user.getPassword;
    var params = req.body;
    conn.query(sql,[params.userName,params.password], function(err, result) {
        if (err) {
        }
        if (result) {
            res.json({
              data:result
            });
        }
    })
});
//添加服装
router.post('/addCloth', (req, res) => {
    var sql = $sql.user.addCloth;
    var params = req.body;
    conn.query(sql, [params.clothName,params.clothType,params.clothNum,params.clothPrice,params.clothDes,params.userlist_uid], function(err, result) {
        if (err) {
        }
        if (result) {
            res.json({
              data:result
            });
        }
    })
});
router.post('/editCloth/:cid', (req, res) => {
    var sql = $sql.user.editCloth;
    var params = req.body;
    var cid = req.params.cid;
    conn.query(sql, [params.clothName,params.clothType,params.clothNum,params.clothPrice,params.clothDes,cid], function(err, result) {
        if (err) {
        }
        if (result) {
            res.json({
              data:result
            });
        }
    })
});
router.post('/editUser/:uid', (req, res) => {
    var sql = $sql.user.editUser;
    var params = req.body;
    var uid = req.params.uid;
    conn.query(sql, [params.userName,params.phoneNumber,uid], function(err, result) {
        if (err) {
        }
        if (result) {
            res.json({
              data:result
            });
        }
    })
});
module.exports = router;
