# useState Practice Project

This project is a small React application created to practice and demonstrate the usage of the `useState` hook in different scenarios.  
It is built with **React + Vite** and styled using **Tailwind CSS**.

---

## 📌 Features

The project includes several exercises showcasing different use cases of `useState`:

- **To-Do List**

  - Add and delete items dynamically.
  - Validate input before adding items.
  - Demonstrates managing arrays with state.

- **Date Counter**

  - Increase or decrease the number of days relative to the current date.
  - Adjustable step size for incrementing/decrementing.
  - Reset functionality.

- **Even/Odd Counter**

  - Count button clicks and determine if the number is even or odd.
  - Additional text shown after a certain number of clicks.

- **Like Button**
  - Toggle between "Like" and "Unlike" states.

---

## 🛠️ Tech Stack

- **React (Vite)** – fast development environment
- **Tailwind CSS** – utility-first CSS framework for styling
- **React Router** – for navigating between exercise pages

### Project Structure

src/
│── components/ # Reusable components (Navbar, etc.)
│── pages/ # Exercise pages (Home, ToDoList, DateCounter, etc.)
│── App.jsx # Main app component with routing
│── main.jsx # React entry point

### Purpose

This project was created for learning and practicing the useState hook in React by implementing common interactive UI cases.
The focus is on understanding:

- State initialization
- Updating primitive and array states
- Conditional rendering based on state
- Managing multiple states in one component
