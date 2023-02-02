const database = require("../../config");

const findAll = () => {
  return database
    .promise()
    .query("SELECT * FROM drills ")
    .then(([res]) => res);
};

const findOne = (id) => {
  return database
    .promise()
    .query("SELECT * FROM drills where drills.id = ?", [id])
    .then(([res]) => res);
};

const deleteOne = (id) => {
  return database
    .promise()
    .query("DELETE FROM drills WHERE drills.id = ?", [id])
    .then(([res]) => res);
};

const createOne = (url) => {
  return database
    .promise()
    .query("INSERT INTO drills SET ?", [url])
    .then(([res]) => res);
};

const updateOne = (payload, id) => {
  return database
    .promise()
    .query("UPDATE drills SET ? WHERE workout.id = ?", [payload, id])
    .then(([res]) => res);
};

module.exports = {
  findAll,
  deleteOne,
  createOne,
  findOne,
  updateOne,
};
