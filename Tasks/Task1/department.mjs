const x = {
    ECE:0,
    EEE:0,
    MECH:0,
    IT:0,
    BIO:0,
}

class Department {
    constructor(dept, year, student) {
        this._dept = dept
        this._year = year
        this._name = student._name
        this._phn = student._phn
        this._email = student._email
        this._id = Department.getId(this._dept)
    }

    static getId(n) {
        return ++x[n]
    }

    get dept() {
        console.log(`The student is ${this._dept} department`)
    }
    set dept(n) {
        this._dept = n
    }

    get year() {
        console.log(`The student is ${this._year} year`)
    }
    set year(n) {
        this._year = n
    }
}

export default Department