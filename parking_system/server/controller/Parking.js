const DBHandler = require('../models/DBHandler'); 

class Parking {

    constructor() {
        this.db = new DBHandler();
    }

    async checkInCar(car_number, isRegistered) {
        const db = this.db;
        let rns = 0;
        let query_result;
        let query;
        let intime = new Date();
        
        intime = intime.toISOString().slice(0, 19).replace('T', ' ');

        if(isRegistered) {
            query = `INSERT INTO records(car_number, in_time) VALUES ('${car_number}', '${intime}')`;
        }
        else {
            query = `INSERT INTO guest_records(car_number, in_time) VALUES ('${car_number}', '${intime}')`;

        }
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

module.exports = Parking;