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

router.post('/addCloth', (req, res) => {
    var sql = $sql.user.addCloth;
    var params = req.body;
    console.log(1);
    console.log(params);
    conn.query(sql, [params.clothName,params.clothType,params.clothNum,params.clothPrice,params.clothDes,params.clothImg], function(err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          console.log(2);
            res.json({
              data:result
            });
        }
    })
});
module.exports = router;
