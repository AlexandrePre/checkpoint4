/* eslint-disable camelcase */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Cards.css";

function CardsItem({ nbdec, name_workout }) {
  return (
    <Link to={`/dashboard/decision/${nbdec}`}>
      <div className="CardItem" style={{ textDecoration: "none" }}>
        <h2 id="titleWorkout" style={{ textDecoration: "none" }}>
          {name_workout}
        </h2>
      </div>
    </Link>
  );
}

CardsItem.propTypes = {
  name_workout: PropTypes.string.isRequired,
  nbdec: PropTypes.number.isRequired,
};

export default CardsItem;
