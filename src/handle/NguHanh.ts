export default class NguHanh{
    public namSinh: number
 
    public can: number

    public chi: number

    public hinhAnhNamSinh: string

    public hinhAnhNguHanh: string

    constructor(namSinh: number){
        this.namSinh = namSinh
    }

    public getCan(number: number){
        switch(number){
            case 0:{
            return "Canh"
            }
            case 1:{
            return "Tân"
            }
            case 2:{
            return "Nhâm"
            }
            case 3:{
            return "Quý"
            }
            case 4:{
            return "Giáp"
            }
            case 5:{
            return "Ất"
            }
            case 6:{
            return "Bính"
            }
            case 7:{
            return "Đinh"
            }
            case 8:{
            return "Mậu"
            }
            case 9:{
            return "Kỷ"
            }
            default:{
            return "Undefine";
            }
        }
    }

    public getChi(number: number){
        switch(number){
            case 0:{
            return "Thân"
            }
            case 1:{
            return "Dậu"
            }
            case 2:{
            return "Tuất"
            }
            case 3:{
            return "Hợi"
            }
            case 4:{
            return "Tý"
            }
            case 5:{
            return "Sửu"
            }
            case 6:{
            return "Dần"
            }
            case 7:{
            return "Mão"
            }
            case 8:{
            return "Thìn"
            }
            case 9:{
            return "Tỵ"
            }
            case 10:{
            return "Ngọ"
            }
            case 11:{
            return "Mùi"
            }
            default:{
            return "Undefine";
            }
        }
    }

    public getHanhCan(yearOld: number){ // 1998 -> 8
        const strYear = yearOld.toString();
        const lastCharNum = strYear.substr(strYear.length-1,1);
        return parseInt(lastCharNum);
    }

    public getHanhChi(yearOld: number){ // 1998 -> 8
        return yearOld % 12;
    }

    public getYearConvension(yearOld: number){
        return `${this.getCan(this.getHanhCan(yearOld))} ${this.getChi(this.getHanhChi(yearOld))}` ;
    }

    public getThienCan(canNum: number){
        if(canNum == 4 || canNum == 5){
            return 1;
        }
        if(canNum == 6 || canNum == 7){
            return 2;
        }
        if(canNum == 8 || canNum == 9){
            return 3;
        }
        if(canNum == 0 || canNum == 1){
            return 4;
        }
        if(canNum == 2 || canNum == 3){
            return 5;
        }
    }

    public getDiaChi(numChi: number){
        if(numChi == 4 || numChi == 5 || numChi == 10 || numChi == 11){
            return 0;
        }
        if(numChi == 0 || numChi == 1 || numChi == 6 || numChi == 7){
            return 1;
        }
            if(numChi == 2 || numChi == 3 || numChi == 8 || numChi == 9){
            return 2;
        }
    }

    public getNguHanh(num: number){
        switch(num){
            case 1:{
            return "Kim"
            }
            case 2:{
            return "Thủy"
            }
            case 3:{
            return "Hỏa"
            }
            case 4:{
            return "Thổ"
            }
            case 5:{
            return "Mộc"
            }
            default:{
            return "Undefine";
            }
        }
    }

    // public getMenhNguHanh(yearOld: number){
    //     const can = getHanhCan(yearOld);
    //     const chi = getHanhChi(yearOld);
    //     const thienCan = getThienCan(can);
    //     const diaChi = getDiaChi(chi);
    //     const nguHanh = (thienCan + diaChi) > 5 ? (thienCan + diaChi) - 5 : (thienCan + diaChi);
    //     return getNguHanh(nguHanh)
    // }
// console.log(`Năm: ${getYearConvension(YEAR)}`);
// console.log(`Mệnh: ${getMenhNguHanh(YEAR)}`);
}