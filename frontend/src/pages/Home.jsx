import Homebody from "../components/Home/Homebody";
import NavBar from "../components/Home/NavBar";
import "./Home.css";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <div className="homePage">
      <NavBar />
      <header className="App-header">
        <h2> Training. Inc </h2>
        <h2> TON PROGRAMME D'ENTRAINEMENT </h2>
        <h2> PERSONNEL</h2>
      </header>
      <Homebody />
      <Footer />
    </div>
  );
}
