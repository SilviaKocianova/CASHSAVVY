const savinggoalsDao = require("../../dao/savinggoals-dao.js");

async function GetAbl(req, res) {
  try {
    // get request query or body
    const reqParams = req.body;

    // read savinggoals by given id
    const savinggoals = savinggoalsDao.get(reqParams.id);

    if (!savinggoals) {
      res.status(404).json({
        code: "savinggoalsNotFound",
        message: `Savinggoals ${reqParams.id} not found`,
      });
      return;
    }

    res.json(savinggoals);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = GetAbl;
