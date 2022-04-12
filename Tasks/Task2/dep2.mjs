import { dataFile } from "./dataFile.mjs"
import idCount from "./idFile.mjs"
import updateData from "./updateData.mjs"
import updateDept from './updateDept.mjs'

class Department {
    constructor(dept, year, student) {
        this._dept = dept
        this._year = year
        this._name = student._name
        this._phn = student._phn
        this._email = student._email
        this._id = Department.getID(dept)
        student._id = this._id

        dataFile(dept, year, student)
    }

    static getID(n) {
        return ++idCount[n]
    }

    get dept() {
        console.log(`The student is ${this._dept} department`)
    }
    set dept(n) {
        let oldDept = this._dept
        this._dept = n
        updateDept(this, oldDept)
    }

    get year() {
        console.log(`The student is ${this._year} year`)
    }
    set year(n) {
        this._year = n
        updateData(this, n, '_year')
    }

    get name() {
        console.log(`The student name is ${this._name}`)
    }
    set name(n) {
        this._name = n
        updateData(this, n, '_name')
    }

    get phn() {
        console.log(`The student phn no. is ${this._phn}`)
    }
    set phn(n) {
        this._phn = n
        updateData(this, n, '_phn')
    }

    get email() {
        console.log(`The student email is ${this._email}`)
    }
    set email(n) {
        this._email = n
        updateData(this, n, '_email')
    }

    get id() {
        console.log(`Student id is ${this._id}`)
    }
}

export default Department