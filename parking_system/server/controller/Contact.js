const DBHandler = require('../models/DBHandler'); 

class Contact {

    constructor() {
        this.db = new DBHandler();
    }

    async addcontact(name, car_number, contact){
        const db = this.db;
        let rns = 0;
        let query;
        let query_result;
        query = `INSERT INTO contacts (name, carnum, contact) VALUES ('${name}', '${car_number}', '${contact}');`;
        query_result = await db.getData(query);
        
        if(query_result['affectedRows'] > 0) {
            rns = 1;
        }
        else {
            console.log(query_result);
            return query_result;
        }
        return rns;
    }
}

module.exports = Contact;