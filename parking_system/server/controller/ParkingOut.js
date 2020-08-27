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
            let query_result3;
            let intime = new Date();

            intime = intime.toISOString().slice(0, 19).replace('T', ' ');

            //1. 기존에 출차된 정보가 있는지 확인
            query = `SELECT c_parkfinish FROM cars WHERE c_carnum = '${car_number}' ORDER BY c_parkstart DESC limit 1;`;
            query_result = await db.getData(query);
            console.log("result1 "+JSON.stringify(query_result));

            //2. 출차된 기록이 없을 시
            if(query_result[0].c_parkfinish == null){
                query2 = `UPDATE cars SET c_parkfinish = now() WHERE c_carnum = '${car_number}'`;
                query_result2 = await db.getData(query2);
                console.log("result2 "+JSON.stringify(query_result2));
            } else {
                //3. 출차된 기록이 있을 시
                query_result3 = 2;
                console.log(query_result3);
                console.log("result3 "+query_result3);
            }

            if(query_result['affectedRows'] > 0 && query_result2['affectedRows'] > 0) {
                rns = 1;
            }
            else {
                if(query_result[0].c_parkfinish == null){
                    console.log(query_result2);
                    return query_result2 = 0;
                }else{
                    console.log(query_result3);
                    return query_result3 = 2;
                }
                
            }
            return rns;
        }     
    }
}

module.exports = Parking;