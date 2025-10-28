import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./LandingPage";
import Experience from "./Experience";
import About from "./About";
import Projects from "./Projects";
import GameProjects from "./GameProjects";
import OnlineMultiplayer from "./OnlineMultiplayer";
import SinglePlayerShooter from "./SinglePlayerShooter";
import Tanks from "./Tanks";
import WordGame from "./WordGame";
import RPG from "./RPG";
import GameJam from "./GameJam";
import WebProjects from "./WebProjects";
import VirtualVogue from "./VirtualVogue";
import ContactManager from "./ContactManager";
import PortfolioApp from "./PortfolioApp";
import VRProjects from "./VRProjects";
import OtherProjects from "./OtherProjects";
import GraphProblem from "./GraphProblem";
import Backtracking from "./Backtracking";
import Schedules from "./Schedules";
import VM from "./VM";
import Contact from "./Contact";
import Capstone from "./Capstone";
import './App.css';
import Guitar from "./GuitarEnthusiast";
import Pal from "./PantryPal";
import MorganStanley from "./MorganStanley";
import Mthree from "./Mthree";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/GameProjects" element={<GameProjects />} />
        <Route path="/OnlineMultiplayer" element={<OnlineMultiplayer />} />
        <Route path="/SinglePlayerShooter" element={<SinglePlayerShooter />} />
        <Route path="/Tanks" element={<Tanks />} />
        <Route path="/WordGame" element={<WordGame />} />
        <Route path="/RPG" element={<RPG />} />
        <Route path="/GameJam" element={<GameJam />} />
        <Route path="/VRProjects" element={<VRProjects />} />
        <Route path="/WebProjects" element={<WebProjects />} />
        <Route path="/VirtualVogue" element={<VirtualVogue />} />
        <Route path="/ContactManager" element={<ContactManager />} />
        <Route path="/PortfolioApp" element={<PortfolioApp />} />
        <Route path="/Capstone" element={<Capstone />} />
        <Route path="/OtherProjects" element={<OtherProjects />} />
        <Route path="/GraphProblem" element={<GraphProblem />} />
        <Route path="/Backtracking" element={<Backtracking/>} />
        <Route path="/VM" element={<VM />} />
        <Route path="/Schedules" element={<Schedules />} />
        <Route path="/GuitarEnthusiast" element={<Guitar />} />
        <Route path="/PantryPal" element={<Pal />} />
        <Route path="/MorganStanley" element={<MorganStanley />} />
        <Route path="/Mthree" element={<Mthree />} />
      </Routes>
    </Router>
  );
}

export default App;
