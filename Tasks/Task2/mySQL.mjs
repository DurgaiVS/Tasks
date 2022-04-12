import mysql from 'mysql'
import {ece, eee, mech, it, bio} from './dataFile.mjs'
import accessDetails from './authorisationDetails.mjs'

function wholeInsertion(){
    const deptOrder = ['ece', 'eee', 'mech', 'it', 'bio']

    const dataPushArr = [ece, eee, mech, it, bio]

   dataPushArr.forEach((item, index) => {
       dataPushArr[index] = item.filter(item => item != null)
   })

    const con = mysql.createPool(accessDetails)

    deptOrder.forEach((item, index) => {
        const sql = `INSERT INTO ${item} (name, phn, email, year) VALUES ?`
        const values = dataPushArr[index]

        if(values == 0 ) return 
        con.query(sql, [values], (err, res) => {
            if(err) throw err
            console.log(res)
        })
    })
}

export default wholeInsertion