import React from "react";
import { Routes, Route } from "react-router-dom";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Connexionpage from "./pages/Connexionpage";
import Dashboard from "./pages/dashboard";
import WorkoutCreate from "./pages/WorkoutCreate";
import DetailWorkout from "./pages/DetailWorkout";
import ProtectedRoute from "./hooks/ProtectedRoute";
import ProfilePage from "./pages/ProfilPage";
import Drills from "./pages/Drills";
import DrillCreates from "./pages/DrillCreate";

function Transition() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexionpage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workoutcreate"
          element={
            <ProtectedRoute>
              <WorkoutCreate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/detailworkout/:id"
          element={
            <ProtectedRoute>
              <DetailWorkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/profil"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/drill"
          element={
            <ProtectedRoute>
              <Drills />
            </ProtectedRoute>
          }
        />

        <Route
          path="/drill/drillcreate"
          element={
            <ProtectedRoute>
              <DrillCreates />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default Transition;
