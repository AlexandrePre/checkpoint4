/* eslint-disable camelcase */
const WorkoutUserModel = require("../models/workoutUserModel");

const workoutUserController = {
  getWorkoutUser: (req, res) => {
    const { id } = req.params;
    WorkoutUserModel.findOneWorkout(id)
      .then((workout) => res.send(workout))
      .catch((err) => res.send(err));
  },

  updateWorkout: async (req, res) => {
    const { id } = req.params;
    WorkoutUserModel.updateOne(req.body, id)
      .then((user) => res.send(user))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
};
module.exports = workoutUserController;
