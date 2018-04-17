// sql语句
var sqlMap = {
    // 用户
    user: {
        getCloth: 'select * from clothinglist',
        addCloth: 'insert into clothinglist (clothName, clothType, clothNum,clothPrice,clothDes,clothImg) values (?,?,?,?,?,?)',
        selectCloth : 'select * from clothinglist where cid = ?',
    }
}

module.exports = sqlMap;
