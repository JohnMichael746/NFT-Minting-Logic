import "./styles.css";
import { useMoralis } from "react-moralis";
import CreateHolder from "./createHolder/CreateHolder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <button
          onClick={() =>
            authenticate({ signingMessage: "Hello, welcome on Lillup" })
          }
        >
          Authenticate
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <div>
        <button onClick={() => logout()}>Logout</button>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<CreateHolder />} />
        </Routes>
      </Router>
    </div>
  );
}
