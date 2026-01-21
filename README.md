# Postify 🚀

Postify is a simple and beginner‑friendly **RESTful CRUD web application** built using **Node.js**, **Express**, and **EJS**. It allows users to create, view, edit, and delete posts while demonstrating core REST principles and server‑side rendering.

---
## <img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/3ecf02a9-484b-4f72-b5e6-cab7a510a02e" />


## ✨ Features

* 📝 Create new posts
* 📄 View all posts
* 🔍 View a single post
* ✏️ Edit existing posts
* 🗑️ Delete posts
* 🌐 RESTful routing
* 🧩 Server‑side rendering using EJS
* 🔁 Method override for PATCH & DELETE requests
* 🆔 Unique post IDs using UUID

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **EJS (Embedded JavaScript Templates)**
* **UUID**
* **Method‑Override**
* **HTML / CSS**

---

## 📂 Project Structure

```
postify/
│
├── views/
│   ├── index.ejs      # Display all posts
│   ├── new.ejs        # Form to create a new post
│   ├── show.ejs       # Display a single post
│   └── edit.ejs       # Edit post form
│
├── public/
│   └── (static files like CSS if added)
│
├── index.js           # Main server file
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run Postify locally:

1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/postify.git
```

2️⃣ Navigate to the project folder

```bash
cd postify
```

3️⃣ Install dependencies

```bash
npm install
```

4️⃣ Start the server

```bash
node index.js
```

5️⃣ Open your browser and visit:

```
http://localhost:8080/posts
```

---

## 🔗 RESTful Routes

| HTTP Method | Route           | Description           |
| ----------- | --------------- | --------------------- |
| GET         | /posts          | View all posts        |
| GET         | /posts/new      | Form to create a post |
| POST        | /posts          | Create a new post     |
| GET         | /posts/:id      | View a single post    |
| GET         | /posts/:id/edit | Edit post form        |
| PATCH       | /posts/:id      | Update a post         |
| DELETE      | /posts/:id      | Delete a post         |

---

## 📌 Important Notes

* This project uses **in‑memory storage**, so all posts reset when the server restarts.
* Designed mainly for **learning Express, REST APIs, and EJS**.

---

## 👨‍💻 Author

**Anurag**
Engineering Student | Aspiring Full‑Stack Developer

---

## 🌱 Future Enhancements

* Connect MongoDB for persistent data storage
* Add user authentication
* Improve UI with Bootstrap / Tailwind CSS
* Deploy on Render, Railway, or Vercel

---

⭐ If you like this project, don’t forget to star the repository!
