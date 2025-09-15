import React from 'react';

export default function Banner({ movie }) {
  return (
    <header style={{ height: '300px', background: '#333', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating} ⭐</p>
    </header>
  );
}
