import Workouts from "../components/dashboard/Workouts";
import ButtonCreateDecision from "../components/dashboard/ButtonCreateDecision";
import NavBarDash from "../components/dashboard/NavBardash";

export default function Dashboard() {
  return (
    <div>
      <NavBarDash />
      <ButtonCreateDecision />
      <Workouts />
    </div>
  );
}
