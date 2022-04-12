import dataFetch from "./dataFetch.mjs";
// import fs from 'fs'
import dataParse from './dataParse.mjs'
import dataUpdate from './dataUpdate.mjs'


const pathLocation = './authFile.json'
dataParse(pathLocation)

dataUpdate('MECH', 'name', 'DVS', '9360434308', 'phn')

dataFetch('mech', ['name', 'phn']/*, 'name', 'DVS'*/)