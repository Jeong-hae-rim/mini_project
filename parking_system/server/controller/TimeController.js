const DBHandler = require('../models/DBHandler');


class TimeController {

    constructor() {
        this.db = new DBHandler();
    }

    async timeCheck(car_number){
        const db = this.db;
        let rns = 0;
        let query;
        let query_result;

        console.log('들어옴?3');

        query = `SELECT c_carnum, c_parkstart, c_parkfinish, TIME_FORMAT((c_parkfinish-c_parkstart), '%H:%i:%s') AS c_totaltime FROM cars where C_CarNum = '${car_number}' order by c_parkstart DESC limit 1`;
        query_result = await db.getData(query);

        if(query_result['affectedRows'] > 0) {
            rns = 1;
            console.log('들어옴?4');
        }
        else {
            console.log(query_result);
        }
        return query_result;
    }
}

module.exports = TimeController;