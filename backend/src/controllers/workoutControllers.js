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
  // getOneDecision: (req, res) => {
  //   const { id } = req.params;
  //   decisionModel
  //     .findOne(id)
  //     .then((decision) => {
  //       if (decision.length === 0) {
  //         res.sendStatus(404);
  //       } else {
  //         res.send(decision[0]);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // },
  // postDecision: (req, res) => {
  //   const {
  //     title,
  //     content,
  //     deadline,
  //     contexte,
  //     profit,
  //     usefullness,
  //     inconvenience,
  //     id_user,
  //     date_posted,
  //     id_status,
  //   } = req.body;
  //   decisionModel
  //     .createOne({
  //       title,
  //       content,
  //       deadline,
  //       contexte,
  //       profit,
  //       usefullness,
  //       inconvenience,
  //       id_user,
  //       date_posted,
  //       id_status,
  //     })
  //     .then((result) =>
  //       res.status(201).send({
  //         id: result.insertId,
  //         title,
  //         content,
  //         deadline,
  //         contexte,
  //         profit,
  //         usefullness,
  //         inconvenience,
  //         id_user,
  //         date_posted,
  //         id_status,
  //       })
  //     )
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // },

  // updateDecision: async (req, res) => {
  //   const { id } = req.params;
  //   const { id_status } = req.body;
  //   decisionModel
  //     .updateOne(id_status, id)
  //     .then((decision) => res.send(decision))
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // },
};
module.exports = workoutController;
