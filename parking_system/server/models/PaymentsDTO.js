class PaymentsDTO {
    
    constructor() {
        this.Pid;
        this.P_CarNum;
        this.P_Method;
        this.P_TotalPrice;
        this.P_RegDate;
    }

    getPid() {
        return this.Pid;
    }

    getCarNum() {
        return this.P_CarNum;
    }

    getMethod() {
        return this.P_Method;
    }

    getTotalPrice(){
        return this.P_TotalPrice;
    }

    getRegDate(){
        return this.P_RegDate;
    }

    setSid(Sid) {
        this.Sid = Sid;
    }

    setCarNum(P_CarNum) {
        this.P_CarNum = P_CarNum;
    }

    setMethod(P_Method) {
        this.P_Method = P_Method;
    }

    setTotalPrice(P_TotalPrice){
        this.P_TotalPrice = P_TotalPrice;
    }

    setRegDate(P_RegDate){
        this.P_RegDate = P_RegDate;
    }
}

exports.module = PaymentsDTO;