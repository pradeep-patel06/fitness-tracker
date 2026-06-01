import { useState, useEffect } from "react";
import "./TrainingAtHome.css";

function TrainingAtHome() {

    const [equipment, setEquipment] = useState("No Equipment");

    const [goal, setGoal] = useState("Fat Loss");

    const [started, setStarted] = useState(false);

    const [time, setTime] = useState(30);

    const [exerciseCount, setExerciseCount] = useState(0);

    const [calories, setCalories] = useState(0);

    const [rest, setRest] = useState(false);

    const [message, setMessage] = useState(
        "Let's Crush Today's Workout "
    );

    const workouts = {

        "Fat Loss": {
            exercise: "Jump Squats",
            reps: "20 Reps",
            calories: "250 kcal",
            duration: "30 mins",
        },

        "Home Strength": {
            exercise: "Push-Ups",
            reps: "15 Reps",
            calories: "320 kcal",
            duration: "45 mins",
        },

        "Flexibility": {
            exercise: "Yoga Stretch",
            reps: "10 Reps",
            calories: "120 kcal",
            duration: "25 mins",
        },

        "Cardio": {
            exercise: "Mountain Climbers",
            reps: "25 Reps",
            calories: "400 kcal",
            duration: "35 mins",
        },

    };

    

    const startTraining = () => {

        setStarted(true);

        setRest(false);

        setTime(30);

        setExerciseCount(0);

        setCalories(0);

        setMessage("Let's Crush Today's Workout ");

        const audio = new Audio(
            "https://www.soundjay.com/buttons/sounds/button-3.mp3"
        );

        audio.play();

    };

    

    useEffect(() => {

        let timer;

        if (started && time > 0 && !rest) {

            timer = setInterval(() => {

                setTime((prev) => prev - 1);

                setExerciseCount((prev) => prev + 1);

                setCalories((prev) => prev + 4);

            }, 1000);

        }

        if (time === 0 && !rest) {

            setRest(true);

            setMessage("Rest Time 💧");

            setTime(15);

        }

        else if (time === 0 && rest) {

            setRest(false);

            setMessage("Back To Workout ");

            setTime(30);

        }

        return () => clearInterval(timer);

    }, [started, time, rest]);

    return (

        <div className="home-training-page">

            {/* TOP */}

            <div className="top-home">

                <h1>Smart Home Trainer </h1>

                <p>
                    Personalized AI-style home workouts for your fitness goals.
                </p>

            </div>

            {/* SELECTORS */}

            <div className="selectors">

                <div className="select-box">

                    <label>Equipment</label>

                    <select
                        value={equipment}
                        onChange={(e) => setEquipment(e.target.value)}
                    >

                        <option>No Equipment</option>

                        <option>Dumbbells</option>

                        <option>Resistance Band</option>

                        <option>Yoga Mat</option>

                    </select>

                </div>

                <div className="select-box">

                    <label>Goal</label>

                    <select
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    >

                        <option>Fat Loss</option>

                        <option>Home Strength</option>

                        <option>Flexibility</option>

                        <option>Cardio</option>

                    </select>

                </div>

            </div>

            

            <div className="workout-card">

                <h2>{goal} Workout</h2>

                <div className="workout-info">

                    <div className="info">
                        <span>Exercise</span>
                        <h3>{workouts[goal].exercise}</h3>
                    </div>

                    <div className="info">
                        <span>Target Reps</span>
                        <h3>{workouts[goal].reps}</h3>
                    </div>

                    <div className="info">
                        <span>Workout Duration</span>
                        <h3>{workouts[goal].duration}</h3>
                    </div>

                    <div className="info">
                        <span>Calories Goal</span>
                        <h3>{workouts[goal].calories}</h3>
                    </div>

                </div>

               

                <button
                    className="train-btn"
                    onClick={startTraining}
                >
                    Start Home Workout
                </button>

                

                {
                    started && (

                        <div className="live-session">

                            <h2>{message}</h2>

                            <div className="live-grid">

                                <div className="live-card">
                                    <span>Countdown</span>
                                    <h3>{time}s</h3>
                                </div>

                                <div className="live-card">
                                    <span>Exercise Count</span>
                                    <h3>{exerciseCount}</h3>
                                </div>

                                <div className="live-card">
                                    <span>Calories Burned</span>
                                    <h3>{calories} kcal</h3>
                                </div>

                            </div>

                            

                            <div className="challenge-box">

                                <h3>Today's Challenge </h3>

                                <p>
                                    Complete 100 Push-Ups Today
                                </p>

                            </div>

                        </div>

                    )
                }

                <div className="control-buttons">

                    <button
                        onClick={() => setStarted(false)}
                    >
                        Stop Workout
                    </button>

                    <button
                        onClick={startTraining}
                    >
                        Restart
                    </button>

                </div>

            </div>

        </div>

    );
}

export default TrainingAtHome;