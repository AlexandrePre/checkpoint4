import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/img/logo.png";
import triangle from "../../assets/img/triangle.png";
import logoDrills from "../../assets/img/logo1.png";
import logoWorkout from "../../assets/img/logo2.png";
import message from "../../assets/img/message.png";
import { authContext } from "../../hooks/authContext";
import "./NavBarDash.css";

function NavBar({ handleClickShown }) {
  const { logout, auth } = useContext(authContext);

  const [dropMenu, setDropMenu] = useState(true);
  const handleClick = () => {
    setDropMenu(!dropMenu);
    handleClickShown();
  };

  const handleSubmission = () => {
    api
      .put(`/user/disconnect/${auth.data.id}`, false)
      .catch((err) => err.response);
    logout();
  };

  return (
    <div>
      <nav id="navbar">
        <ul className="listeNav">
          <div className="logodash">
            <Link to="/dashboard">
              <img id="logodash" src={logo} alt="logo" />
            </Link>
          </div>

          <div className="drill">
            <img id="drill" src={logoDrills} alt="drill" />
            <h4>Drills</h4>
          </div>

          <div className="workout">
            <img
              id="workoutlogo"
              src={logoWorkout}
              alt="workout"
              role="presentation"
            />
            <h4>Workout</h4>
            <img
              src={triangle}
              alt=""
              id="triangle"
              onClick={handleClick}
              role="presentation"
            />
          </div>

          <div className="message">
            <img
              id="messageLogo"
              src={message}
              alt="message"
              role="presentation"
            />
            <h4>messages</h4>
          </div>
          <div className="pictureProfil">
            {/* {profilImage && (
              <img src={profileImage || profilImage} alt="" id="imgProfil" />
            )} */}
          </div>
        </ul>

        <div
          style={{ display: dropMenu ? "none" : "block" }}
          className="dropdown-menu"
        >
          <Link
            to="/dashboard/profil"
            className="profilMenu"
            style={{ textDecoration: "none" }}
          >
            <div className="profilMenu__p">
              <p> Mon profil</p>
            </div>
          </Link>
          <div
            role="presentation"
            onClick={handleSubmission}
            className="btn-logout"
          >
            <p>Déconnexion</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  handleClickShown: PropTypes.func.isRequired,
};

export default NavBar;
