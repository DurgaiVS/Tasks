import * as dept from './dataFile.mjs'
import Department from './dep2.mjs'
import idCount from './idFile.mjs'

function updateDept(obj, oldDept) {
    dept[oldDept.toLowerCase()][obj._id - 1] = null
    obj._id = Department.getID(obj._dept)
    dept.dataFile(obj._dept, obj._year, obj)
}

export default updateDept