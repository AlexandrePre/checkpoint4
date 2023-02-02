import React from "react";
import { Link } from "react-router-dom";
import "./ButtonCreateDrill.css";

export default function ButtonCreateDrill() {
  return (
    <div className="btn-drill">
      <Link to="/drill/drillcreate">
        <button className="drillcreate" type="button">
          Créer un Drill
        </button>
      </Link>
    </div>
  );
}
