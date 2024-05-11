const path = require('path')
const fs = require('fs')

function userExistence(userID) {
    const pathToUsers = path.join(__dirname, '..', 'Dao', 'storage', 'user')
    const allUsers = fs.readdirSync(pathToUsers)

    return allUsers.includes(`${userID}.json`)
}

module.exports = userExistence