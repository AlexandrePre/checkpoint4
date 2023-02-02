/* eslint-disable camelcase */
const workoutModel = require("../models/workouts");

const workoutController = {
  getAllWorkout: (req, res) => {
    const { id } = req.params;
    workoutModel
      .findAll(id)
      .then((decision) => res.send(decision))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  getOneWorkout: (req, res) => {
    const { id } = req.params;
    workoutModel
      .findOne(id)
      .then((decision) => res.send(decision))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  deleteWorkout: (req, res) => {
    const { id } = req.params;
    workoutModel
      .deleteOne(id)
      .then((response) => {
        if (response.affectedRows !== 1) {
          return res.status(404).send(`workout ${id} not found`);
        }
        return res.status(200).send(`workout ${id} deleted`);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  postDecision: (req, res) => {
    const {
      name_workout,
      drillOne,
      drillTwo,
      drillThree,
      drillFour,
      drillFive,
      drillSix,
      user_id,
    } = req.body;
    workoutModel
      .createOne({
        name_workout,
        drillOne,
        drillTwo,
        drillThree,
        drillFour,
        drillFive,
        drillSix,
        user_id,
      })
      .then((result) =>
        res.status(201).send({
          id: result.insertId,
          name_workout,
          drillOne,
          drillTwo,
          drillThree,
          drillFour,
          drillFive,
          drillSix,
          user_id,
        })
      )
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
};
module.exports = workoutController;
