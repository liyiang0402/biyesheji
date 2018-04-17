// sql语句
var sqlMap = {
    // 用户
    user: {
        getCloth: 'select * from clothinglist',
        addCloth: 'insert into clothinglist (clothName, clothType, clothNum,clothPrice,clothDes) values (?,?,?,?,?)',
        selectCloth : 'select * from clothinglist where cid = ?',
        updateCloth : 'update clothinglist set clothName = ?,clothType = ? ,clothNum = ?,clothPrice = ?,clothDes= ? where cid =? values (?,?,?,?,?)',
        deleteCloth: 'delete from clothinglist where cid= ? '
    }
}

module.exports = sqlMap;
