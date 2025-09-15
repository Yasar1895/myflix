import React from 'react';

export default function Row({ title, movies }) {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h3>{title}</h3>
      <div style={{ display: 'flex', gap: '10px', overflowX: 'scroll' }}>
        {movies.map((movie, index) => (
          <div key={index} style={{ minWidth: '150px', height: '200px', background: '#555', padding: '10px', borderRadius: '5px' }}>
            <h4>{movie.title}</h4>
            <p style={{ fontSize: '12px' }}>{movie.genre}</p>
            <p style={{ fontSize: '12px' }}>Rating: {movie.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
}