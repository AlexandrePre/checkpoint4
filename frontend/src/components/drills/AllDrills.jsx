/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import api from "../../services/api";
import CardDrill from "./CardDrill";
import "./AllDrills.css";

function AllDrills() {
  const [allDrills, setAllDrills] = useState([]);

  const getAllWorkout = () => {
    api
      .get("drill", { withCredentials: true })
      .then((response) => setAllDrills(response.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getAllWorkout();
  }, [allDrills]);

  const cardMap = allDrills.map((drillItem) => (
    <CardDrill
      nbdec={drillItem.id}
      name_drill={drillItem.name_drills}
      image={drillItem.image}
    />
  ));

  return <div className="AllDrill">{cardMap}</div>;
}

export default AllDrills;
