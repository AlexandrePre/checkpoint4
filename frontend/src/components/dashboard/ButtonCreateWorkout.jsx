import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./ButtonCreateWorkout.css";

export default function ButtonCreateWorkout({ shown }) {
  return (
    <div className="btn-workout">
      <Link to="/workoutcreate">
        <button
          className="btn-workoutcreate"
          type="button"
          style={{ display: shown ? "block" : "none" }}
        >
          Créer un WORKOUT
        </button>
      </Link>
    </div>
  );
}

ButtonCreateWorkout.propTypes = {
  shown: PropTypes.string.isRequired,
};
