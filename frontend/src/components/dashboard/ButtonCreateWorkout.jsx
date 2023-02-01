import React from "react";
import { Link } from "react-router-dom";
import "./ButtonCreateWorkout.css";

export default function ButtonCreateWorkout() {
  return (
    <div className="btn-workout">
      <Link to="/workoutcreate">
        <button className="btn-workoutcreate" type="button">
          Créer un WORKOUT
        </button>
      </Link>
    </div>
  );
}
