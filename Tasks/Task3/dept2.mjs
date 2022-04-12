import insertData from './insertData.mjs'
import updateData from './updateData.mjs'
import updateDept from './updateDept.mjs'
import idCount from './updateCount.mjs'


class Department{
    constructor(dept, year, student) {
        this._dept = dept
        this._year = year 
        for(let i in student) {
            this[i] = student[i]
        }
        this._id = Department.getID(dept)

        insertData(this)
    }

    static getID(n) {
            return ++idCount[n]
    }

    get name() {
            console.log(`Student name is ${this._name}`)
    }
    set name(n) {
            this._name = n
            updateData(this, 'name', n, 'email')
    }
    get phn() {
            console.log(`Student phone number is ${this._phn}`)
    }
    set phn(n) {
            this._phn = n
            updateData(this, 'phn', n)
    }
    get email() {
            console.log(`Student email is ${this._email}`)
    }
    set email(n) {
            this._email = n
            updateData(this, 'email', n)
    }

    get dept() {
            console.log(`The student is ${this._dept} department`)
    }

    set dept(n) {
        this._id = Department.getID(n)
        updateDept(this, n)
        this._dept = n
    }

    get year() {
        console.log(`The student is ${this._year} year`)
    }

    set year(n) {
        this._year = n
        updateData(this, 'year', n)
    }

}

export default Department