// sql语句
var sqlMap = {
    // 用户
    user: {
        getCloth: 'select * from clothinglist',
        addCloth: 'insert into clothinglist (clothName, clothType, clothNum,clothPrice,clothDes) values (?,?,?,?,?)',
        selectCloth : 'select * from clothinglist where cid = ?',
        editCloth : 'update clothinglist set clothName = ?,clothType = ? ,clothNum = ?,clothPrice = ?,clothDes= ? where cid =?',
        deleteCloth: 'delete from clothinglist where cid= ? ',
        getPassword: 'select count(*) from userlist where userName= ? && password = ?'
    }
}

module.exports = sqlMap;
