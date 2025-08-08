# MERN Display Name App

This is a simple **MERN (MongoDB, Express, React, Node.js)** app that displays a name ("Cephas Okuku") on a webpage. It's a beginner-friendly project that shows how to set up a full-stack app where:

- The **backend** is built with Express and serves a name via an API.
- The **frontend** is built with React and fetches that name to display it.
- Both backend and frontend are run together using `concurrently`.

---

## 🗂️ Project Structure

```

mern-display-name/
├── backend/      # Express backend
│   └── index.js
├── frontend/     # React frontend
│   ├── src/
│   └── public/
├── package.json  # Root - used to run both backend and frontend

````

---

## 🚀 How It Works

When the app runs:
1. The Express server (`localhost:5000`) provides a simple API that returns your name.
2. The React frontend (`localhost:3000`) fetches that name from the backend.
3. The browser shows:  
   **"Hello, Cephas Okuku"**

---

## 🛠️ Setup Instructions

Follow these steps to run the app on your computer:

### 1. Clone the Project
```bash
git clone https://github.com/your-username/mern-display-name.git
cd mern-display-name
````

> Replace `your-username` with your actual GitHub username.

---

### 2. Install Dependencies

Install dependencies in **both** the root, backend, and frontend:

#### Install root-level dev tools (e.g. `concurrently`):

```bash
npm install
```

#### Install backend dependencies:

```bash
cd backend
npm install
```

#### Install frontend dependencies:

```bash
cd ../frontend
npm install
```

---

### 3. Add Proxy in Frontend (optional but recommended)

To avoid CORS issues, add this to `frontend/package.json`:

```json
"proxy": "http://localhost:5000",
```

This tells React to forward API requests to the backend.

---

### 4. Run the App

From the **root** of the project, run:

```bash
npm run dev
```

This command does the following:

* Starts the backend server at `http://localhost:5000`
* Starts the frontend at `http://localhost:3000`
* Opens your browser and displays:

  > **Hello, Cephas Okuku**

---

## ✨ What You’ll Learn From This Project

* How to build and connect a simple Express server with a React frontend.
* How to use `fetch()` in React to get data from a backend API.
* How to run both backend and frontend together with `concurrently`.
* How to organize your project structure for a full-stack MERN app.

---

## 📌 Notes

* MongoDB is **not used** in this version, since it's just a simple name display app.
* You can expand this project later to include MongoDB for storing names or user profiles.

---

## 🙌 Acknowledgments

This project was built as a hands-on way to understand the basics of the MERN stack.

---

## 📄 License

This project is licensed under the MIT License — feel free to use it, improve it, or share it!

```

---

Let me know if you want me to include GitHub deploy instructions or if you're planning to upload this as a portfolio piece — I can help tailor it for that too.
```
