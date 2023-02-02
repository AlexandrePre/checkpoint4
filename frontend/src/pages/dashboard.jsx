import React, { useState } from "react";
import Workouts from "../components/dashboard/Workouts";
import ButtonCreateWorkout from "../components/dashboard/ButtonCreateWorkout";
import NavBarDash from "../components/dashboard/NavBardash";

export default function Dashboard() {
  const [shown, setShown] = useState(true);

  const handleClickShown = () => {
    setShown(!shown);
  };
  return (
    <div>
      <NavBarDash handleClickShown={handleClickShown} />
      <ButtonCreateWorkout shown={shown} />
      <Workouts />
    </div>
  );
}
