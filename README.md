![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express.js](https://img.shields.io/badge/Express.js-Framework-black)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)
![License](https://img.shields.io/badge/License-Educational-lightgrey)
#🚀 QuickServe – Local Service Booking Platform

QuickServe is a web-based platform that connects users with local service providers such as electricians, plumbers, cleaners, and other home services.

The platform simplifies the process of discovering, viewing, and booking local services through an easy-to-use interface.

This project was developed as a full‑stack web application for a minor academic project, demonstrating the integration of frontend development, backend APIs, and database systems.

---

##📌 Project Overview
In many cities, especially smaller ones, finding reliable service providers often relies on word-of-mouth or manual searching.

QuickServe aims to solve this problem by providing a centralized digital platform where users can:

• Browse available services

• View service providers

• Submit booking requests

• Automatically notify providers via email

---

##✨ Current Features
The current version of QuickServe (Minor Project Version) includes the following implemented features.

**📋 Service Category Listing**
Users can browse different types of services such as:

• Electricians

• Plumbers

• Other local services

---

**👨‍🔧 Provider Listing System**
The platform displays service providers along with important details such as:

• Provider Name

• Service Type

• Contact Information

• Service Area

---

**📅 Service Booking Interface**
Users can submit a booking request by filling out a booking form with necessary details.

---

**📧 Email Notification System**
When a booking is created, an automatic email notification is sent to the service provider using Nodemailer.

---

**🔎 Category-Based Filtering**
Users can view providers based on selected service categories.

---

**💾 Database Integration**
All providers and booking data are stored in a MySQL relational database.

---

**🔗 REST API Backend**
The backend is built using Node.js and Express.js, which exposes REST APIs for:

• service listing

• booking management

---

**🌐 Simple Web Interface**
A clean and simple interface built using:

• HTML

• CSS

• JavaScript

This allows users to easily navigate and interact with the platform.

---

##🧩 System Architecture
QuickServe follows a client-server architecture.

User (Browser)
      │
      │ HTTP Requests
      ▼
Frontend (HTML, CSS, JavaScript)
      │
      │ API Calls
      ▼
Backend (Node.js + Express.js)
      │
      │ SQL Queries
      ▼
MySQL Database
This architecture separates:

**• Presentation Layer**

**• Application Logic**

**• Data Storage**

making the application easier to maintain and scale.

---

##🛠 Tech Stack
**Frontend**
• HTML5

• CSS3

• JavaScript

**Backend**
• Node.js

• Express.js

**Database**
• MySQL

**Tools**
• Git

• GitHub

• VS Code

• Postman

---

##📂 Project Structure
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

---

##⚙️ Installation & Setup
**1️⃣ Clone the repository**
git clone https://github.com/yourusername/QuickServe.git

---

**2️⃣ Navigate to backend folder**
cd backend

---

**3️⃣ Install dependencies**
npm install

---

**4️⃣ Configure environment variables**
Create a .env file in the backend directory:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_database_password
DB_NAME=quickserve
PORT=5000

---

**5️⃣ Run the backend server**
node server.js
or

npx nodemon server.js

---

**6️⃣ Run the frontend**
Open the frontend files in your browser or run them using a local server.

##🔌 API Endpoints
**Get All Providers**
GET /api/providers
Returns a list of all service providers.

---

**Get Providers by Service Category**
GET /api/providers/by-service/:service
Example:
GET /api/providers/by-service/electrician

---

**Create a Booking**
POST /api/bookings
Example request body:

{
  "providerId": 2,
  "customerAddress": "Civil Lines, Rewa",
  "bookingDate": "2025-01-15",
  "timeSlot": "10:00 AM - 12:00 PM"
}

---

##📸 Screenshots

**• Home Page**
<img width="1837" height="908" alt="Screenshot 2026-03-08 195127" src="https://github.com/user-attachments/assets/f93a6ce3-b3e3-4767-841c-b811f128c22e" />
<img width="1840" height="911" alt="Screenshot 2026-03-08 195222" src="https://github.com/user-attachments/assets/a6db80bb-51af-442a-9a2d-49539f8f6b47" />
<img width="1834" height="907" alt="Screenshot 2026-03-08 195243" src="https://github.com/user-attachments/assets/360d3bff-397d-41a1-b631-4021b132b9d7" />

**• Service Categories and Sub Categories**
<img width="1832" height="907" alt="Screenshot 2026-03-08 195307" src="https://github.com/user-attachments/assets/4bcbf6b0-538a-4aac-aadd-2913c480b5c3" />
<img width="1855" height="907" alt="Screenshot 2026-03-08 195347" src="https://github.com/user-attachments/assets/44a1bb66-6637-4e10-802f-8ff92a6a6739" />

**• Provider Listing**
<img width="1835" height="908" alt="Screenshot 2026-03-08 195431" src="https://github.com/user-attachments/assets/43566851-7e4f-48a9-9dd9-cb78b6d1e9ad" />

**• Booking Form**
<img width="1833" height="903" alt="Screenshot 2026-03-08 195615" src="https://github.com/user-attachments/assets/715d09ed-d090-420e-a0dc-e5bcf4a40e8f" />

**• Email Notification**
<img width="1785" height="920" alt="Screenshot 2026-03-08 195709" src="https://github.com/user-attachments/assets/dfef4142-2370-4a14-b260-9856ef92a65e" />

---

##🧪 Testing
The application was tested using:

• **Postman** for API testing

• Browser testing

• Local development environment

---

##🚧 Future Improvements
The following features are planned for future development:

• User authentication system (Customer / Provider login)

• Admin dashboard

• Provider verification

• Rating and review system

• Location-based service filtering

• Mobile application (React Native)

• Hindi language support

• Online payment integration

• Booking status tracking

---

##👨‍💻 Contributors
**Keshav Mishra**
Project Lead / Backend Development, Testing & integration

**Sankalp Sohgaura**
Frontend Development 

---

##📜 License
This project is developed for educational and learning purposes.

---

##⭐ Support
If you find this project useful, consider giving the repository a ⭐ on GitHub.
