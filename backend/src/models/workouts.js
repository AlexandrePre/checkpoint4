const database = require("../../config");

const findAll = (id) => {
  return database
    .promise()
    .query("SELECT * FROM workout where user_id = ?", [id])
    .then(([res]) => res);
};

const findOne = (id) => {
  return database
    .promise()
    .query("SELECT * FROM workout where workout.id = ?", [id])
    .then(([res]) => res);
};

const deleteOne = (id) => {
  return database
    .promise()
    .query("DELETE FROM workout WHERE id = ?", [id])
    .then(([res]) => res);
};

const createOne = (payload) => {
  return database
    .promise()
    .query("INSERT INTO workout SET ?", [payload])
    .then(([res]) => res);
};

module.exports = {
  findAll,
  deleteOne,
  createOne,
  findOne,
};
