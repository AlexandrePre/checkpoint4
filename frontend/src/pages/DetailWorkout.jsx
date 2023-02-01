import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBarDash from "../components/dashboard/NavBardash";
import DetailWorkoutItem from "../components/detailWorkout/DetailWorkoutItem";
import "./workout.css";
import api from "../services/api";

export default function DetailWorkout() {
  const [info, setInfo] = useState();
  const { id } = useParams();

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
      {info && <DetailWorkoutItem info={info} />}
    </div>
  );
}
