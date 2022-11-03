import { Link } from 'react-router-dom'
//Components
import Navbar from "./components/Navbar";
import WelcomeC from "./components/WelcomeC";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div>
      <Navbar />
      <WelcomeC />
      <MainContent />
    </div>
  );
}

export default App;
