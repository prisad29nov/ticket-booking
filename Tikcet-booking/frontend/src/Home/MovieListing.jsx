import { useState, useEffect } from 'react';
import './movieListing.css';
import MovieCard from './MovieCard';

const MovieListing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=61936ad&s=thor&type=movie')
      .then((res) => res.json())
      .then((data) => setData(data.Search));
  }, []);

  console.log(data);

  const renderMovies = data.map((movie, index) => {
    return (
      <div className='movie-col' key={index}>
        <MovieCard data={movie} />
      </div>
    );
  });
  return (
    <>
      <div style={{ marginTop: '20px' }} className='movie-container'>
        {renderMovies}
      </div>
    </>
  );
};

export default MovieListing;
