import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import Footer from './components/Footer';

export default function App() {
  // Movie data
  const allMovies = [
    {
      title: 'Harry Potter and the Sorcerer\'s Stone',
      genre: 'Fantasy',
      rating: 7.6,
      description: 'A young wizard discovers his magical heritage and attends Hogwarts School.',
      image: 'https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_SY679_.jpg'
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      genre: 'Fantasy',
      rating: 8.8,
      description: 'A hobbit sets out on a quest to destroy a powerful ring.',
      image: 'https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg'
    },
    {
      title: 'Wheel of Time',
      genre: 'Fantasy',
      rating: 7.5,
      description: 'Epic tale of magic, prophecy, and adventure spanning continents.',
      image: 'https://m.media-amazon.com/images/I/71mSgbn0sJL._AC_SY679_.jpg'
    },
    {
      title: 'The Conjuring',
      genre: 'Horror',
      rating: 7.5,
      description: 'Paranormal investigators help a family terrorized by a dark presence.',
      image: 'https://m.media-amazon.com/images/I/71g5v2RlG8L._AC_SY679_.jpg'
    },
    {
      title: 'The Nun',
      genre: 'Horror',
      rating: 5.3,
      description: 'A priest and a nun investigate a haunted abbey.',
      image: 'https://m.media-amazon.com/images/I/71h3er1xIjL._AC_SY679_.jpg'
    },
    {
      title: 'The Conjuring 2',
      genre: 'Horror',
      rating: 7.3,
      description: 'The paranormal investigators face a dark spirit in London.',
      image: 'https://m.media-amazon.com/images/I/71y-0A3dz7L._AC_SY679_.jpg'
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Filter movies based on search
  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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