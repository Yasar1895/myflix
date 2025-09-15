import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const allMovies = [
    {
      title: "Spider-Man: No Way Home",
      genre: "Action",
      rating: 8.3,
      description:
        "Peter Parker faces multiverse villains as he tries to fix his identity crisis caused by Doctor Strange.",
      image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
      imdb: "https://www.imdb.com/title/tt10872600/"
    },
    {
      title: "Avengers: Endgame",
      genre: "Action",
      rating: 8.4,
      description:
        "The Avengers work together to reverse the damage caused by Thanos and save the universe.",
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      imdb: "https://www.imdb.com/title/tt4154796/"
    },
    {
      title: "The Batman",
      genre: "Action",
      rating: 8.0,
      description:
        "Batman investigates corruption in Gotham while facing the serial killer Riddler.",
      image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
      imdb: "https://www.imdb.com/title/tt1877830/"
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      rating: 7.6,
      description:
        "Harry discovers he is a wizard on his 11th birthday and attends Hogwarts School of Witchcraft and Wizardry.",
      image: "https://image.tmdb.org/t/p/w500/u5Fc6Gx8AdYgtNlwO9o2k2Br6D3.jpg",
      trailer: "https://www.youtube.com/watch?v=VyHV0BRtdxo",
      imdb: "https://www.imdb.com/title/tt0241527/"
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      genre: "Fantasy",
      rating: 8.8,
      description:
        "Frodo Baggins embarks on a journey to destroy the One Ring with the fellowship of friends.",
      image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
      imdb: "https://www.imdb.com/title/tt0120737/"
    },
    {
      title: "The Conjuring",
      genre: "Horror",
      rating: 7.5,
      description:
        "Paranormal investigators Ed and Lorraine Warren help a family terrorized by a dark presence.",
      image: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
      trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o",
      imdb: "https://www.imdb.com/title/tt1457767/"
    },
    {
      title: "The Nun",
      genre: "Horror",
      rating: 5.3,
      description:
        "A priest and a novitiate investigate a haunted abbey and confront the demonic entity Valak.",
      image: "https://image.tmdb.org/t/p/w500/fMq2ewW2c4tIY7DDp66iJkFzzV1.jpg",
      trailer: "https://www.youtube.com/watch?v=Gvx5f2xCo2k",
      imdb: "https://www.imdb.com/title/tt5814060/"
    },
    {
      title: "Inception",
      genre: "Sci-Fi",
      rating: 8.8,
      description:
        "A thief who steals corporate secrets through dream-sharing technology is tasked to plant an idea in a CEO’s mind.",
      image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      imdb: "https://www.imdb.com/title/tt1375666/"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar />
      <Banner />

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Movies grid */}
      <div className="movies-grid">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p className="rating">⭐ {movie.rating}</p>
            <p className="desc">{movie.description}</p>
            <div className="buttons">
              <a
                href={movie.trailer}
                target="_blank"
                rel="noopener noreferrer"
                className="btn red"
              >
                ▶ Trailer
              </a>
              <a
                href={movie.imdb}
                target="_blank"
                rel="noopener noreferrer"
                className="btn white"
              >
                IMDb
              </a>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}