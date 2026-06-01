import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BuildingMuscles from "./pages/BuildingMuscles";
import TrainingAtHome from "./pages/TrainingAtHome";
import GymPlan from "./pages/GymPlan";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/muscles" element={<BuildingMuscles />} />
        <Route
          path="/home-training"
          element={<TrainingAtHome />}
        />
        <Route
          path="/gym-plan"
          element={<GymPlan />}
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;