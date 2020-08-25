const DBHandler = require('../models/DBHandler'); 

class GuestCheck {

    constructor() {
        this.db = new DBHandler();
    }

    async parkinfo(parkinfo){
        const db = this.db;
        let rns = 0;
        let query;
        let query_result;
        query = `SELECT COUNT(*) - count(c_parkfinish) AS count from cars where C_ParkFinish is null;`;
        query_result = await db.getData(query);
        
        parkinfo = query_result;
        if(query_result['affectedRows'] > 0) {
            rns = 1;
        }
        else {
            console.log(query_result);
            return parkinfo;
        }
        return rns;
    }
}

module.exports = GuestCheck;