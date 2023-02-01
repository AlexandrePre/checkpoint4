/* eslint-disable camelcase */
const db = require("../../config");

const findOneWorkout = (id) => {
  return db
    .promise()
    .query("SELECT * FROM workout WHERE workout.id = ?", [id])
    .then(([decision]) => decision);
};

module.exports = { findOneWorkout };
