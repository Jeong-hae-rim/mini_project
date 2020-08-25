const DBHandler = require('../models/DBHandler');


class TimeController {

    constructor() {
        this.db = new DBHandler();
    }

    async timeCheck(car_number){

        if(car_number){
            const db = this.db;
            let rns = 0;
            let query;
            let query2;
            let query_result;
            let query_result2;

            query = `SELECT c_carnum, c_parkstart, c_parkfinish, TIME_FORMAT(sec_to_time(c_parkfinish-c_parkstart), '%H:%i:%s') AS c_totaltime FROM cars where C_CarNum = '${car_number}' order by c_parkstart DESC limit 1`;
            query_result = await db.getData(query);

            query2 = `update cars set c_totaltime=TIME_FORMAT(sec_to_time(c_parkfinish-c_parkstart), "%H:%i:%s") where c_carnum = '${car_number}'`;
            query_result2 = await db.getData(query2);
 
            if(query_result['affectedRows'] > 0 && query_result2['affectedRows'] > 0) {
                rns = 1;
            }
            else {
                console.log(query_result);
                console.log(query_result2);
            }
            return query_result;
        } else {
            return query_result = 0;
        }
    }
}

module.exports = TimeController;