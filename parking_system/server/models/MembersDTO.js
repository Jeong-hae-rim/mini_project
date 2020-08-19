class MembersDTO {
    
    constructor() {
        this.Mid;
        this.Uid;
        this.M_CarNum;
    }

    getMid() {
        return this.Mid;
    }

    getUid() {
        return this.Uid;
    }

    getM_CarNum() {
        return this.M_CarNum;
    }

    setMid(Mid) {
        this.Mid = Mid;
    }

    setUid(Uid) {
        this.Uid = Uid;
    }

    setM_CarNum(M_CarNum) {
        this.M_CarNum = M_CarNum;
    }
}

exports.module = MembersDTO;