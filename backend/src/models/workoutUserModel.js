/* eslint-disable camelcase */
const db = require("../../config");

const findOneWorkout = (id) => {
  return db
    .promise()
    .query("SELECT * FROM workout WHERE workout.id = ?", [id])
    .then(([decision]) => decision);
};

const updateOne = (payload, id) => {
  return db
    .promise()
    .query("UPDATE workout SET ? WHERE workout.id = ?", [payload, id])
    .then(([res]) => res);
};

module.exports = { findOneWorkout, updateOne };
