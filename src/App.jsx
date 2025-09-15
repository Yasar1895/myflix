import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import Footer from './components/Footer';

export default function App() {
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
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      rating: 7.6,
      description: "Harry discovers he is a wizard on his 11th birthday. He attends Hogwarts, makes friends, and uncovers secrets about his past.",
      image: "https://image.tmdb.org/t/p/w500/u5Fc6Gx8AdYgtNlwO9o2k2Br6D3.jpg"
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      genre: "Fantasy",
      rating: 8.8,
      description: "Frodo Baggins embarks on a journey to destroy the One Ring. Along the way, he is joined by a fellowship to fight the forces of Sauron.",
      image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
    },
    {
      title: "The Conjuring",
      genre: "Horror",
      rating: 7.5,
      description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      image: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg"
    },
    {
      title: "The Nun",
      genre: "Horror",
      rating: 5.3,
      description: "A priest and a novitiate investigate a haunted abbey in Romania and confront a demonic entity known as Valak.",
      image: "https://image.tmdb.org/t/p/w500/fMq2ewW2c4tIY7DDp66iJkFzzV1.jpg"
    },
    {
      title: "The Conjuring 2",
      genre: "Horror",
      rating: 7.3,
      description: "The Warrens travel to London to help a family plagued by paranormal activity in their council house.",
      image: "https://image.tmdb.org/t/p/w500/xmtmQ0hyYXuG0ZfhPdo6zH7F0L2.jpg"
    },
    {
      title: "Inception",
      genre: "Sci-Fi",
      rating: 8.8,
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO’s mind.",
      image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      rating: 8.6,
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
    },
    {
      title: "The Dark Knight",
      genre: "Action",
      rating: 9.0,
      description: "Batman sets out to dismantle organized crime in Gotham, facing the chaotic Joker along the way.",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
      title: "Titanic",
      genre: "Romance",
      rating: 7.8,
      description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      image: "https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg"
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Search by title, genre, or description
  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchQuery.toLowerCase())
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