# 🍽️ Zomato Orders Backend API

A simple and efficient backend API built using **Node.js**, **Express**, and **MySQL** that provides paginated order data. This project is designed for learning backend fundamentals and demonstrating API development with database integration.

---

## 🚀 Features

* 📦 Fetch orders with pagination (`limit` & `offset`)
* ⚡ Fast and lightweight Express server
* 🗄️ MySQL database integration
* 🔄 RESTful API structure
* 🧹 Clean and readable code structure

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Driver:** mysql2

---

## 📂 Project Structure

```
Backend_zomato/
│── src/
│   ├── server.js        # Express server
│   ├── connector.js     # MySQL connection
│   ├── createDatabase.js # DB setup script
│   ├── data.js          # Sample data
│
│── package.json
│── .gitignore
│── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Rohan7-cpu/zomato_backend_React.git
cd zomato_backend_React
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup MySQL Database

Make sure MySQL is running.

Update your credentials in `connector.js`:

```js
user: "root",
password: "your_password",
database: "zomato"
```

---

### 4️⃣ Create Database & Table

```bash
node createDatabase.js
```

---

### 5️⃣ Run the server

```bash
node server.js
```

Server will start at:

```
http://localhost:8080
```

---

## 📡 API Endpoint

### 👉 Get Orders (Paginated)

```
GET /api/orders
```

### 🔹 Query Params

| Param  | Type   | Description       |
| ------ | ------ | ----------------- |
| limit  | number | Number of records |
| offset | number | Starting index    |

---

### ✅ Example

```
http://localhost:8080/api/orders?limit=10&offset=0
```

---

### 📤 Response

```json
{
  "count": 10,
  "data": [
    {
      "_id": "1",
      "title": "Order 1",
      "description": "Sample order"
    }
  ]
}
```

---

## ⚠️ Notes

* Default `limit = 10` if not provided
* Default `offset = 0`
* Make sure MySQL server is running before starting backend

---

## 📌 Future Improvements

* 🔐 Add authentication (JWT)
* 📊 Add total count & pagination metadata
* 🌐 Deploy API (Render / Railway)
* 🧪 Add validation & error handling middleware

---

## 👨‍💻 Author

**Rohan Panda**
GitHub: https://github.com/Rohan7-cpu

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub and share it!

