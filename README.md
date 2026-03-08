🚀 QuickServe – Local Service Booking Platform
QuickServe is a web-based platform designed to connect users with local service providers such as electricians, plumbers, cleaners, and other home services. The platform simplifies the process of finding reliable service providers by allowing users to browse services, view provider details, and make bookings online.

This project was developed as a full-stack web application for a minor academic project and demonstrates the integration of frontend development, backend APIs, and relational databases.

📌 Project Overview
In many cities, especially smaller cities, finding reliable service providers often depends on word-of-mouth or manual searching. This process can be inefficient and time-consuming.

QuickServe aims to solve this problem by providing a centralized digital platform where users can easily discover and connect with local service providers.

The platform allows users to:

Browse available services

View providers based on category

Book services easily

Automatically notify providers when bookings are made

🎯 Current Features
The current version of QuickServe (Minor Project Version) includes the following implemented features.

📋 Service Category Listing
Users can browse different types of services such as electricians, plumbers, and other local services.

👨‍🔧 Provider Listing System
The platform displays service providers along with important details such as:

Provider Name

Service Type

Contact Information

Service Area

📅 Service Booking Interface
Users can submit a booking request by providing necessary details through a booking form.

📧 Email Notification System
When a booking is created, an email notification is automatically sent to the provider using Nodemailer.

🔎 Category-Based Filtering
Users can view providers based on selected service categories.

💾 Database Integration
All providers and booking data are stored in a MySQL database.

🔗 REST API Backend
The backend is built using Node.js and Express.js, which exposes REST APIs for service listing and booking management.

🌐 Simple Web Interface
A clean interface built using HTML, CSS, and JavaScript allows users to easily navigate the platform.

🧩 System Architecture
QuickServe follows a client-server architecture where the frontend communicates with the backend through REST APIs.

User (Browser)
      │
      │ HTTP Requests
      ▼
Frontend (HTML, CSS, JavaScript)
      │
      │ API Calls
      ▼
Backend Server (Node.js + Express.js)
      │
      │ SQL Queries
      ▼
MySQL Database
This architecture separates:

Presentation Layer (Frontend)

Application Logic (Backend)

Data Storage (Database)

🛠️ Tech Stack
Frontend
HTML5

CSS3

JavaScript

Backend
Node.js

Express.js

Database
MySQL

Tools & Platforms
Git & GitHub

VS Code

Postman (API testing)

📂 Project Structure
QuickServe
│
├── frontend
│   ├── index.html
│   ├── categories.html
│   ├── services.html
│   ├── css/
│   └── js/
│
├── backend
│   ├── server.js
│   ├── routes/
│   ├── config/
│   ├── node_modules/
│   └── package.json
│
└── README.md
⚙️ Installation & Setup
Follow the steps below to run the project locally.

1️⃣ Clone the Repository
git clone https://github.com/yourusername/QuickServe.git
2️⃣ Navigate to Backend Folder
cd backend
3️⃣ Install Dependencies
npm install
4️⃣ Configure Environment Variables
Create a .env file in the backend directory and add the following:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=quickserve
PORT=5000
5️⃣ Run the Backend Server
node server.js
or using nodemon:

npx nodemon server.js
6️⃣ Run the Frontend
Open the frontend files in a browser or run them using a local development server.

🔌 API Endpoints
The backend exposes REST APIs to manage providers and bookings.

Get All Providers
GET /api/providers
Returns a list of available service providers.

Get Providers by Service Category
GET /api/providers/by-service/:service
Example:

GET /api/providers/by-service/electrician
Create a Booking
POST /api/bookings
Example Request Body:

{
  "providerId": 2,
  "customerAddress": "Civil Lines, Rewa",
  "bookingDate": "2025-01-15",
  "timeSlot": "10:00 AM - 12:00 PM"
}
📸 Screenshots

Home Page
<img width="1837" height="908" alt="Screenshot 2026-03-08 195127" src="https://github.com/user-attachments/assets/0ea03bc5-9613-4529-9e9b-30f1d82a2763" />
<img width="1840" height="911" alt="Screenshot 2026-03-08 195222" src="https://github.com/user-attachments/assets/fa8f66b8-d478-40fa-8770-f13b33ee1662" />
<img width="1834" height="907" alt="Screenshot 2026-03-08 195243" src="https://github.com/user-attachments/assets/9288053d-be8f-4870-84e5-f250b2442468" />

Service Categories and Sub Categories Page
<img width="1832" height="907" alt="Screenshot 2026-03-08 195307" src="https://github.com/user-attachments/assets/1c64d2c6-b602-4794-a1d0-a20f9205417e" />
<img width="1855" height="907" alt="Screenshot 2026-03-08 195347" src="https://github.com/user-attachments/assets/f84514c1-8acf-4d65-8367-6f60c9a0ace1" />

Provider Listing Page
<img width="1835" height="908" alt="Screenshot 2026-03-08 195431" src="https://github.com/user-attachments/assets/dcd92ed1-0a01-4d9d-9532-a04230e94445" />

Booking Interface
<img width="1833" height="903" alt="Screenshot 2026-03-08 195615" src="https://github.com/user-attachments/assets/abb1fbb6-38ca-4a62-9781-1c006d4d9dd4" />
<img width="1785" height="920" alt="Screenshot 2026-03-08 195709" src="https://github.com/user-attachments/assets/5702aa67-2eb0-45c7-ab6a-5515b726af1b" />

🧪 Testing
The application was tested using:

Postman for API testing

Browser testing

Local development environment

🚧 Future Improvements
The following features are planned for future development:

User authentication system (Customer / Provider login)

Admin dashboard

Provider verification system

Rating and review system

Location-based service filtering

Mobile application using React Native

Hindi language support

Booking status tracking

Online payment integration

🌍 Real‑World Implementation
QuickServe can be implemented in small and medium-sized cities where finding reliable service providers is often difficult.

By digitizing service discovery and booking, the platform can improve accessibility and efficiency for both customers and service providers.

👨‍💻 Contributors
Project developed by:

Keshav Mishra
Project Lead / Backend Development & Testing

Sankalp sohgaura
Frontend Development 

📜 License
This project was developed for educational and learning purposes.

⭐ Support
If you find this project useful, consider giving the repository a ⭐ on GitHub.
