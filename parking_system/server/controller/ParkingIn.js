const DBHandler = require('../models/DBHandler'); 
const { NULL } = require('mysql2/lib/constants/types');

class Parking {

    constructor() {
        this.db = new DBHandler();
    }

    async checkInCar(car_number) {
        const db = this.db;
        let rns = 0;
        let query;
        let query2;
        let query3;
        let query_result;
        let query_result2;
        let query_result3;
        let intime = new Date();
        
        intime = intime.toISOString().slice(0, 19).replace('T', ' ');

        // 1. 기존에 입차 되었는지 정보 확인
        query = `SELECT * FROM cars WHERE c_carnum='${car_number}' order by c_parkstart DESC limit 1`;
        query_result = await db.getData(query);
        console.log("result1 "+query_result[0]);
        
        // 2. 입차된 기록이 없을 시
        if(query_result[0]==null){
            query2 = `INSERT INTO cars(c_carnum, c_parkstart) VALUES ('${car_number}', now())`;
            query_result2 = await db.getData(query2);
            console.log("result2 "+JSON.stringify(query_result2));
        } else if(query_result[0].C_ParkStart && query_result[0].C_ParkFinish) {
            //또 한 번 입차할 시
            query2 = `INSERT INTO cars(c_carnum, c_parkstart) VALUES ('${car_number}', now())`;
            query_result2 = await db.getData(query2);
            console.log("result3 "+JSON.stringify(query_result2));
        } else{
            //입차된 기록이 있을 시
            query3 = `Select c_parkstart from cars WHERE C_CarNum='${car_number}' AND C_ParkFinish is null ORDER BY c_parkstart DESC limit 1;`;
            query_result3 = await db.getData(query3);
            console.log("result4 "+JSON.stringify(query_result3));
        }

        if(query_result['affectedRows'] > 0 && query_result2['affectedRows'] > 0 && query_result3['affectedRows'] > 0) {
            rns = 1;
        }
        else {
            if(query_result[0]==null){
                console.log("result2 "+query_result2);
                return query_result2 = 0
            }else if(query_result[0].C_ParkStart && query_result[0].C_ParkFinish){
                console.log("result3 "+query_result2);
                return query_result2 = 0
            }else{
                console.log("result4 "+query_result3);
                return query_result3 = 2
            }
        }
        return rns;
    }

}

module.exports = Parking;