import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Row from './components/Row.jsx'
import movies from './data/movies.js'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero movie={movies[0]} />
      <Row title="Trending Now" movies={movies} />
      <Row title="Top Picks" movies={movies.slice(0, 4)} />
    </div>
  )
}

export default App
