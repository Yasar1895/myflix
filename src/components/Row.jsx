import React from 'react'
import MovieCard from './MovieCard.jsx'

export default function Row({ title, movies }) {
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row-posters">
        {movies.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  )
}
