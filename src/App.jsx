import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import Footer from './components/Footer';

export default function App() {
  // Movie data with images, description, genre, and rating
  const allMovies = [
    {
      title: 'Inception',
      genre: 'Sci-Fi',
      rating: 8.8,
      description: 'A mind-bending thriller.',
      image: 'https://m.media-amazon.com/images/I/51kH+ogGqDL._AC_.jpg',
    },
    {
      title: 'Avengers',
      genre: 'Action',
      rating: 8.5,
      description: 'Superheroes save the world.',
      image: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
    },
    {
      title: 'Titanic',
      genre: 'Romance',
      rating: 7.8,
      description: 'A tragic love story.',
      image: 'https://m.media-amazon.com/images/I/71tA3BkP1tL._AC_SY679_.jpg',
    },
    {
      title: 'Interstellar',
      genre: 'Sci-Fi',
      rating: 8.6,
      description: 'Journey through space and time.',
      image: 'https://m.media-amazon.com/images/I/71n58OQmEhL._AC_SY679_.jpg',
    },
    {
      title: 'Joker',
      genre: 'Drama',
      rating: 8.4,
      description: 'The origin of the Joker.',
      image: 'https://m.media-amazon.com/images/I/71xU2mox1nL._AC_SY679_.jpg',
    },
    {
      title: 'The Dark Knight',
      genre: 'Action',
      rating: 9.0,
      description: 'Batman fights crime in Gotham.',
      image: 'https://m.media-amazon.com/images/I/51EbJjlO9XL._AC_.jpg',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Filter movies based on search input
  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show first filtered movie as Banner; fallback to first movie if none found
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