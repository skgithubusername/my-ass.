import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShowList.css'; 

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className='container'>
      <h1>Show List</h1>
      <ul className="show-list">
        {shows.map((show) => (
          <li key={show.show.id} className="show-item">
            <Link to={`/show/${show.show.id}`} className="show-link">
              {show.show.name} - {show.show.language}
            </Link>
            <Link to={`/show/${show.show.id}`} className="show-button">
              View Summary
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
