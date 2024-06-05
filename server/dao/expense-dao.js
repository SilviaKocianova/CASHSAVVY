const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const expenseFolderPath = path.join(__dirname, "storage", "expenseList");

// Method to read expense from a file
function get(expenseId) {
  try {
    const filePath = path.join(expenseFolderPath, `${expenseId}.json`);
    const fileData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw { code: "failedToReadExpense", message: error.message };
  }
}

// Method to write expense to a file
function create(expense) {
  try {
    expense.id = crypto.randomBytes(16).toString("hex");
    const filePath = path.join(expenseFolderPath, `${expense.id}.json`);
    const fileData = JSON.stringify(expense);
    fs.writeFileSync(filePath, fileData, "utf8");
    return expense;
  } catch (error) {
    throw { code: "failedToCreateExpense", message: error.message };
  }
}

// Method to update expense in a file
function update(expense) {
  try {
    const currentExpense = get(expense.id);

    if (!currentExpense) return null;

    const newExpense = { ...currentExpense, ...expense };

    const filePath = path.join(expenseFolderPath, `${expense.id}.json`);
    const fileData = JSON.stringify(newExpense);
    fs.writeFileSync(filePath, fileData, "utf8");
    return newExpense;
  } catch (error) {
    throw { code: "failedToUpdateExpense", message: error.message };
  }
}

// Method to remove expense from a file
function remove(expense) {
  try {
    const filePath = path.join(expenseFolderPath, `${expense}.json`);
    fs.unlinkSync(filePath);
    return {};
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }
    throw { code: "failedToRemoveExpense", message: error.message };
  }
}

// Method to list expenses in a folder
function list() {
  try {
    const files = fs.readdirSync(expenseFolderPath);

    const expenseList = files.map((file) => {
      const fileData = fs.readFileSync(path.join(expenseFolderPath, file), "utf8");
      return JSON.parse(fileData);
    });
    console.log(expenseList);
    return expenseList;
    
  } catch (error) {
    throw { code: "failedToListExpenses", message: error.message };
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
  list,
};
