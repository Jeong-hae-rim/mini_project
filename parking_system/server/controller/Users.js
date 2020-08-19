const DBHandler = require('../models/DBHandler');
const UsersDAO = require('../models/UsersDAO');
const UsersDTO = require('../models/UsersDAO');

class Users {

    constructor() {
        this.db = new DBHandler();
    }

    async addUser(userData) {

        const db = this.db;
        const dao = new UsersDAO();
        const dto = new UsersDTO();
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

    async checkUser(u_code) {

        const db = this.db;
        let query_result;
        let rns = 0;

        let query = `SELECT * FROM users where U_Code = '${u_code}'`;
        
        query_result = await db.getData(query);

        if(query_result[0]) {
            rns = 1;
        }
    
        return rns;
    }

}

module.exports = Users;