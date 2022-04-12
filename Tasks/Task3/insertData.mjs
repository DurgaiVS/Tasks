import mysql from 'mysql'
import accessDetails from '../Task2/authorisationDetails.mjs'

function insertData(obj) {
    const con = mysql.createPool(accessDetails)
    const sql = `INSERT INTO ${obj._dept} (name, phn, email, year) VALUES ?`
    const value = [
        [obj._name, obj._phn, obj._email, obj._year]
    ]
    con.query(sql,[value] ,(err, res) => {
        if(err) throw err
        console.log(Object.entries(res))
    })
}

export default insertData