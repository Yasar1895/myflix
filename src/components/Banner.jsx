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
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating} ⭐</p>
    </header>
  );
}
