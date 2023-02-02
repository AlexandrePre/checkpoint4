/* eslint-disable camelcase */
import PropTypes from "prop-types";
import "./DetailWorkoutItem.css";
// import api from "../../services/api";

function detailWorkoutItem({ info }) {
  //   const deleteWorkout = () => {
  //     api.delete(`workout/${nbdec}`, { withCredentials: true });
  //   };

  return (
    <div className="detailWorkoutItem">
      <h4> {info[0].name_workout}</h4>
      <div className="card">
        <div className="card2">exercice 1 {info[0].drillOne}</div>
      </div>
      <div className="card">
        <div className="card2">exercice 2 {info[0].drillTwo}</div>
      </div>
      <div className="card">
        <div className="card2">exercice 3 {info[0].drillThree}</div>
      </div>
      <div className="card">
        <div className="card2">exercice 4 {info[0].drillFour}</div>
      </div>
      <div className="card">
        <div className="card2">exercice 5 {info[0].drillFive}</div>
      </div>
      <div className="card">
        <div className="card2">exercice 6 {info[0].drillSix}</div>
      </div>
    </div>
  );
}

detailWorkoutItem.propTypes = {
  info: PropTypes.string.isRequired,
};

export default detailWorkoutItem;
