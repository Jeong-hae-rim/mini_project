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
            let query_result;

            query = `SELECT c_carnum FROM cars WHERE c_carnum = '${car_number}'`;
            query_result = await db.getData(query);
            
            if(query_result['affectedRows'] > 0) {
                rns = 1;
            }
            else {
                console.log(query_result);
            }
            return rns;
        }
    }
}

module.exports = Parking;