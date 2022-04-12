class Student{
    constructor(name, phn, email){
        this.name = name;
        this.phn = phn;
        this.email = email;
    }

    get name() {
        console.log(`Student Name: ${this._name}`)
    }

    set name(n) {
        this._name = n;
    }

    get phn() {
        console.log(`Student Phone: ${this._phn}`)
    }

    set phn(n) {
        this._phn = n;
    }
    
    get email() {
        console.log(`Student Email: ${this._email}`)
    }
    
    set email(n) {
        this._email = n;
    }
}

export default Student