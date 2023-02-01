/* eslint-disable camelcase */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { authContext } from "../../hooks/authContext";
import "./FormCreate.css";

export default function FormCreate() {
  const { auth } = useContext(authContext);
  const [input, setInput] = useState({
    name_workout: "",
    drillOne: "",
    drillTwo: "",
    drillThree: "",
    drillFour: "",
    drillFive: "",
  });

  const user_id = auth.data.id;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitCreateWorkout = (e) => {
    e.preventDefault();
    if (input.name_workout) {
      api
        .post("workout/", { ...input, user_id }, { withCredentials: true })
        .then((res) => {
          if (res.status === 201) {
            navigate("/connexion");
          }
        })
        .catch((err) => err.response);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmitCreateWorkout}>
      <h2 id="title">Créer ta séance</h2>
      <div className="formCreate">
        <input
          type="text"
          value={input.name_workout}
          placeholder="name workout"
          onChange={handleChange}
          name="name_workout"
          required="required"
          id="name_workout"
        />
        <div className="bodyworkout">
          <input
            type="textarea"
            value={input.drillOne}
            placeholder="drillOne"
            onChange={handleChange}
            name="drillOne"
            required="required"
            className="drill"
          />
          <input
            type="textarea"
            value={input.drillTwo}
            placeholder="drillTwo"
            onChange={handleChange}
            name="drillTwo"
            required="required"
            className="drill"
          />
          <input
            type="textarea"
            value={input.drillThree}
            placeholder="drillThree"
            onChange={handleChange}
            name="drillThree"
            required="required"
            className="drill"
          />
          <input
            type="textarea"
            value={input.drillFour}
            placeholder="drillFour"
            onChange={handleChange}
            name="drillFour"
            required="required"
            className="drill"
          />
          <input
            type="textarea"
            value={input.drillFive}
            placeholder="drillFive"
            onChange={handleChange}
            name="drillFive"
            required="required"
            className="drill"
          />
        </div>
      </div>

      <button type="submit" id="btn-createWorkout" value="Creation">
        CREEZ TA SEANCE
      </button>
    </form>
  );
}
