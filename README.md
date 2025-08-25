A responsive React application that displays the latest news articles from around the world using the NewsAPI.

This project demonstrates skills in React, API integration, responsive design, and modern frontend development practices.


---

## Features

Search News – Search for articles by keywords in real time

Category Filter – Browse news by categories (Sports, Politics, Entertainment, Health, Fitness, etc.)

Responsive Design – Optimized for desktop, tablet, and mobile devices

Rich Media – News displayed with images, titles, and descriptions

Read More – Direct links to full articles on original sources

Error & Loading States – Smooth UX even on slow networks



---

## Tech Stack

Frontend: React (v19), JavaScript (ES6+)

Styling: CSS3 (Flexbox & Grid, media queries)

API: NewsAPI.org

State Management: React Hooks (useState, useEffect)

Build Tool: Create React App



---

## Getting Started

Prerequisites

Node.js (v14 or later)

npm or yarn


Installation

## Clone the repository
git clone (https://github.com/Aroobadilshad/News-App-React.git)
cd News-App-React

## Install dependencies
npm install

API Key Setup

1. Create an account at NewsAPI.org


2. Get your API key


3. Create a .env file in the project root and add:

REACT_APP_NEWS_API_KEY=your_api_key_here



## Run Locally

npm start

Visit http://localhost:3000 to view the app.


---

## Project Structure

src/
 ├── components/
 │   ├── Card.js        # News article card component
 │   └── NewsApp.js     # Main news container
 ├── App.js             # Root component
 ├── App.css            # Styles for App
 ├── index.js           # Entry point
 └── index.css          # Global styles




---

## API Integration

Endpoints Used: Everything endpoint (search + categories)

Error Handling: Displays fallback UI if API request fails

Image Handling: Default image if article thumbnail is missing



---


## Author

Developer: [Arooba Dilshad]

---

# ⭐ If you find this project useful, consider giving it a star on GitHub!
