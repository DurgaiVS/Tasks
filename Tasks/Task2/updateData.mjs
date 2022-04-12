import * as dept from './dataFile.mjs'

function updateData(obj, value, key) {
    if(value == 0) return
    let ind = 0
    key == '_name' ? ind = 0 : key == '_phn' ? ind = 1 : key == '_email' ? ind = 2 : ind = 3
    dept[obj._dept.toLowerCase()][obj._id - 1][ind] = value
}

export default updateData