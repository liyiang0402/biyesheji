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

// 增加获取服装数据接口
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
router.get('/getCloth', (req, res) => {
    var sql = $sql.user.getCloth;
    conn.query(sql, 'clothinglist', function(err, result) {
        if (err) {
        }
        if (result) {
            res.json({
              data:result
            });
        }
    })
});
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

router.get('/getCloth/:cid', (req, res) => {
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

router.post('/addCloth', (req, res) => {
    var sql = $sql.user.addCloth;
    var params = req.body;
    conn.query(sql, [params.clothName,params.clothType,params.clothNum,params.clothPrice,params.clothDes], function(err, result) {
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
    console.log(params);
    console.log(cid);
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
module.exports = router;
