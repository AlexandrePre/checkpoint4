import { BrowserRouter as Router } from "react-router-dom";
import Transition from "./Transition";
import AuthProvider from "./hooks/authContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <Router>
        <AuthProvider>
          <Transition />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
