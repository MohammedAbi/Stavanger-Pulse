import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ParkingPage from "./pages/ParkingPage.tsx";
import PopulationPage from "./pages/PopulationPage";
import FirstNamesPage from "./pages/FirstNamesPage.tsx";
import SolvbergetPage from "./pages/SolvbergetPage.tsx";
import TidePage from "./pages/TidePage.tsx";
import FolkeregisterPage from "./pages/FolkeregisterPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import SculpturesPage from "./pages/SculpturesPage.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parking" element={<ParkingPage />} />
        <Route path="/population" element={<PopulationPage />} />
        <Route path="/firstnames" element={<FirstNamesPage />} />
        <Route path="/solvberget" element={<SolvbergetPage />} />
        <Route path="/tide" element={<TidePage />} />
        <Route path="/folkeregister" element={<FolkeregisterPage />} />
        <Route path="/sculptures" element={<SculpturesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
