import React from 'react';

export default function Banner({ movie }) {
  if (!movie) return null;

  return (
    <header
      style={{
        height: '400px',
        backgroundImage: `url(${movie.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '20px',
      }}
    >
      <h2 style={{ textShadow: '2px 2px 4px #000' }}>{movie.title}</h2>
      <p style={{ textShadow: '1px 1px 3px #000' }}>{movie.description}</p>
      <p style={{ textShadow: '1px 1px 3px #000' }}>Rating: {movie.rating} ⭐</p>
    </header>
  );
}