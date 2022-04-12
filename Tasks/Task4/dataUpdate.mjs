import mysql from 'mysql'
import accessDetails from '../Task2/authorisationDetails.mjs'


function dataUpdate(tbName = null, upCol = null, upVal = null, refVal = null, refCol = 'name') {

    for(let i of arguments) {
        if(i == null) throw new Error('Enter all necessary arguments in the function parameter')
    }

    const con = mysql.createPool(accessDetails)

    con.query(`UPDATE ${tbName} SET ${upCol} = "${upVal}" WHERE ${refCol} = "${refVal}"`, (err, res) => {
        if(err) throw err
        console.log(Object.entries(res))
    })
}

export default dataUpdate