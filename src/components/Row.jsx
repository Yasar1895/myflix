import React from 'react';

export default function Row({ title, movies }) {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h3>{title}</h3>
      <div style={{ display: 'flex', gap: '10px', overflowX: 'scroll' }}>
        {movies.map((movie, index) => (
          <div key={index} style={{ minWidth: '150px', borderRadius: '5px', overflow: 'hidden', background: '#111' }}>
            <img
              src={movie.image}
              alt={movie.title}
              style={{ width: '150px', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '5px', fontSize: '12px' }}>
              <h4>{movie.title}</h4>
              <p>{movie.genre}</p>
              <p>Rating: {movie.rating} ⭐</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
