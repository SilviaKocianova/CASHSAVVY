const savinggoalsDao = require("../../dao/savinggoals-dao.js");

async function DeleteAbl(req, res) {
  try {
    // get request query or body
    const reqParams = req.body;

    const savinggoals = savinggoalsDao.remove(reqParams.id);

    if (!savinggoals) {
      res.status(404).json({
        code: "savinggoalstNotFound",
        message: `Savinggoals ${reqParams.id} not found`,
      });
      return;
    }

    res.json({});
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = DeleteAbl;
