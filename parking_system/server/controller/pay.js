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
            let intime = new Date();

            query = `SELECT TIME_FORMAT((c_parkfinish-c_parkstart), '%H:%i:%s') AS total FROM cars WHERE c_carnum = '${car_number}' order by c_parkstart DESC limit 1`;
            query_result = await db.getData(query);
            
            console.log(query_result[0].total);

            var hr = query_result[0].total
            var hms = hr;   // value값을 넣는다.
            var a = hms.split(':'); // :으로 찢는다.

            // 배열로. 0-h, 1-m, 2-s, 분은 60초이고 시는 60분.
            var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
            var price = (seconds/60)*20; // 분당 20원이므로 초에서 60을 나누고 20을 곱함

            intime = intime.toISOString().slice(0, 19).replace('T', ' ');

            if(query_result['affectedRows'] > 0) {
                rns = 1;
            }
            else {
                console.log(price+"원");
                console.log(query_result);
            }
            return price+"원";
        }
    }

    async payMoney(carnum, method, userPrice) {

        if(userPrice) {
            const db = this.db;
            let rns = 0;
            let query;
            let query_result;
            let intime = new Date();
            intime = intime.toISOString().slice(0, 19).replace('T', ' ');

            query = `INSERT INTO payments (p_carnum, p_method, p_totalprice, p_regdate) VALUES ('${carnum}', '${method}', '${userPrice}', '${intime}')`;
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