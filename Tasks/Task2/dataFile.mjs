const ece = []
const eee = []
const mech = []
const it = []
const bio = []


export function dataFile(dept, year, student) {
    
    switch (dept) {
        case 'ECE': ece.push([student._name, student._phn, student._email, year]);
            break
        case 'EEE': eee.push([student._name, student._phn, student._email, year]);
            break
        case 'MECH': mech.push([student._name, student._phn, student._email, year]);
            break
        case 'IT': it.push([student._name, student._phn, student._email, year]);
            break
        case 'BIO': bio.push([student._name, student._phn, student._email, year]);
            break
    }
}

export {ece, eee, mech, it, bio}