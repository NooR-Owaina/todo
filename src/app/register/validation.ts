export class validation {
    static isName(name:any){
        if(typeof(name)!="string" || name.length < 10 || name.length > 30 ){
            alert("name should be a string and between 10 and 30 chars" );
            return false;
        }else return true;
    }
    static isAge(age:any){
        if(typeof(parseInt(age))!="number" || age < 13 || age > 80 ){
            alert("age should be a string and between 13 and 80 chars" );
            return false;
        }else return true;
    }
    static isEmail(email:any){
        if((!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))){
            alert("this email is not valid");
            return false;
        }else return true;
    }
    static isPassword(password:any){
        if(typeof(password)!="string" || password.length < 6 || password.length > 15 ){
            alert("password should be a string and between 6 and 15" );
            return false;
        }else return true;
    }
}