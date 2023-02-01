/* eslint-disable camelcase */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import deleteworkout from "../../assets/img/delete.png";
import api from "../../services/api";

import "./Cards.css";

function CardsItem({ nbdec, name_workout }) {
  const deleteWorkout = () => {
    api.delete(`workout/${nbdec}`, { withCredentials: true });
  };
  return (
    <div className="CardItem">
      <Link id="workoutTitle" to={`/dashboard/detailworkout/${nbdec}`}>
        <div style={{ textDecoration: "none" }}>
          <h4 id="titleWorkout" style={{ textDecoration: "none" }}>
            {name_workout}
          </h4>
        </div>
      </Link>
      <div className="btn-delete">
        <img
          src={deleteworkout}
          alt="delete"
          role="presentation"
          onClick={deleteWorkout}
          id="delete"
        />
      </div>
    </div>
  );
}

CardsItem.propTypes = {
  name_workout: PropTypes.string.isRequired,
  nbdec: PropTypes.number.isRequired,
};

export default CardsItem;
