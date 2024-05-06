const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

const savinggoalsDao = require("../../dao/savinggoals-dao.js");

const schema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string", minLength: 3 },
  },
  required: ["id"],
  additionalProperties: false,
};

async function UpdateAbl(req, res) {
  try {
    let savinggoals = req.body;

    // validate input
    const valid = ajv.validate(schema, savinggoals);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    const updatedSavinggoals = savinggoalsDao.update(savinggoals);

    if (!updatedSavinggoals) {
      res.status(404).json({
        code: "savinggoalsNotFound",
        message: `Savinggoals ${savinggoals.id} not found`,
      });
      return;
    }

    res.json(updatedSavinggoals);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = UpdateAbl;
