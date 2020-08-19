class UsersDTO {
    
    constructor() {
        this.Uid;
        this.U_Name;
        this.U_PhoneNum;
        this.U_code;
        this.U_AptNum;
        this.U_AddDate;
    }

    getUid() {
        return this.Uid;
    }

    getU_Name() {
        return this.U_Name;
    }

    getU_PhoneNum() {
        return this.U_PhoneNum;
    }

    getU_code() {
        return this.U_code;
    }

    getU_AptNum() {
        return this.U_AptNum;
    }

    getU_AddDate() {
        return this.U_AddDate;
    }

    setUid(Uid) {
        this.Uid = Uid;
    }

    setU_Name(U_Name) {
        this.U_Name = U_Name;
    }

    setU_PhoneNum(U_PhoneNum) {
        this.U_PhoneNum = U_PhoneNum;
    }

    setU_code(U_code) {
        this.U_code = U_code;
    }

    setU_AptNum(U_AptNum) {
        this.U_AptNum = U_AptNum;
    }

    setU_AptNum(U_AddDate) {
        this.U_AddDate = U_AddDate;
    }
}

exports.module = UsersDTO;