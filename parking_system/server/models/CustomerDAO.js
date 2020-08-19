
const dto = require('./CustomerDTO');
const DBHandler = require('./DBHandler');

class CustomerDAO {

    constructor() {
        this.db = new DBHandler();
    }

    async addUser(CustomerDTO) {

        let service_end = new Date();
        let result;

        service_end.setMonth(service_end.getMonth() + Number(CustomerDTO.getServiceEnd()));
        console.log("IN TIME: ", service_end);
        service_end = service_end.toISOString().slice(0, 19).replace('T', ' ');
        
        let query = `INSERT INTO register(name, phone, car_number, service_end) VALUES ('${CustomerDTO.getName()}', '${CustomerDTO.getPhone()}', '${CustomerDTO.getCarNumber()}', '${service_end}')`;
        
        try {
            result = await this.db.putData(query);
        }
        catch {
            return -1;
        }
        return 0;
    }
    

}

exports.module = CustomerDAO;