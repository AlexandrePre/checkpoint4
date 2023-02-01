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
      <p>exercice 1 {info[0].drillOne}</p>
      <p>exercice 2 {info[0].drillTwo}</p>
      <p>exercice 3 {info[0].drillThree}</p>
      <p>exercice 4 {info[0].drillFour}</p>
      <p>exercice 5 {info[0].drillFive}</p>
    </div>
  );
}

detailWorkoutItem.propTypes = {
  info: PropTypes.string.isRequired,
};

export default detailWorkoutItem;
