import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import Footer from './components/Footer';

export default function App() {
  // Example movie data
  const allMovies = [
    { title: 'Inception', genre: 'Sci-Fi', rating: 8.8, description: 'A mind-bending thriller.' },
    { title: 'Avengers', genre: 'Action', rating: 8.5, description: 'Superheroes save the world.' },
    { title: 'Titanic', genre: 'Romance', rating: 7.8, description: 'A tragic love story.' },
    { title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6, description: 'Journey through space and time.' },
    { title: 'Joker', genre: 'Drama', rating: 8.4, description: 'The origin of the Joker.' },
    { title: 'The Dark Knight', genre: 'Action', rating: 9.0, description: 'Batman fights crime in Gotham.' },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show the first movie as banner
  const featuredMovie = filteredMovies[0] || allMovies[0];

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar onSearch={setSearchQuery} />
      <Banner movie={featuredMovie} />
      <Row title="All Movies" movies={filteredMovies} />
      <Footer />
    </div>
  );
}