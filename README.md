# LifeSRE ⚙️

### Life Infrastructure Reliability Engineer

LifeSRE is an AI-powered automation platform that monitors subscription emails, detects upcoming renewals, evaluates financial risk, and automatically helps users cancel or switch services to save money.

The system applies **Site Reliability Engineering (SRE)** principles to personal life infrastructure, helping users manage subscriptions, contracts, and renewals intelligently.

---

# 🌐 Live Application

Frontend:
https://lifesre.vercel.app

Backend API:
https://lifesre-backend.onrender.com

---

# 🛠️ Tech Stack Used

## Frontend

* React (Vite)
* JavaScript
* CSS3
* CountUp.js (animations)

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## Integrations

* Google OAuth 2.0 (Gmail access)
* Gmail API (email monitoring)
* Twilio WhatsApp API (notifications)
* OpenAI API (email extraction AI)

## Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

# 🚀 Features

## 📩 Gmail Integration

Secure OAuth connection allows LifeSRE to monitor emails for subscription renewals and billing notices.

---

## 🔎 AI Contract Extraction

Automatically extracts:

* Vendor name
* Renewal date
* Subscription cost
* Contract type
* Cancellation window

---

## ⚠️ Risk Detection Engine

Analyzes contracts and classifies them as:

* Low Risk
* Medium Risk
* High Risk

Based on renewal timing and cost.

---

## 💰 Savings Recommendation Engine

Finds potential savings opportunities and suggests switching services.

---

## 🔁 Automated Remediation

With one click users can:

* Send cancellation email
* Archive contract
* Record savings

---

## 📊 Dashboard Analytics

Users can view:

* Total contracts
* Upcoming renewals
* Estimated monthly spend
* Total savings

---

## 📱 WhatsApp Notifications

Users receive alerts for:

* Upcoming renewals
* High-risk contracts
* Potential savings

---

## ⏰ Automated Scheduler

Background cron service checks subscriptions daily and sends reminders.

---

# 🧩 Getting Started

To run the project locally:

---

## 1️⃣ Clone the Repository

git clone https://github.com/yourusername/lifesre.git
cd lifesre

---

## 2️⃣ Install Backend Dependencies

cd backend
npm install

---

## 3️⃣ Install Frontend Dependencies

cd ../frontend
npm install

---

## 4️⃣ Configure Environment Variables

Create a `.env` file inside the **backend folder**.

Example:

PORT=8000
MONGO_URI=your_mongodb_uri

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

OPENAI_API_KEY=your_openai_key

TWILIO_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_NUMBER=your_twilio_whatsapp_number
USER_WHATSAPP_NUMBER=your_phone_number

---

## 5️⃣ Start Backend Server

cd backend
npm start

Backend runs on:

http://localhost:8000

---

## 6️⃣ Start Frontend

cd frontend
npm run dev

Frontend runs on:

http://localhost:5173

---

# 📦 Project Structure

LifeSRE/

├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── main.jsx
│   │
│   ├── index.html
│   └── package.json
│

├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── googleAuth.js
│   │

│   ├── models/
│   │   ├── Contract.js
│   │   ├── User.js
│   │   └── AuditLog.js
│   │

│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── gmailRoutes.js
│   │   ├── dashboardRoutes.js
│   │   └── contractRoutes.js
│   │

│   ├── services/
│   │   ├── gmailService.js
│   │   ├── extractionService.js
│   │   ├── riskEngine.js
│   │   ├── remediationService.js
│   │   ├── whatsappService.js
│   │   └── scheduler.js
│   │

│   ├── server.js
│   └── package.json

└── README.md

---

# 🔐 Security

* OAuth based Gmail authentication
* Environment variables for all secrets
* MongoDB Atlas secure connection
* CORS protection for API endpoints

---

# 🔄 Example Workflow

1️⃣ User logs in with Google
2️⃣ LifeSRE scans Gmail for subscription emails
3️⃣ AI extracts contract details
4️⃣ Risk engine evaluates upcoming renewals
5️⃣ Dashboard displays contracts and risks
6️⃣ User can **Switch & Save** with one click
7️⃣ Cancellation email is sent automatically
8️⃣ Savings are recorded and tracked

---

# 📄 License

This project is intended for **educational and portfolio use**.

Please contact the author before commercial use or redistribution.

