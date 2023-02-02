/* eslint-disable camelcase */

import PropTypes from "prop-types";
import { motion } from "framer-motion";

import "./AllDrills.css";

function CardDrill({ name_drill, image }) {
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
      <div className="CardDrill">
        <div>
          <h4 id="titleDrill">{name_drill}</h4>
        </div>
        <div className="imgdrill">
          <img src={image} alt="delete" role="presentation" id="drillImg" />
        </div>
      </div>
    </motion.div>
  );
}

CardDrill.propTypes = {
  name_drill: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CardDrill;
