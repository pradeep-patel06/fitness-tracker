import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../api";

import "../styles/Dashboard.css";

import ProgressChart from "../components/ProgressChart";

import AddWorkout from "../components/AddWorkout";
import gym3 from "../assets/gym3.jpeg";

function Dashboard() {

  const navigate = useNavigate();

  const [workouts, setWorkouts] =
    useState([]);

  const [search, setSearch] =
    useState("");

  
  const userName =
    localStorage.getItem(
      "userName"
    ) || "Guest User";

  const userEmail =
    localStorage.getItem(
      "userEmail"
    ) || "guest@gmail.com";

  
  const fetchWorkouts = async () => {

    try {

      const res =
        await API.get("/workouts");

      setWorkouts(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    fetchWorkouts();

  }, []);

  
  const totalCalories =
    workouts.reduce(
      (total, workout) =>
        total + workout.calories,
      0
    );

  
  const avgDuration =
    workouts.length > 0
      ? Math.round(
        workouts.reduce(
          (total, workout) =>
            total + workout.duration,
          0
        ) / workouts.length
      )
      : 0;

  
  const filteredWorkouts =
    workouts.filter((workout) =>
      workout.type
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  
  const handleLogout = () => {

    const confirmLogout =
      window.confirm(
        "Are you sure you want to logout?"
      );

    if (confirmLogout) {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "userEmail"
      );

      localStorage.removeItem(
        "userName"
      );

      alert(
        "Logout Successful "
      );

      navigate("/");

    }

  };

  
  const goHome = () => {

    navigate("/");

  };

  return (

    <div className="dashboard">

      
      <div className="sidebar">

        <h2>
          FitTrack
        </h2>

        <ul>

          <li onClick={goHome}>
             Home
          </li>

          <li>
             Dashboard
          </li>

          <li>
             Workouts
          </li>

          <li>
             Settings
          </li>

        </ul>

      </div>

      
      <div className="main-content">

        
        <h1 className="logo">
           FitTrack Pro
        </h1>

        
        <div className="live-clock">

          {new Date().toLocaleString()}

        </div>

        
        <div className="welcome-box">

          <div>

            <h2>
              Welcome Back,
              {" "}
              {userName}
              {" "}
              
            </h2>

            <p>
              Stay consistent and smash your goals today
            </p>

          </div>

          <div className="streak">

             12 Day Streak

          </div>

        </div>

        
        <div className="quick-actions">

          <button>
             Add Workout
          </button>

          <button>
             Water Tracker
          </button>

          <button>
             Achievements
          </button>

        </div>

        
        <div className="stats">

          <div className="card">

            <h3>
              Total Workouts
            </h3>

            <p>
              {workouts.length}
            </p>

          </div>

          <div className="card">

            <h3>
              Calories Burned
            </h3>

            <p>
              {totalCalories} kcal
            </p>

          </div>

          <div className="card">

            <h3>
              Avg Duration
            </h3>

            <p>
              {avgDuration} mins
            </p>

          </div>

          <div className="card">

            <h3>
              Water Intake
            </h3>

            <p>
              3.2L 
            </p>

          </div>

          <div className="card bmi-card">

            <h3>
              BMI Status
            </h3>

            <p>
              22.1
            </p>

            <span>
              Healthy
            </span>

          </div>

        </div>

        
        <div className="charts">

          <div className="chart-box">

            <h2>
              Weekly Progress
            </h2>

            <ProgressChart
              data={workouts}
            />

          </div>

          <div className="chart-box">

            <h2>
              Daily Goal
            </h2>

            <div className="ring-box">

              <div className="ring">

                <h2>
                  75%
                </h2>

              </div>

            </div>

          </div>

        </div>

       
        <div className="add-workout">

          <h2>
            Add Workout
          </h2>

          <AddWorkout
            refresh={fetchWorkouts}
          />

        </div>

        
        <div className="search-box">

          <input
            type="text"
            placeholder="Search Workout..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

        
        {filteredWorkouts.length === 0 ? (

          <div className="empty">

            <h2>
              No Workouts Found
            </h2>

            <p>
              Start adding workouts 
            </p>

          </div>

        ) : (

          <div className="workout-grid">

            {filteredWorkouts.map(
              (workout) => (

                <div
                  className="workout-card"
                  key={workout._id}
                >

                  <h3>
                    {workout.type}
                  </h3>

                  <p>
                    Duration :
                    {" "}
                    {workout.duration}
                    {" "}
                    mins
                  </p>

                  <span>
                    {workout.calories}
                    {" "}
                    kcal
                  </span>

                </div>

              )
            )}

          </div>

        )}

      </div>

      
      <div className="profile">

        <img
          src="src/assets/gym3.jpeg"
          alt="profile"
          className="profile-img"
        />

        <h3>
          {userName}
        </h3>

        <p>
          {userEmail}
        </p>

        <button
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default Dashboard;