import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ShowDetails.css'; 

const ShowDetails = () => {
  const { showId } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [showId]);

  return (
    <div className='container1'>
      <div className="show-details">
      <h1 className="show-title">{show.name}</h1>
      <p className="show-summary" dangerouslySetInnerHTML={{ __html: show.summary }} />
      <Link to="/" className="back-link">
        Back to Show List
      </Link>
    </div>
    </div>
  );
};

export default ShowDetails;
