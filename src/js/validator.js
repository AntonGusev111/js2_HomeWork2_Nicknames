export default class Validator{
    constructor(username){
        this.username = username;
    }

    validateUsername(){
        const regExp = /^[A-Za-z]+(([_-]+)?(\d{0,3})?([_-]+)?)?([A-Za-z]+(\d{0,3})([_-])?)?[A-Za-z]+$/;
        return regExp.test(this.username)
    }
}

//let cls = new Validator('nickname123-name120_user')
//console.log(cls.validateUsername())