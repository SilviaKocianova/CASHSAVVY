const path = require('path')
const fs = require('fs')

function budgetExistance(budgetID) {
    const pathToBudgets = path.join(__dirname, '..', 'Dao', 'storage', 'budget')
    const allBudgets = fs.readdirSync(pathToBudgets)

    return allBudgets.includes(`${budgetID}.json`)
}

module.exports = budgetExistance