import { useState } from "react";
import "./GymPlan.css";

function GymPlan() {

  const [weight, setWeight] = useState("");

  const [height, setHeight] = useState("");

  const [bmi, setBmi] = useState(null);

  const [result, setResult] = useState("");

  const [goal, setGoal] = useState("Muscle Gain");

  const [activePlan, setActivePlan] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

 

  const calculateBMI = () => {

    if (!weight || !height) return;

    const heightInMeter = height / 100;

    const bmiValue =
      (weight / (heightInMeter * heightInMeter)).toFixed(1);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {

      setResult("Underweight");

    }

    else if (bmiValue >= 18.5 && bmiValue < 25) {

      setResult("Normal");

    }

    else if (bmiValue >= 25 && bmiValue < 30) {

      setResult("Overweight");

    }

    else {

      setResult("Obese");

    }

  };

  

  const buyPlan = async (selectedPlan, amount) => {

    try {

      setLoading(true);

      setSuccess(false);

      const response = await fetch(
        "http://localhost:5000/api/payment/create-order",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            amount,
          }),
        }
      );

      const data = await response.json();

      setLoading(false);

      const options = {

        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: data.amount,

        currency: data.currency,

        name: "ActivePulse",

        description: "Premium Gym Subscription",

        order_id: data.id,

        handler: function (response) {

          setSuccess(true);

          setActivePlan(selectedPlan);

          const audio = new Audio(
            "https://www.soundjay.com/buttons/sounds/button-3.mp3"
          );

          audio.play();

        },

        prefill: {

          name: "ActivePulse User",

          email: "user@gmail.com",

          contact: "9999999999",

        },

        theme: {

          color: "#ff0000",

        },

      };

      const razor = new window.Razorpay(options);

      razor.open();

    }

    catch (error) {

      console.log(error);

      setLoading(false);

    }

  };

  

  const dietPlans = {

    "Weight Gain": {

      calories: "3200 kcal",

      protein: "150g",

      carbs: "400g",

      meals:
        "Chicken, Rice, Peanut Butter, Banana Shake",

    },

    "Weight Loss": {

      calories: "1800 kcal",

      protein: "120g",

      carbs: "150g",

      meals:
        "Oats, Eggs, Salad, Grilled Chicken",

    },

    "Muscle Gain": {

      calories: "2800 kcal",

      protein: "170g",

      carbs: "300g",

      meals:
        "Chicken Breast, Rice, Eggs, Protein Shake",

    },

  };

  return (

    <div className="gym-page">

      

      <div className="gym-top">

        <h1>Premium Gym Planner </h1>

        <p>
          Smart BMI, Subscription & AI Diet Planning
        </p>

      </div>

      

      <div className="gym-card">

        <h2>BMI Calculator</h2>

        <div className="input-grid">

          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) =>
              setHeight(e.target.value)
            }
          />

        </div>

        <button
          className="gym-btn"
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>

        {
          bmi && (

            <div className="bmi-result">

              <h3>Your BMI: {bmi}</h3>

              <p>{result}</p>

            </div>

          )
        }

      </div>

      

      <div className="gym-card">

        <h2>Select Fitness Goal</h2>

        <div className="goal-buttons">

          <button
            onClick={() =>
              setGoal("Weight Gain")
            }
          >
            Weight Gain
          </button>

          <button
            onClick={() =>
              setGoal("Weight Loss")
            }
          >
            Weight Loss
          </button>

          <button
            onClick={() =>
              setGoal("Muscle Gain")
            }
          >
            Muscle Gain
          </button>

        </div>

      </div>

      

      <div className="gym-card">

        <h2>{goal} Diet Plan </h2>

        <div className="diet-grid">

          <div className="diet-box">

            <span>Calories</span>

            <h3>
              {dietPlans[goal].calories}
            </h3>

          </div>

          <div className="diet-box">

            <span>Protein</span>

            <h3>
              {dietPlans[goal].protein}
            </h3>

          </div>

          <div className="diet-box">

            <span>Carbs</span>

            <h3>
              {dietPlans[goal].carbs}
            </h3>

          </div>

          <div className="diet-box">

            <span>Meals</span>

            <h3>
              {dietPlans[goal].meals}
            </h3>

          </div>

        </div>

      </div>

      
      <div className="gym-card">

        <h2>
          Choose Subscription 
        </h2>

        <div className="subscription-grid">

          {/* BASIC */}

          <div className="sub-box">

            <h3>Basic</h3>

            <p>Workout Access</p>

            <p>Diet Tips</p>

            <button
              onClick={() =>
                buyPlan("Basic", 499)
              }
            >
              {
                activePlan === "Basic"
                ? "ACTIVE PLAN"
                : "Choose Plan"
              }
            </button>

          </div>

          

          <div className="sub-box premium">

            <h3>Pro</h3>

            <p>AI Workouts</p>

            <p>
              Advanced Analytics
            </p>

            <button
              onClick={() =>
                buyPlan("Pro", 999)
              }
            >
              {
                activePlan === "Pro"
                ? "ACTIVE PLAN"
                : "Upgrade"
              }
            </button>

          </div>

          

          <div className="sub-box elite">

            <h3>Elite</h3>

            <p>Personal Coach</p>

            <p>Premium Diet</p>

            <button
              onClick={() =>
                buyPlan("Elite", 1999)
              }
            >
              {
                activePlan === "Elite"
                ? "ACTIVE PLAN"
                : "Upgrade"
              }
            </button>

          </div>

        </div>

        

        {
          loading && (

            <div className="payment-box">

              <div className="loader"></div>

              <p>
                Processing Payment...
              </p>

            </div>

          )
        }

        

        {
          success && (

            <div className="success-box">

              <h2>
                {activePlan} Plan Activated 
              </h2>

              <p>
                Premium Membership
                Successfully Enabled
              </p>

            </div>

          )
        }

      </div>

      {/* AI */}

      <div className="ai-box">

        <h2>
          AI Recommendation 
        </h2>

        <p>
          Increase protein intake and
          complete 4 workouts this week
          for faster progress.
        </p>

      </div>

    </div>

  );

}

export default GymPlan;