import React from "react";
import { Routes, Route } from "react-router-dom";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Connexionpage from "./pages/Connexionpage";
import Dashboard from "./pages/dashboard";
import WorkoutCreate from "./pages/WorkoutCreate";
import DetailWorkout from "./pages/DetailWorkout";

function Transition() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexionpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workoutcreate" element={<WorkoutCreate />} />
        <Route
          path="/dashboard/detailworkout/:id"
          element={<DetailWorkout />}
        />
      </Routes>
    </div>
  );
}

export default Transition;
