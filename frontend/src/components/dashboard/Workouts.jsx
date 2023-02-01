import React from "react";
import CardsWorkout from "./CardsWorkout";
import "./Workout.css";

export default function Workouts() {
  return (
    <div className="workouts">
      <h1>MES WORKOUTS</h1>
      <CardsWorkout />
    </div>
  );
}
