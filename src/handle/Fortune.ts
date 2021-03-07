/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
export default class Fortune{

    public yearOfBirth: number
 
    private hanhCan: number

    private hanhChi: number

    private elementalNumber: number

    constructor(namSinh: number){
        this.yearOfBirth = namSinh
        this.hanhCan = this.getHanhCan();
        this.hanhChi = this.getHanhChi();
        const thienCan = this.getThienCan();
        const diaChi = this.getDiaChi();
        this.elementalNumber = (thienCan + diaChi) > 5 ? (thienCan + diaChi) - 5 : (thienCan + diaChi);
    }

    private getCan(): string{
        switch(this.hanhCan){
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

    public get elementalImage(){
        switch(this.elementalNumber){
            case 1:{
            return "kim.png"
            }
            case 2:{
            return "thuy.png"
            }
            case 3:{
            return "hoa.png"
            }
            case 4:{
            return "tho.png"
            }
            case 5:{
            return "moc.png"
            }
            default:{
            return "Undefine.png";
            }
        }
    }

    public get animalDesignationImage(){
        switch(this.hanhChi){
            case 0:{
            return "than.png"
            }
            case 1:{
            return "dau.png"
            }
            case 2:{
            return "tuat.png"
            }
            case 3:{
            return "hoi.png"
            }
            case 4:{
            return "ty.png"
            }
            case 5:{
            return "suu.png"
            }
            case 6:{
            return "dan.png"
            }
            case 7:{
            return "mao.png"
            }
            case 8:{
            return "thin.png"
            }
            case 9:{
            return "ty.png"
            }
            case 10:{
            return "ngo.png"
            }
            case 11:{
            return "mui.png"
            }
            default:{
            return "default.png";
            }
        }
    }

    private getChi(){
        switch(this.getHanhChi()){
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

    private getHanhCan(): number { // 1998 -> 8 (199[8])
        const chuoiNamSinh: string  = this.yearOfBirth.toString();
        const kyTuCuoiCuaNamSinh: string = chuoiNamSinh.substr(chuoiNamSinh.length-1,1);
        return parseInt(kyTuCuoiCuaNamSinh, 10);
    }

    private getHanhChi(): number{ // 1998 % 12 -> 6
        return this.yearOfBirth % 12;
    }

    public getNameOfYear(){ // => Mậu Dần
        return `${this.getCan()} ${this.getChi()}` ;
    }

    private getThienCan(): number{
        if(this.hanhCan === 4 || this.hanhCan === 5){
            return 1;
        }
        if(this.hanhCan === 6 || this.hanhCan === 7){
            return 2;
        }
        if(this.hanhCan === 8 || this.hanhCan === 9){
            return 3;
        }
        if(this.hanhCan === 0 || this.hanhCan === 1){
            return 4;
        }
        if(this.hanhCan === 2 || this.hanhCan === 3){
            return 5;
        }
        return 0;
    }

    private getDiaChi(): number{
        if(this.hanhChi === 4 || this.hanhChi === 5 || this.hanhChi === 10 || this.hanhChi === 11){
            return 0;
        }
        if(this.hanhChi === 0 || this.hanhChi === 1 || this.hanhChi === 6 || this.hanhChi === 7){
            return 1;
        }
        if(this.hanhChi === 2 || this.hanhChi === 3 || this.hanhChi === 8 || this.hanhChi === 9){
            return 2;
        }
        return 0;
    }

    private getElementalName(num: number): string{
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

    public getElemental(): string{
        return this.getElementalName(this.elementalNumber)
    }
}