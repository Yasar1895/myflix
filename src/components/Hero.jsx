import React from 'react'

export default function Hero({ movie }) {
  return (
    <div className="hero" style={{backgroundImage:`url(${movie.backdrop})`}}>
      <h1>{movie.title}</h1>
    </div>
  )
}
