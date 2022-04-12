import mysql from 'mysql'
import accessDetails from '../Task2/authorisationDetails.mjs'

function dataFetch(tbName, rowNames = '*', colName = null, value = null) {
    (rowNames != '*' && rowNames != 0 )? rowNames = rowNames.join(", ") : 0  
    const con = mysql.createPool(accessDetails)
    const sql = `SELECT ${rowNames} FROM ${tbName}`
    if(colName != null && value != null && value.includes('%')) sql.concat(`WHERE ${colName} like ${value}`)
    if(colName != null && value != null && !value.includes('%')) sql.concat(`WHERE ${colName} = ${value}`)
    con.query(sql, (err, res) => {
        if(err) throw err
        console.log(res)
    })
}

export default dataFetch
