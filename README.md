Fitness Tracker

A full-stack Fitness Tracker web application built using the MERN stack. Users can register, log in, track workouts, calculate calories burned, and make premium payments using Razorpay.

Features

- User Registration & Login
- JWT Authentication
- Google Authentication (Firebase)
- Workout Tracking
- Automatic Calorie Calculation
- Workout History
- Razorpay Payment Integration
- Responsive UI
- MongoDB Database

Tech Stack

Frontend

- React.js
- React Router
- Axios
- Firebase Authentication
- CSS

Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Razorpay

Project Structure

fitness-tracker/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
└── README.md

Installation

Clone Repository

git clone https://github.com/pradeep-patel06/fitness-tracker.git
cd fitness-tracker

Backend Setup

cd backend
npm install

Create a ".env" file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

Run Backend:

npm start

Frontend Setup

cd frontend
npm install
npm run dev

API Endpoints

Authentication

- POST "/api/auth/register"
- POST "/api/auth/login"

Workouts

- GET "/api/workouts"
- POST "/api/workouts"

Payments

- POST "/api/payment/create-order"

Deployment

Frontend

- Vercel

Backend

- Render

Database

- MongoDB Atlas

Author

Pradeep Patel

- GitHub: https://github.com/pradeep-patel06

License

This project is open-source and available under the MIT License.
