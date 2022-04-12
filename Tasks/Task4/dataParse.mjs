import fs from 'fs'
import Department from '../Task3/dept2.mjs'

function dataParse(str) {
    fs.readFile(str, 'utf-8', (err, res) => {
        if(err) throw err
        res = JSON.parse(res)
        for(let i in res) {
            console.log(res[i])
            const ii = new Department(res[i]['dept'], res[i]['year'], {
                name: res[i]['name'],
                phn: res[i]['phn'],
                email: res[i]['email']
            }) 
        }  
    })
}

export default dataParse

// fs.readFile('../Task/authFile.json', 'utf8', (err, data) => {
//     try{
//         data = JSON.parse(data)
//         for(let i in data){
//             console.log(i)
//         }
//     } catch(e) {
//         console.log(e)
//     }
// })