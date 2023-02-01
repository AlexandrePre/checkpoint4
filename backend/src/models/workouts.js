const database = require("../../config");

const findAll = (id) => {
  return database
    .promise()
    .query("SELECT * FROM workout where user_id = ?", [id])
    .then(([res]) => res);
};

module.exports = {
  findAll,
};
