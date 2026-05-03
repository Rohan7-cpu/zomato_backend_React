# 📦 Zomato Orders API (Pagination with MySQL)

## 📌 Overview

This project is a Node.js + MySQL based backend application that demonstrates **pagination using LIMIT and OFFSET**.
It simulates a restaurant order system where large datasets are handled efficiently.

---

## 🚀 Features

* REST API using Express.js
* MySQL database integration
* Pagination using `LIMIT` and `OFFSET`
* Input validation for query parameters
* Default fallback values for invalid inputs

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MySQL

---

## 📂 Project Setup

### 1️⃣ Install dependencies

```bash
npm install
```

---

### 2️⃣ Configure database

Update your `connector.js` file:

```js
host: "localhost",
user: "root",
password: "your_password",
database: "zomato"
```

---

### 3️⃣ Create database & table

Run:

```bash
node createDatabase.js
```

This will:

* Create database `zomato`
* Create table `orders`
* Insert sample data

---

### 4️⃣ Start server

```bash
node server.js
```

Server will run on:

```
http://localhost:8080
```

---

## 📡 API Endpoint

### 🔹 Get Orders

```
GET /api/orders
```

---

## 🔧 Query Parameters

| Parameter | Type    | Default | Description                |
| --------- | ------- | ------- | -------------------------- |
| limit     | integer | 10      | Number of records to fetch |
| offset    | integer | 0       | Number of records to skip  |

---

## 📌 Example Requests

### ✅ Default

```
/api/orders
```

### ✅ With limit

/api/orders?limit=3

### ✅ With offset

/api/orders?offset=2


### ✅ With both

/api/orders?limit=2&offset=1

-------------------------------

## ⚠️ Validation Rules

* Only **positive integers** are allowed for `limit` and `offset`
* Invalid values (string, float, negative) → fallback to defaults:

  * `limit = 10`
  * `offset = 0`

---------------------------

## 📥 Response Format

```json
[
  {
    "_id": "string",
    "title": "string",
    "description": "string"
  }
]
```

------------------------------

## ✅ Acceptance Criteria

* Uses MySQL database
* Endpoint returns correct paginated data
* Handles invalid query parameters
* Response structure remains unchanged

------------------------------

## 🎯 Conclusion

This project demonstrates efficient handling of large datasets using pagination in a real-world backend scenario.

---
