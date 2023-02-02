import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBarDash from "../components/dashboard/NavBardash";
import DetailWorkoutItem from "../components/detailWorkout/DetailWorkoutItem";
import "./workout.css";
import api from "../services/api";
import ButtonModifWorkout from "../components/detailWorkout/ButtonModifWorkout";
import ModifWorkout from "../components/detailWorkout/ModifWorkout";

export default function DetailWorkout() {
  const [info, setInfo] = useState();
  const { id } = useParams();
  const [shownVisibility, setShowVisibility] = useState(true);

  const handleChange = () => {
    setShowVisibility(!shownVisibility);
  };

  const getworkout = async () => {
    await api
      .get(`workout/user/${id}`)
      .then((response) => setInfo(response.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getworkout();
  }, [id]);

  return (
    <div className="workoutcreate">
      <NavBarDash />
      {info && (
        <DetailWorkoutItem info={info} shownVisibility={shownVisibility} />
      )}
      <ModifWorkout shownVisibility={shownVisibility} />
      <ButtonModifWorkout handleChange={handleChange} />
    </div>
  );
}
