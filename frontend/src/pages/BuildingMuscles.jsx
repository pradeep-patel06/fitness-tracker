import { useState, useEffect } from "react";
import "./BuildingMuscles.css";

function BuildingMuscles() {

  const [goal, setGoal] = useState("Bulk");

  const [started, setStarted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [paused, setPaused] = useState(false);

  const [completed, setCompleted] = useState(false);

  const [time, setTime] = useState(60);

  const [progress, setProgress] = useState(0);

  const [calories, setCalories] = useState(0);

  const [streak, setStreak] = useState(5);

  const [xp, setXp] = useState(0);

  const [message, setMessage] = useState(
    "Push Harder Than Yesterday "
  );

  const plans = {

    Bulk: {
      workout: "Chest + Triceps",
      protein: "140g/day",
      duration: "70 mins",
      level: "Intermediate",
    },

    Lean: {
      workout: "Full Body + Cardio",
      protein: "110g/day",
      duration: "50 mins",
      level: "Beginner",
    },

    Strength: {
      workout: "Powerlifting Split",
      protein: "160g/day",
      duration: "90 mins",
      level: "Advanced",
    },

  };

 

  const startWorkout = () => {

  setLoading(true);

  

  setCompleted(false);

  setStarted(false);

  setPaused(false);

  setTime(60);

  setProgress(0);

  setCalories(0);

  setXp(0);

  setTimeout(() => {

    setLoading(false);

    setStarted(true);

    const audio = new Audio(
      "https://www.soundjay.com/buttons/sounds/button-3.mp3"
    );

    audio.play();

  }, 2000);

};

 

  const stopWorkout = () => {

    setStarted(false);

    setPaused(false);

  };

  

  useEffect(() => {

    const messages = [

      "Push Harder Than Yesterday ",

      "No Pain No Gain ",

      "Train Like A Beast ",

      "Success Starts With Discipline ",

      "Champions Never Quit "

    ];

    let index = 0;

    const interval = setInterval(() => {

      index = (index + 1) % messages.length;

      setMessage(messages[index]);

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  

  useEffect(() => {

    let timer;

    if (started && !paused && time > 0) {

      timer = setInterval(() => {

        setTime((prev) => prev - 1);

        setProgress((prev) => prev + 1.6);

        setCalories((prev) => prev + 5);

        setXp((prev) => prev + 2);

      }, 1000);

    }

    if (time === 0) {

      setCompleted(true);

      setStarted(false);

      setStreak((prev) => prev + 1);

    }

    return () => clearInterval(timer);

  }, [started, paused, time]);

  return (

    <div className="muscle-page">

      

      <div className="top-section">

        <h1>AI Muscle Planner </h1>

        <p>
          Select your goal and get a personalized muscle building plan.
        </p>

      </div>

      

      <div className="goal-buttons">

        <button onClick={() => setGoal("Bulk")}>
          Bulk
        </button>

        <button onClick={() => setGoal("Lean")}>
          Lean Muscle
        </button>

        <button onClick={() => setGoal("Strength")}>
          Strength
        </button>

      </div>

      

      <div className="plan-card">

        <h2>{goal} Plan</h2>

        <div className="info-box">
          <span>Workout Split</span>
          <h3>{plans[goal].workout}</h3>
        </div>

        <div className="info-box">
          <span>Protein Intake</span>
          <h3>{plans[goal].protein}</h3>
        </div>

        <div className="info-box">
          <span>Workout Duration</span>
          <h3>{plans[goal].duration}</h3>
        </div>

        <div className="info-box">
          <span>Difficulty</span>
          <h3>{plans[goal].level}</h3>
        </div>

        

        <button
          className="start-btn"
          onClick={startWorkout}
        >
          Start Training
        </button>

        

        {
          loading && (

            <div className="loading-box">

              <div className="loader"></div>

              <p>Preparing Workout Session...</p>

            </div>

          )
        }

        

        {
          started && (

            <div className="training-box">

              <h2>Workout Started </h2>

              <p className="motivation">
                {message}
              </p>

              

              <div className="stats-grid">

                <div className="stat-card">
                  <span>Countdown</span>
                  <h3>{time}s</h3>
                </div>

                <div className="stat-card">
                  <span>Calories Burned</span>
                  <h3>{calories} kcal</h3>
                </div>

                <div className="stat-card">
                  <span>Workout Streak</span>
                  <h3>{streak} Days</h3>
                </div>

                <div className="stat-card">
                  <span>XP Earned</span>
                  <h3>{xp} XP</h3>
                </div>

              </div>

              

              <div className="progress-section">

                <p>Exercise Progress</p>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{ width: `${progress}% `}}
                  ></div>

                </div>

              </div>

              

              <div className="water-box">

                 Stay Hydrated During Workout

              </div>

              

              <div className="control-buttons">

                <button
                  onClick={() => setPaused(!paused)}
                >
                  {paused ? "Resume" : "Pause"}
                </button>

                <button
                  onClick={stopWorkout}
                >
                  Stop
                </button>

              </div>

            </div>

          )
        }

        

        {
          completed && (

            <div className="completed-box">

              <h2>Workout Completed </h2>

              <p>
                Total Calories Burned: {calories} kcal
              </p>

              <p>
                XP Earned: {xp}
              </p>

              <p>
                Excellent Work Champion 
              </p>

            </div>

          )
        }

      </div>

    </div>

  );
}

export default BuildingMuscles;