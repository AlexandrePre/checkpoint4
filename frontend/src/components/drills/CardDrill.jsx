/* eslint-disable camelcase */

import PropTypes from "prop-types";

import "./AllDrills.css";

function CardDrill({ name_drill, image }) {
  return (
    <div className="CardDrill">
      <div>
        <h4 id="titleDrill">{name_drill}</h4>
      </div>
      <div className="imgdrill">
        <img src={image} alt="delete" role="presentation" id="drillImg" />
      </div>
    </div>
  );
}

CardDrill.propTypes = {
  name_drill: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CardDrill;
