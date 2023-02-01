/* eslint-disable camelcase */
const WorkoutUserModel = require("../models/workoutUserModel");

const workoutUserController = {
  getDecisionUser: (req, res) => {
    const { id } = req.params;
    WorkoutUserModel.findOneWorkout(id)
      .then((workout) => res.send(workout))
      .catch((err) => res.send(err));
  },
};
module.exports = workoutUserController;
