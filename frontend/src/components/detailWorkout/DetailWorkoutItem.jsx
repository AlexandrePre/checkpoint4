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
      <p> {info[0].name_workout}</p>
      <h4>exercice 1 {info[0].drillOne}</h4>
      <h4>exercice 2 {info[0].drillTwo}</h4>
      <h4>exercice 3 {info[0].drillThree}</h4>
      <h4>exercice 4 {info[0].drillFour}</h4>
      <h4>exercice 5 {info[0].drillFive}</h4>
    </div>
  );
}

detailWorkoutItem.propTypes = {
  info: PropTypes.string.isRequired,
};

export default detailWorkoutItem;
