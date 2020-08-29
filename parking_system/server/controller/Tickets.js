const DBHandler = require('../models/DBHandler'); 

class Tickets {

    constructor() {
        this.db = new DBHandler();
    }

    async Tickets(carnum, method, userprice) {
        const db = this.db;
        let rns = 0;
        let query1;
        let query2;
        let query_result1;
        let query_result2;
        let query_result3;
        userprice = parseInt(userprice);

        query1 = `SELECT t_carnum FROM tickets WHERE t_carnum = '${carnum}'`;
        query_result1 = await db.getData(query1);
        console.log(query_result1);

        if(query_result1[0]==null && userprice != 0 && userprice > 0){
            query2 = `INSERT INTO tickets(t_carnum, t_method, t_point, t_regdate) VALUES ('${carnum}', '${method}', '${userprice}', now() )`;
            query_result2 = await db.putData(query2);
        } else {
            query_result3 = 4;
        }

        if(query_result1['affectedRows'] > 0 && query_result2['affectedRows'] > 0) {
            rns = 1;
        }
        else {

            if(query_result1[0] != null){
                console.log("결과1 "+JSON.stringify(query_result1));
                return query_result1 = 2;

            } else if(query_result1[0]==null && userprice != 0 && userprice > 0){
                console.log("결과2 "+JSON.stringify(query_result2));
                return query_result2 = 3;
            } else {
                console.log("뭐임");
                return query_result3 = 4;
            }
        }
        return rns;
    }

    async TicketsAdd(carnum, method, addprice) {
        const db = this.db;
        let rns = 0;
        let query1;
        let query2;
        let query_result1;
        let query_result2;
        let query_result3;
        addprice = parseInt(addprice);

        query1 = `SELECT t_carnum FROM tickets WHERE t_carnum = '${carnum}'`;
        query_result1 = await db.getData(query1);
        console.log(query_result1);

        if(query_result1[0] != null && addprice != 0 && addprice > 0){
            query2 = `UPDATE tickets SET t_point = t_point+'${addprice}', t_method = '${method}', t_regdate = now() WHERE t_carnum = '${carnum}'`;
            query_result2 = await db.putData(query2);
        } else {
            query_result3 = 4;
        }

        if(query_result1['affectedRows'] > 0 && query_result2['affectedRows'] > 0) {
            rns = 1;
        }
        else {
            if (query_result1[0] == null){
                console.log('티켓 1' + query_result1);
                return query_result1 = 2;
            } else if(query_result1[0] != 0  && addprice != 0 && addprice > 0){
                console.log('티켓 2' + query_result2);
                return query_result2 = 3;
            } else {
                console.log('티켓 3');
                return query_result3 = 4;
            }
        }
        return rns;
    }

}


module.exports = Tickets;