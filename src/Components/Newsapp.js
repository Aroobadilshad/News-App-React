import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
  const [search, setSearch] = useState("pakistan");
  const [newsData, setNewsData] = useState(null);

  const API_KEY = "9820dfae1f234504934d762ae53f6f27";

  // Fetch data from API
  const getData = async (query = search) => {
    try {
      const response = await fetch(
       ` https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // Run once on mount & when search changes
  useEffect(() => {
    getData(search);
  }, [search]);

  // Input field typing
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // Category button click
  const handleCategory = (event) => {
    const category = event.target.value;
    setSearch(category);
    getData(category);
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <h1>Trend News</h1>
        <div>
          <ul>
            <li><a href="#">All News</a></li>
            <li><a href="#">Trending</a></li>
          </ul>
        </div>

        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={() => getData(search)}>Search</button>
        </div>
      </nav>

      <div>
        <p className="head">Stay updated with Trendy News</p>
      </div>

      {/* Category Buttons */}
      <div className="categorybtn">
        <button onClick={handleCategory} value="sports">Sports</button>
        <button onClick={handleCategory} value="politics">Politics</button>
        <button onClick={handleCategory} value="entertainment">Entertainment</button>
        <button onClick={handleCategory} value="health">Health</button>
        <button onClick={handleCategory} value="fitness">Fitness</button>
      </div>

      {/* News Data */}
      <div>
        {newsData ? <Card data={newsData} /> : <p>No news found.</p>}
      </div>
    </div>
  );
};

export default Newsapp;