const Workout = require("../models/Workout");
const calculateCalories = require("../utils/calorieCalc");


exports.addWorkout = async (req, res) => {
  try {
    const { type, duration } = req.body;

    const calories = calculateCalories(type, duration);

    const workout = await Workout.create({
      type,
      duration,
      calories,
      userId: "test123" 
    });

    res.json(workout);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: err.message });
  }
};


exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: "test123" });
    res.json(workouts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: err.message });
  }
};