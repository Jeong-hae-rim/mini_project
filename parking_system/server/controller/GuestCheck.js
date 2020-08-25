const DBHandler = require('../models/DBHandler'); 

class GuestCheck {

    constructor() {
        this.db = new DBHandler();
    }

    async guestCheck(car_number) {

        const db = this.db;
        let rns = 0;
        let query;
        let query2;
        let query_result;
        let query_result2;
        
        query = `SELECT U.u_name, U.u_phonenum, U.u_aptnum, U.u_adddate, M.m_carnum FROM users U, members M WHERE U.uid = M.uid AND M.m_carnum = '${car_number}'`;
        query_result = await db.getData(query);
        
        query2 = `SELECT c_carnum, c_parkstart, c_parkfinish FROM cars WHERE c_carnum='${car_number}'`;
        query_result2 = await db.getData(query2);

        if(query_result['affectedRows'] > 0 && query_result2['affectedRows'] > 0) {
            rns = 1;
        }
        else {
            console.log(query_result);
            console.log(query_result2);
            if(query=[]){
                console.log(query_result2);
                return query_result2;
            }
        }
        return rns;
    }
}

module.exports = GuestCheck;