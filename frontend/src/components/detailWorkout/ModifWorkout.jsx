/* eslint-disable camelcase */
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

import "./DetailWorkoutItem.css";

export default function ModifWorkout({ shownVisibility }) {
  const { id } = useParams();
  const [input, setInput] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitModifWorkout = (e) => {
    e.preventDefault();
    api
      .put(`workout/user/${id}`, input, { withCredentials: true })
      .then((res) => {
        if (res.status === 201) {
          navigate("/dashboard");
        }
      })
      .catch((err) => err.response);
  };

  return (
    <form
      className="detailWorkoutItemModif"
      onSubmit={handleSubmitModifWorkout}
      style={{ display: shownVisibility ? "none" : "block" }}
    >
      <div className="card">
        <input
          type="text"
          value={input.name_workout}
          placeholder="name workout"
          onChange={handleChange}
          name="name_workout"
          className="card2"
        />
      </div>
      <div className="card">
        <input
          type="text"
          value={input.drillOne}
          placeholder="drillOne"
          onChange={handleChange}
          name="drillOne"
          className="card2"
        />
      </div>
      <div className="card">
        <input
          type="text"
          value={input.drillTwo}
          placeholder="drillTwo"
          onChange={handleChange}
          name="drillTwo"
          className="card2"
        />
      </div>
      <div className="card">
        <input
          type="text"
          value={input.drillThree}
          placeholder="drillThree"
          onChange={handleChange}
          name="drillThree"
          className="card2"
        />
      </div>
      <div className="card">
        <input
          type="text"
          value={input.drillFour}
          placeholder="drillFour"
          onChange={handleChange}
          name="drillFour"
          className="card2"
        />
      </div>
      <div className="card">
        <input
          type="text"
          value={input.drillFive}
          placeholder="drillFive"
          onChange={handleChange}
          name="drillFive"
          className="card2"
        />
      </div>
      <div className="card">
        <input
          type="text"
          value={input.drillSix}
          placeholder="drillSix"
          onChange={handleChange}
          name="drillSix"
          className="card2"
        />
      </div>

      <button type="submit" id="btn-createWorkout-modif" value="Creation">
        Valide tes modificactions
      </button>
    </form>
  );
}

ModifWorkout.propTypes = {
  shownVisibility: PropTypes.string.isRequired,
};
