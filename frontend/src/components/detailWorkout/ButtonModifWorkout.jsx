import PropTypes from "prop-types";
import "./DetailWorkoutItem.css";

export default function ButtonModifWorkout({ handleChange }) {
  return (
    <button className="btn-workoutmodif" type="button" onClick={handleChange}>
      <p>Modifie le WORKOUT</p>
    </button>
  );
}

ButtonModifWorkout.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
