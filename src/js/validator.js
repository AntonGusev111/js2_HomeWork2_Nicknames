class Validator{
    constructor(username){
        this.username = username;
    }

    validateUsername(){
        const regExp = /[a-z,A-Z_,-][0-9]{0,3}/;
        return regExp.test(this.username)
    }
}

let cls = new Validator('_nickname123-name')
console.log(cls.validateUsername())