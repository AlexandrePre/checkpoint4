import React from "react";
import { Link } from "react-router-dom";
import "./ButtonCreateDecision.css";

export default function ButtonCreateDecision() {
  return (
    <div className="btn-decision">
      <Link to="/decision">
        <button className="btn-decisioncreate" type="button">
          Créer un WORKOUT
        </button>
      </Link>
    </div>
  );
}
