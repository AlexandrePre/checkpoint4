import FormInscription from "../components/Inscription/FormInscription";
import Connexion from "../components/Inscription/Connexion";
import logo from "../assets/img/logo.png";
import "./Inscription.css";

export default function Inscription() {
  return (
    <div className="inscription">
      <img src={logo} alt="logo" id="logoInscription" />
      <Connexion />
      <FormInscription />
    </div>
  );
}
