import mysql from 'mysql'
import accessDetails from '../Task2/authorisationDetails.mjs'

function updateData(obj, colName, value, ref = 'name') {
    const con = mysql.createPool(accessDetails)
    
    const sql = `UPDATE ${obj._dept} SET ${colName} = "${value}" WHERE ${ref} = "${obj["_" + ref]}"`
    
    con.query(sql, (err, res) => {
        if(err) throw err
        console.log(Object.entries(res))
    })
}

export default updateData