import Workouts from "../components/dashboard/Workouts";
import ButtonCreateWorkout from "../components/dashboard/ButtonCreateWorkout";
import NavBarDash from "../components/dashboard/NavBardash";

export default function Dashboard() {
  return (
    <div>
      <NavBarDash />
      <ButtonCreateWorkout />
      <Workouts />
    </div>
  );
}
