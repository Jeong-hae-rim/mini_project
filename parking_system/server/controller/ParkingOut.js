const DBHandler = require('../models/DBHandler'); 

class Parking {

    constructor() {
        this.db = new DBHandler();
    }

    async checkOutCar(car_number) {

        if(car_number) {
            const db = this.db;
            let rns = 0;
            let query;
            let query2;
            let query_result;
            let query_result2;
            let intime = new Date();

            intime = intime.toISOString().slice(0, 19).replace('T', ' ');

            query = `SELECT c_carnum FROM cars WHERE c_carnum = '${car_number}'`;
            query_result = await db.getData(query);
            
            query2 = `UPDATE cars SET c_parkfinish = now() WHERE c_carnum = '${car_number}'`;
            query_result2 = await db.getData(query2);

            if(query_result['affectedRows'] > 0 && query_result2['affectedRows'] > 0) {
                rns = 1;
            }
            else {
                console.log(query_result);
                console.log(query_result2);
            }
            return rns;
        }
    }
}

module.exports = Parking;