import mysql from 'mysql'
import accessDetails from '../Task2/authorisationDetails.mjs'

function updateDept(obj, dep) {
    const con = mysql.createPool(accessDetails)
    
    const sql = `DELETE FROM ${obj._dept} WHERE name = "${obj._name}"`
    
    con.query(sql, (err, res) => {
        if(err) throw err
        console.log(res)
    })

    const sql2 = `INSERT INTO ${dep} (name, phn, email, year) VALUES ?`
    const value = [
        [obj._name, obj._phn.toString(), obj._email, obj._year]
    ]

    con.query(sql2, [value], (err, res) => {
        if(err) throw err
        console.log(res)
    })
}

export default updateDept