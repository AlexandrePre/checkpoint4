/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./FormCreateDrill.css";

export default function FormCreateDrill() {
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmitCreateDrill = () => {
    const formData = new FormData();
    formData.append("upload", file);

    api
      .post("drill/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 201) {
          navigate("/drill");
        }
      })
      .catch((err) => err.response);
  };

  return (
    <form className="form" onSubmit={handleSubmitCreateDrill}>
      <h2 id="title">Créer ton Drill</h2>
      <label htmlFor="image">
        <div className="buttonImage">
          <h4 id="importBtn">Importer une image</h4>
        </div>
      </label>{" "}
      <input
        type="file"
        name="upload"
        id="image"
        accept="image/*"
        onChange={handleFile}
        style={{ display: "none" }}
      />
      <div className="btn-create">
        <button type="submit" id="btn-createWorkout" value="Creation">
          CREEZ TON EXERCICE
        </button>
      </div>
    </form>
  );
}
