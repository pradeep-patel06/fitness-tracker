import { useState } from "react";
import API from "../api";
import "./AddWorkout.css";

function AddWorkout({ refresh }) {
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/workouts", {
        type,
        duration
      });

      setType("");
      setDuration("");

      refresh(); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Workout</h2>

      <input
        type="text"
        placeholder="Workout Type (running, cycling...)"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddWorkout;