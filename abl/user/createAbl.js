const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

const validateDateTime = require("../../helpers/validate-date-time.js");
ajv.addFormat("date-time", { validate: validateDateTime });

const userDao = require("../../dao/user-dao.js");

const schema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 3 },
  },
  required: ["name"],
  additionalProperties: false,
};

async function CreateAbl(req, res) {
  try {
    let user = req.body;

    // validate input
    const valid = ajv.validate(schema, user);

    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    const newUser = userDao.create(user);
    res.json(newUser);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = CreateAbl;
