const router = require("express").Router();
const { addWorkout, getWorkouts } = require("../controllers/workoutController");


router.post("/", addWorkout);
router.get("/", getWorkouts);

module.exports = router;