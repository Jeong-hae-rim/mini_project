class CarsDTO {
    
    constructor() {
        this.Cid;
        this.C_CarNum;
        this.C_ParkStart;
        this.C_ParkFinish;
        this.C_TotalTime;
        this.U_AddDate;
    }

    getCid() {
        return this.Cid;
    }

    getCarNum() {
        return this.C_CarNum;
    }

    getParkStart() {
        return this.C_ParkStart;
    }

    getParkFinish() {
        return this.C_ParkFinish;
    }

    getTotalTime() {
        return this.C_TotalTime;
    }


    setCid(Cid) {
        this.Cid = Cid;
    }

    setCarNum(C_CarNum) {
        this.C_CarNum = C_CarNum;
    }

    setParkStart(C_ParkStart) {
        this.C_ParkStart = C_ParkStart;
    }

    setParkFinish(C_ParkFinish) {
        this.C_ParkFinish = C_ParkFinish;
    }

    setTotalTime(C_TotalTime) {
        this.C_TotalTime = C_TotalTime;
    }

}

exports.module = CarsDTO;