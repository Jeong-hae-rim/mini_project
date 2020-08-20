
const dto = require('./UsersDTO');
const dto2 = require('./MembersDTO');
const DBHandler = require('./DBHandler');
const { DATETIME } = require('mysql2/lib/constants/types');

class UsersDAO {

    constructor() {
        this.db = new DBHandler();
    }

    async addUser(UsersDTO) {

        let U_AddDate = new DATETIME();
        let result;

        U_AddDate.setMonth(U_AddDate.getMonth() + Number(U_AddDate.getU_AddDate()));
        console.log("IN TIME: ", U_AddDate);
        
        let query = `INSERT INTO users(u_name, u_phonenum, u_code, u_aptnum, u_adddate) VALUES ('${USersDTO.getU_Name()}', '${USersDTO.getU_PhoneNum()}', '${UsersDTO.getU_code()}', '${UsersDTO.getU_AptNum()}', '${U_AddDate}')`;
        
        try {
            result = await this.db.putData(query);
        }
        catch {
            return -1;
        }
        return 0;
    }
    

}

exports.module = UsersDAO;