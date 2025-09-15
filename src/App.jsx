import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import Footer from './components/Footer';

export default function App() {
  // Movie data with images, plot, genre, rating
  const allMovies = [
    {
      title: "Spider-Man: No Way Home",
      genre: "Action",
      rating: 8.3,
      description: "Peter Parker faces multiverse villains as he tries to fix his identity crisis caused by Doctor Strange.",
      image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    },
    {
      title: "Avengers: Endgame",
      genre: "Action",
      rating: 8.4,
      description: "The Avengers work together to reverse the damage caused by Thanos and save the universe.",
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
      title: "The Batman",
      genre: "Action",
      rating: 8.0,
      description: "Batman investigates corruption in Gotham while facing the serial killer Riddler.",
      image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    },
    {
      title: "Jurassic World: Dominion",
      genre: "Adventure",
      rating: 6.7,
      description: "Humans and dinosaurs must coexist after dinosaurs are freed into the modern world.",
      image: "https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg"
    },
    {
      title: "Doctor Strange in the Multiverse of Madness",
      genre: "Fantasy",
      rating: 7.2,
      description: "Doctor Strange explores the multiverse and faces dark magical forces threatening reality.",
      image: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
    },
    {
      title: "Guardians of the Galaxy Vol. 3",
      genre: "Action",
      rating: 8.1,
      description: "The Guardians embark on a mission to protect one of their own, uncovering secrets of Rocket’s past.",
      image: "https://image.tmdb.org/t/p/w500/yl66d2t0nQ5aPnygqv6tBtjJr8B.jpg"
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Search by title, genre, or description
  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show first filtered movie in Banner
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