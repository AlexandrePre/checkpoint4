/* eslint-disable camelcase */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import deleteworkout from "../../assets/img/delete.png";
import api from "../../services/api";

import "./Cards.css";

function CardsItem({ nbdec, name_workout }) {
  const deleteWorkout = () => {
    api.delete(`workout/${nbdec}`, { withCredentials: true });
  };
  return (
    <motion.div
      transition={{
        duration: 0,
        delay: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      initial={{ x: 500, scale: 0, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 1 }}
    >
      <div className="CardItem">
        <Link id="workoutTitle" to={`/dashboard/detailworkout/${nbdec}`}>
          <div>
            <h4 id="titleWorkout">{name_workout}</h4>
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
    </motion.div>
  );
}

CardsItem.propTypes = {
  name_workout: PropTypes.string.isRequired,
  nbdec: PropTypes.number.isRequired,
};

export default CardsItem;
