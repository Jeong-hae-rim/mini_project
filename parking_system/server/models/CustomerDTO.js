class CustomerDTO {
    
    constructor() {
        this.name;
        this.phone;
        this.car_number;
        this.service_end;
    }

    getName() {
        return this.name;
    }

    getPhone() {
        return this.phone;
    }

    getCarNumber() {
        return this.car_number;
    }

    getServiceEnd() {
        return this.service_end;
    }

    setName(name) {
        this.name = name;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    setCarNumber(car_number) {
        this.car_number = car_number;
    }

    setServiceEnd(service_end) {
        this.service_end = service_end;
    }
}

exports.module = CustomerDTO;