import Student from "./student.mjs";
import Department from "./dep2.mjs";
import * as DF from './dataFile.mjs'
import College from "./clg2.mjs";
import wholeInsertion from "./mySQL.mjs";

const x = new Student('Durgai', 9360434308, 'durgaivel0309@gmail.com')

// console.log('Student class is:')

const z = new Department('ECE',19, x)
const a = new Department('ECE',19, x)

// console.log(z)
// console.log(x)
// console.log('Department class is:')
// console.log(z)

// // const b = new College("St.Joseph's", 2019)

// // console.log('College class is:')
// console.log(DF.ece)

z.name = 'DVS'


// console.log(DF.eee)

z.id

z.dept = 'EEE'
a.dept = 'MECH'
z.year = 1907


// console.log(z)
// console.log(DF.ece, 'ece')
// console.log(DF.eee, 'eee')
// console.log(DF.mech, 'mech')
// console.log(DF.it, 'it')
// console.log(DF.bio, 'bio')

wholeInsertion()