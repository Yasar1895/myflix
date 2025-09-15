import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import Footer from './components/Footer';

export default function App() {
  const allMovies = [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      rating: 7.6,
      description: "Harry discovers he is a wizard on his 11th birthday. He attends Hogwarts School of Witchcraft and Wizardry, makes friends, and uncovers secrets about his past.",
      image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      genre: "Fantasy",
      rating: 8.8,
      description: "Frodo Baggins embarks on a journey to destroy the One Ring. Along the way, he is joined by a fellowship to fight the forces of Sauron.",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Fellowship_of_the_Ring.jpg"
    },
    {
      title: "Wheel of Time",
      genre: "Fantasy",
      rating: 7.5,
      description: "A young man discovers he may be the prophesied Dragon Reborn. He and his friends must navigate a world of magic, prophecy, and war.",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3f/Wheel_of_Time_Season_1_poster.jpg"
    },
    {
      title: "The Conjuring",
      genre: "Horror",
      rating: 7.5,
      description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Conjuring_poster.jpg"
    },
    {
      title: "The Nun",
      genre: "Horror",
      rating: 5.3,
      description: "A priest and a novitiate investigate a haunted abbey in Romania and confront a demonic entity known as Valak.",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e3/The_Nun_poster.jpg"
    },
    {
      title: "The Conjuring 2",
      genre: "Horror",
      rating: 7.3,
      description: "The Warrens travel to London to help a family plagued by paranormal activity in their council house.",
      image: "https://upload.wikimedia.org/wikipedia/en/2/25/The_Conjuring_2_poster.jpg"
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
