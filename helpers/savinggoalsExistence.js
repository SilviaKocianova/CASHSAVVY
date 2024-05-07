const path = require('path')
const fs = require('fs')

function savinggoalsExistence(savinggoalsID) {
    const pathToSavinggoals = path.join(__dirname, '..', 'Dao', 'storage', 'savinggoals')
    const allSavinggoals = fs.readdirSync(pathToSavinggoals)

    return allSavinggoals.includes(`${savinggoalsID}.json`)
}

module.exports = savinggoalsExistence