import React from 'react'

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
    </div>
  )
}
