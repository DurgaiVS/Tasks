import Student from "./student.mjs";
import Department from "./dept2.mjs";
import College from "./clg2.mjs";

let x = new Department('ECE', 2019, {
    _name: 'DVS',
    _phn: 0,
    _email: 'durgaivel0309'
})

// x.email = 'davidnaren'

// x.year = 1997

x.dept = 'EEE'

console.log(x)