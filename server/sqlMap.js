// sql语句
var sqlMap = {
    // 用户
    user: {
        getCloth: 'select * from clothinglist where userlist_uid = ?',
        addCloth: 'insert into clothinglist (clothName, clothType, clothNum,clothPrice,clothDes,userlist_uid)  values (?,?,?,?,?,?)',
        selectCloth : 'select * from clothinglist where cid = ?',
        editCloth : 'update clothinglist set clothName = ?,clothType = ? ,clothNum = ?,clothPrice = ?,clothDes= ? where cid =?',
        deleteCloth: 'delete from clothinglist where cid= ? ',
        getPassword: 'select uid from userlist where userName= ? && password = ?',
        addUser:'insert into userlist (userName, password, phoneNumber) values (?,?,?)',
        getUser: 'select * from userlist where uid = ?',
        editUser: 'update userlist set userName = ?,phoneNumber = ?  where uid =?'
    }
}

module.exports = sqlMap;
