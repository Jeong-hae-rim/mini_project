const DBHandler = require('../models/DBHandler'); 

class Member {

    constructor() {
        this.db = new DBHandler();
    }

    async memberCheck(name, apt) {

        const db = this.db;
        let rns = 0;
        let query;
        let query_result;
        let query_result2;
        
        query = `SELECT U.u_name, U.u_phonenum, U.u_aptnum, U.u_adddate, M.m_carnum FROM users U, members M WHERE U.uid = M.uid AND U.u_name = '${name}' AND U.u_aptnum= '${apt}'`;
        query_result = await db.getData(query);

        console.log(query_result[0].u_name);

        if(query_result['affectedRows'] > 0 && query_result2['affectedRows'] > 0) {
            rns = 1;
        }
        else {
            console.log(query_result);
            if(query_result[0].u_name==null){
                return query_result2 = 0;
            } else {
                return query_result;
            }
        }
        return rns;
    }
}

module.exports = Member;