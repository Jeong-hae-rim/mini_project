const DBHandler = require('../models/DBHandler');
const CustomerDAO = require('../models/CustomerDAO');
const CustomerDTO = require('../models/CustomerDAO');

class Customer {

    constructor() {
        this.db = new DBHandler();
    }

    async addUser(userData) {

        const db = this.db;
        const dao = new CustomerDAO();
        const dto = new CustomerDTO();
        const { name, phone, car_number, service_end } = userData;
        
        // parameter validation 

        // additional service login...
        dto.setName(name);
        dto.setPhoneNumber(phone);
        dto.setCarNumber(car_number);
        dto.setServiceEnd(service_end);

        try {
            await dao.addUser(dto);
        }
        catch {
            return -1;
        }

        return 0;
    }

    async checkUser(car_number) {

        const db = this.db;
        let query_result;
        let rns = 0;

        let query = `SELECT * FROM register where car_number = '${car_number}'`;
        
        query_result = await db.getData(query);

        if(query_result[0]) {
            rns = 1;
        }
    
        return rns;
    }

}

module.exports = Customer;