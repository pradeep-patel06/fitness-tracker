import Navbar from "../components/Navbar";
import "./Home.css";
import heroImg from "../assets/hero.jpeg";
import gym1 from "../assets/gym1.jpeg"
import gym2 from "../assets/gym2.jpeg"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <div className="hero">

        <div className="hero-left">
          <h1>
            Achieve Your Fitness <br />
            With <span>ActivePulse</span>
          </h1>

          <p>
            Join the ActivePulse community and transform your fitness journey.
            Our expert coaches and personalized programs are designed to help
            you achieve your goals.
          </p>

          <button
            onClick={() =>
              alert(
                " Welcome to ActivePulse \n\n" +
                "Start your fitness journey today and unlock:\n\n" +
                " Personalized Workout Plans\n" +
                " Daily Fitness Tracking\n" +
                " Smart Progress Analytics\n" +
                " Achievement Badges\n" +
                " Water & Calorie Tracking\n\n" +
                "Stay consistent, stay strong, and transform your body with ActivePulse  \n\nPlease Login First "
                
              )
            }
          >
            Start Your Journey
          </button>
        </div>

        <div className="hero-right">
          <img
            src={heroImg}
            alt="gym"
          />
        </div>
      </div>

      {/* Services */}
      <div className="services">
        <h2>Our Services</h2>

        <div className="service-cards">

          <div className="card">
            <img src={gym1} alt="gym" />

            <Link to="/muscles" className="service-link">
              <h3>Building Muscles</h3>
            </Link>
          </div>

          <div className="card">
            <img
              src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg"
              alt=""
            />
            <Link to="/home-training"
              className="service-link">


              <h3>Training At Home</h3>
            </Link>
          </div>

          <div className="card">
            <img src={gym2} alt="gym" />
            <Link
              to="/gym-plan"
              className="service-link"
            >
              <h3>Gym Plan</h3>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;