const path = require('path')
const fs = require('fs')

function categoryExistance(categoryID) {
    const pathToCategories = path.join(__dirname, '..', 'Dao', 'storage', 'category')
    const allCategories = fs.readdirSync(pathToCategories)

    return allCategories.includes(`${categoryID}.json`)
}

module.exports = categoryExistance