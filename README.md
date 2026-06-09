# 🍽️ Zomato Orders Backend API

A RESTful backend API built using **Node.js, Express.js, and MySQL** that provides paginated order data. The application is connected to a **Railway-hosted MySQL database** and deployed on **Render** for public access.

## 🚀 Live Demo

**Live API:**

https://zomato-backend-react-1.onrender.com/api/orders

### Example Requests

```bash
https://zomato-backend-react-1.onrender.com/api/orders

https://zomato-backend-react-1.onrender.com/api/orders?limit=2&offset=0

https://zomato-backend-react-1.onrender.com/api/orders?limit=2&offset=2
```

---

## ✨ Features

* 📦 Fetch orders using REST API
* 📄 Server-side pagination with LIMIT and OFFSET
* 🗄️ Railway MySQL database integration
* ⚡ Fast and lightweight Express server
* 🔒 Environment variable configuration using dotenv
* ☁️ Cloud deployment on Render
* 🧹 Clean and modular project structure

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MySQL
* Railway

### Deployment

* Render

### Packages Used

* express
* mysql2
* dotenv
* cors
* body-parser

---

## 📂 Project Structure

```text
Backend_zomato/
│
├── src/
│   ├── server.js
│   ├── connector.js
│   ├── createDatabase.js
│   └── data.js
│
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Local Setup

### 1. Clone Repository

```bash
git clone https://github.com/Rohan7-cpu/zomato_backend_React.git
cd zomato_backend_React/Backend_zomato
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```env
DB_HOST=your_host
DB_PORT=your_port
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=railway
```

### 4. Create Database Table

```bash
node src/createDatabase.js
```

### 5. Run Application

```bash
node src/server.js
```

Server runs at:

```text
http://localhost:8080
```

---

## 📡 API Endpoint

### Get Orders

```http
GET /api/orders
```

### Query Parameters

| Parameter | Type   | Description                |
| --------- | ------ | -------------------------- |
| limit     | Number | Number of records to fetch |
| offset    | Number | Starting position          |

### Example

```http
GET /api/orders?limit=5&offset=0
```

---

## 📤 Sample Response

```json
[
  {
    "id": 1,
    "item_name": "Burger",
    "price": 120
  },
  {
    "id": 2,
    "item_name": "Pizza",
    "price": 300
  }
]
```

---

## 🎯 Key Concepts Demonstrated

* REST API Development
* MySQL Database Connectivity
* Pagination using SQL LIMIT and OFFSET
* Environment Variable Management
* Cloud Deployment
* Backend Project Structure

---

## 📌 Future Enhancements

* JWT Authentication
* CRUD Operations
* Search & Filtering
* API Documentation with Swagger
* Input Validation Middleware
* Unit & Integration Testing

---

## 👨‍💻 Author

**Rohan Panda**

GitHub: https://github.com/Rohan7-cpu

---

⭐ If you found this project useful, consider giving it a star on GitHub.

