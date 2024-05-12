const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const savinggoalsFolderPath = path.join(__dirname, "storage", "savinggoalsList");

// Method to read savinggoals from a file
function get(savinggoalsId) {
  try {
    const filePath = path.join(savinggoalsFolderPath, `${savinggoalsId}.json`);
    const fileData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw { code: "failedToReadSavinggoals", message: error.message };
  }
}

// Method to write savinggoals to a file
function create(savinggoals) {
  try {
    savinggoals.id = crypto.randomBytes(16).toString("hex");
    const filePath = path.join(savinggoalsFolderPath, `${savinggoals.id}.json`);
    const fileData = JSON.stringify(savinggoals);
    fs.writeFileSync(filePath, fileData, "utf8");
    return savinggoals;
  } catch (error) {
    throw { code: "failedToCreateSavinggoals", message: error.message };
  }
}

// Method to update savinggoals in a file
function update(savinggoals) {
  try {
    const currentSavinggoals = get(savinggoals.id);

    if (!currentSavinggoals) return null;

    const newSavinggoals = { ...currentSavinggoals, ...savinggoals };

    const filePath = path.join(savinggoalsFolderPath, `${savinggoals.id}.json`);
    const fileData = JSON.stringify(newSavinggoals);
    fs.writeFileSync(filePath, fileData, "utf8");
    return newSavinggoals;
  } catch (error) {
    throw { code: "failedToUpdateSavinggoals", message: error.message };
  }
}

// Method to remove savinggoals from a file
function remove(savinggoals) {
  try {
    const filePath = path.join(savinggoalsFolderPath, `${savinggoals}.json`);
    fs.unlinkSync(filePath);
    return {};
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }
    throw { code: "failedToRemoveSavinggoals", message: error.message };
  }
}

// Method to list savinggoals in a folder
function list() {
  try {
    const files = fs.readdirSync(savinggoalsFolderPath);

    const savinggoalsList = files.map((file) => {
      const fileData = fs.readFileSync(path.join(savinggoalsFolderPath, file), "utf8");
      return JSON.parse(fileData);
    });

    return savinggoalsList;
  } catch (error) {
    throw { code: "failedToListSavinggoals", message: error.message };
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
  list,
};
