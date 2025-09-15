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
      <Row title="Fantasy" movies={movies.filter(m => m.genre === 'Fantasy')} />
      <Row title="Horror" movies={movies.filter(m => m.genre === 'Horror')} />
      <Row title="Action" movies={movies.filter(m => m.genre === 'Action')} />
      <Row title="Adventure" movies={movies.filter(m => m.genre === 'Adventure')} />
      <Row title="Sci-Fi" movies={movies.filter(m => m.genre === 'Sci-Fi')} />
      <Row title="Thriller" movies={movies.filter(m => m.genre === 'Thriller')} />
    </div>
  )
}

export default App