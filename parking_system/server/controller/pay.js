const DBHandler = require('../models/DBHandler'); 

class Pay {

    constructor() {
        this.db = new DBHandler();
    }

    async checkOutCar(car_number) {

        if(car_number) {
            const db = this.db;
            let rns = 0;
            let query;
            let query2;
            let query3;
            let query_result;
            let query_result2;
            let query_result3;
            let intime = new Date();

            query = `SELECT TIME_FORMAT(SEC_TO_TIME(c_parkfinish-c_parkstart), '%H:%i:%s') AS total FROM cars WHERE c_carnum = '${car_number}' order by c_parkstart DESC limit 1`;
            query_result = await db.getData(query);
            
            query3 = `SELECT cost FROM charge ORDER BY updatedate DESC LIMIT 1;`;
            query_result3 = await db.putData(query3);

            console.log(query_result[0].total);

            var hr = query_result[0].total
            var hms = hr;   // value값을 넣는다.
            var a = hms.split(':'); // :으로 찢는다.

            // 배열로. 0-h, 1-m, 2-s, 분은 60초이고 시는 60분.
            var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
            var price = Math.round((seconds/60)*query_result3[0].cost); // 분당 20원이므로 초에서 60을 나누고 20을 곱함

            intime = intime.toISOString().slice(0, 19).replace('T', ' ');

            query2 = `SELECT U.u_name AS name, M.m_carnum FROM users U, members M WHERE U.uid = M.uid AND M.m_carnum = '${car_number}'`;
            query_result2 = await db.getData(query2);

            console.log("result2"+query_result2[0]);

            var result = {
                price : price+'원',
                member : query_result2[0]
            }

            if(query_result['affectedRows'] > 0) {
                rns = 1;
            }
            else {
                console.log(result);
                return result;
            }
            return rns;
        }
    }

    async payMoney(carnum, method, userPrice) {

        if(userPrice) {
            const db = this.db;
            let query;
            let query2;
            let query_result;
            let query_result2;
            let intime = new Date();
            intime = intime.toISOString().slice(0, 19).replace('T', ' ');

            userPrice = parseInt(userPrice);
            
            if(method != 'point'){
                query = `INSERT INTO payments (p_carnum, p_method, p_totalprice, p_regdate) VALUES ('${carnum}', '${method}', '${userPrice}', '${intime}')`;
                query_result = await db.getData(query);
                console.log('포인트아님')
                return query_result;
            } else {
                query2 = `UPDATE tickets SET t_point = (t_point-'${userPrice}') where t_carnum = '${carnum}'`; 
                query_result2 = await db.putData(query2);
                console.log('포인트임')
                return query_result2;
            }
        }
    }
}

module.exports = Pay;