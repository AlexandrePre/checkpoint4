/* eslint-disable camelcase */
import { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import CardsItem from "./CardsItem";
import { authContext } from "../../hooks/authContext";
import "./Cards.css";

function CardsWorkout() {
  const { auth } = useContext(authContext);
  const [allWorkout, setAllWorkout] = useState([]);

  const getAllWorkout = () => {
    api
      .get(`workout/${auth.data.id}`, { withCredentials: true })
      .then((response) => setAllWorkout(response.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getAllWorkout();
  }, [allWorkout]);

  const cardMap = allWorkout.map((cardItem) => (
    <CardsItem nbdec={cardItem.id} name_workout={cardItem.name_workout} />
  ));

  return <div className="AllWorkout">{cardMap}</div>;
}

export default CardsWorkout;
