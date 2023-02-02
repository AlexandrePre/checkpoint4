/* eslint-disable camelcase */
const drillModel = require("../models/drill");

const drillController = {
  getAllDrill: (req, res) => {
    drillModel
      .findAll()
      .then((drill) => res.send(drill))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  getOneDrill: (req, res) => {
    const { id } = req.params;
    drillModel
      .findOne(id)
      .then((drill) => res.send(drill))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  deleteDrill: (req, res) => {
    const { id } = req.params;
    drillModel
      .deleteOne(id)
      .then((response) => {
        if (response.affectedRows !== 1) {
          return res.status(404).send(`drill ${id} not found`);
        }
        return res.status(200).send(`drill ${id} deleted`);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  postDrill: (req, res) => {
    const image = `${process.env.BACKEND_URL}/uploads/${req.file.filename}`;
    const { name_drills } = req.body;
    drillModel
      .createOne({
        image,
        name_drills,
        // categorie_id,
      })
      .then((result) =>
        res.status(201).send({
          id: result.insertId,
          // name_drills,
          // categorie_id,
        })
      )
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  updateDrill: async (req, res) => {
    const { id } = req.params;
    drillModel
      .updateOne(req.body, id)
      .then((user) => res.status(201).send(user))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
};
module.exports = drillController;
