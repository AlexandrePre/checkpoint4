import FormCreate from "../components/workoutCreate/FormCreate";
import NavBarDash from "../components/dashboard/NavBardash";
import "./workout.css";

export default function WorkoutCreate() {
  return (
    <div className="workoutcreate">
      <NavBarDash />
      <FormCreate />
    </div>
  );
}
