import React from 'react';

export default function Row({ title, movies }) {
  const handleClick = (trailerUrl) => {
    window.open(trailerUrl, "_blank"); // Opens trailer in a new tab
  };

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h3>{title}</h3>
      <div style={{ display: 'flex', gap: '10px', overflowX: 'scroll' }}>
        {movies.map((movie, index) => (
          <div
            key={index}
            style={{
              minWidth: '150px',
              borderRadius: '5px',
              overflow: 'hidden',
              background: '#111',
              cursor: 'pointer'
            }}
            onClick={() => handleClick(movie.trailer)}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{ width: '150px', height: '220px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ padding: '5px', fontSize: '12px' }}>
              <h4>{movie.title}</h4>
              <p>{movie.genre}</p>
              <p>Rating: {movie.rating} ⭐</p>
              <p style={{ color: '#f00', fontWeight: 'bold' }}>▶ Play Trailer</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}