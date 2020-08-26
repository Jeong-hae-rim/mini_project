const DBHandler = require('../models/DBHandler'); 

class Admin {

    constructor() {
        this.db = new DBHandler();
    }

    async CheckAdmin(id, pw){
        const db = this.db;
        let rns = 0;
        let query;
        let query_result;
        query = `SELECT A.a_id, A.a_pass FROM users U, admins A WHERE U.uid = A.uid AND A.a_id = '${id}' AND A.a_pass = '${pw}'`;
        query_result = await db.getData(query);
        
        if(query_result['affectedRows'] > 0) {
            rns = 1;
        }
        else {
            console.log(query_result);
            if(!query){
                return query_result = 0;
            } 
            return query_result;
        }
        return rns;
    }

    async SelectUser(){
        const db = this.db;
        let rns = 0;
        let query;
        let query2;
        let query3;
        let query4;
        let query5;
        let query6;
        let query_result;
        let query_result2;
        let query_result3;
        let query_result4;
        let query_result5;
        let query_result6;

        query = `SELECT * FROM users`;
        query_result = await db.getData(query);

        query2 = `SELECT * FROM cars`;
        query_result2 = await db.getData(query2);

        query3 = `SELECT * FROM contacts`;
        query_result3 = await db.getData(query3);

        query4 = `SELECT * FROM payments`;
        query_result4 = await db.getData(query4);

        query5 = `SELECT * FROM tickets`;
        query_result5 = await db.getData(query5);

        query6 = `SELECT U.u_name AS name, U.u_aptnum AS aptnum, M.m_carnum AS carnum FROM users U, members M WHERE U.uid = M.uid`;
        query_result6 = await db.getData(query6);

        let users = {};
        let arr = [];
        for (var i=0; i<query_result.length; i++){
            users = {
                id: JSON.stringify(query_result[i].Uid).replace(/\"|T/g, ""),
                name: JSON.stringify(query_result[i].U_name).replace(/\"|T/g, ""),
                phonenum: JSON.stringify(query_result[i].U_PhoneNum).replace(/\"|T/g, ""),
                code: JSON.stringify(query_result[i].U_Code).replace(/\"|T/g, ""),
                aptnum: JSON.stringify(query_result[i].U_AptNum).replace(/\"|T/g, ""),
                adddate: JSON.stringify(query_result[i].U_AddDate).toString().slice(0, 20).replace(/\"|T/g, " ")
            }

            arr.push(users);
        }

        let cars = {};
        let arr2 = [];
        for (var i=0; i<query_result2.length; i++){
            cars = {
                id: JSON.stringify(query_result2[i].Cid).replace(/\"|T/g, ""),
                carnum: JSON.stringify(query_result2[i].C_CarNum).replace(/\"|T/g, ""),
                parkstart: JSON.stringify(query_result2[i].C_ParkStart).toString().slice(0, 20).replace(/\"|T/g, " "),
                parkfinish: JSON.stringify(query_result2[i].C_ParkFinish).toString().slice(0, 20).replace(/\"|T/g, " "),
                totaltime: JSON.stringify(query_result2[i].C_TotalTime).toString().slice(0, 20).replace(/\"|T/g, " ")
            }

            arr2.push(cars);
        }

        let payments = {};
        let arr3 = [];
        for (var i=0; i<query_result4.length; i++){
            payments = {
                id: query_result4[i].Pid,
                carnum: query_result4[i].P_CarNum,
                method: query_result4[i].P_Method,
                totalprice: query_result4[i].P_TotalPrice,
                regdate: JSON.stringify(query_result4[i].P_RegDate).toString().slice(0, 20).replace(/\"|T/g, " ")
            }

            arr3.push(payments);
        }


        let tickets = {};
        let arr4 = [];
        for (var i=0; i<query_result5.length; i++){
            tickets = {
                id: query_result5[i].Tid,
                carnum: query_result5[i].T_CarNum,
                method: query_result5[i].T_method,
                point: query_result5[i].T_Point,
                regdate: JSON.stringify(query_result5[i].T_RegDate).toString().slice(0, 20).replace(/\"|T/g, " ")
            }

            arr4.push(tickets);
        }

        console.log("arr "+ JSON.stringify(arr));
        console.log("arr "+ JSON.stringify(arr2));
        console.log("arr "+ JSON.stringify(arr3));
        console.log("arr "+ JSON.stringify(arr4));
        
        if(query_result['affectedRows'] > 0 && query_result2['affectedRows'] > 0 
            && query_result3['affectedRows'] > 0 && query_result4['affectedRows'] > 0 
            && query_result5['affectedRows'] > 0 && query_result6['affectedRows'] > 0) {
            rns = 1;
        }
        else {
            console.log(query_result);
            if(!query){
                return query_result = 0;
            } 
            return [arr, arr2, query_result3, arr3, arr4, query_result6];
        }
        return rns;
    }
}

module.exports = Admin;