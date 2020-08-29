const DBHandler = require('../models/DBHandler'); 

class GuestCheck {

    constructor() {
        this.db = new DBHandler();
    }

    async guestCheck(car_number) {

        const db = this.db;
        let query;
        let query_result;

        query = `SELECT c_carnum, c_parkstart, c_parkfinish FROM cars WHERE c_carnum='${car_number}' ORDER BY c_parkstart DESC limit 1;`;
        query_result = await db.getData(query);
        console.log("결과2 "+ query_result);
        
        return query_result;

    }
}

module.exports = GuestCheck;