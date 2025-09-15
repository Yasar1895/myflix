import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import Footer from './components/Footer';

export default function App() {
  const allMovies = [
    { title: "Spider-Man: No Way Home", genre: "Action", rating: 8.3, description: "Peter Parker faces multiverse villains as he tries to fix his identity crisis caused by Doctor Strange.", image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA", imdb: "https://www.imdb.com/title/tt10872600/" },
    { title: "Avengers: Endgame", genre: "Action", rating: 8.4, description: "The Avengers work together to reverse the damage caused by Thanos and save the universe.", image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c", imdb: "https://www.imdb.com/title/tt4154796/" },
    { title: "The Batman", genre: "Action", rating: 8.0, description: "Batman investigates corruption in Gotham while facing the serial killer Riddler.", image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4", imdb: "https://www.imdb.com/title/tt1877830/" },
    { title: "Jurassic World: Dominion", genre: "Adventure", rating: 6.7, description: "Humans and dinosaurs must coexist after dinosaurs are freed into the modern world.", image: "https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg", trailer: "https://www.youtube.com/watch?v=1FJDx0zgI7A", imdb: "https://www.imdb.com/title/tt8041270/" },
    { title: "Doctor Strange in the Multiverse of Madness", genre: "Fantasy", rating: 7.2, description: "Doctor Strange explores the multiverse and faces dark magical forces threatening reality.", image: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg", trailer: "https://www.youtube.com/watch?v=aWzlQ2N6qqg", imdb: "https://www.imdb.com/title/tt9419884/" },
    { title: "Guardians of the Galaxy Vol. 3", genre: "Action", rating: 8.1, description: "The Guardians embark on a mission to protect one of their own, uncovering secrets of Rocket’s past.", image: "https://image.tmdb.org/t/p/w500/yl66d2t0nQ5aPnygqv6tBtjJr8B.jpg", trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA", imdb: "https://www.imdb.com/title/tt6791350/" },
    { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", rating: 7.6, description: "Harry discovers he is a wizard on his 11th birthday and attends Hogwarts School of Witchcraft and Wizardry.", image: "https://image.tmdb.org/t/p/w500/u5Fc6Gx8AdYgtNlwO9o2k2Br6D3.jpg", trailer: "https://www.youtube.com/watch?v=VyHV0BRtdxo", imdb: "https://www.imdb.com/title/tt0241527/" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Fantasy", rating: 8.8, description: "Frodo Baggins embarks on a journey to destroy the One Ring with the fellowship of friends.", image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4", imdb: "https://www.imdb.com/title/tt0120737/" },
    { title: "The Conjuring", genre: "Horror", rating: 7.5, description: "Paranormal investigators Ed and Lorraine Warren help a family terrorized by a dark presence.", image: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg", trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o", imdb: "https://www.imdb.com/title/tt1457767/" },
    { title: "The Nun", genre: "Horror", rating: 5.3, description: "A priest and a novitiate investigate a haunted abbey and confront the demonic entity Valak.", image: "https://image.tmdb.org/t/p/w500/fMq2ewW2c4tIY7DDp66iJkFzzV1.jpg", trailer: "https://www.youtube.com/watch?v=Gvx5f2xCo2k", imdb: "https://www.imdb.com/title/tt5814060/" },
    { title: "The Conjuring 2", genre: "Horror", rating: 7.3, description: "The Warrens travel to London to help a family plagued by paranormal activity.", image: "https://image.tmdb.org/t/p/w500/xmtmQ0hyYXuG0ZfhPdo6zH7F0L2.jpg", trailer: "https://www.youtube.com/watch?v=V0TA5jQq9cM", imdb: "https://www.imdb.com/title/tt3065204/" },
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, description: "A thief who steals corporate secrets through dream-sharing technology is tasked to plant an idea in a CEO’s mind.", image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg", trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0", imdb: "https://www.imdb.com/title/tt1375666/" },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, description: "Explorers travel through a wormhole in space to ensure humanity's survival.", image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E", imdb: "https://www.imdb.com/title/tt0816692/" },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, description: "Batman sets out to dismantle organized crime in Gotham while facing the chaotic Joker.", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY", imdb: "https://www.imdb.com/title/tt0468569/" },
    { title: "Titanic", genre: "Romance", rating: 7.8, description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the ill-fated R.M.S. Titanic.", image: "https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg", trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ", imdb: "https://www.imdb.com/title/tt0120338/" }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <Banner />
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ width: '80%', margin: '20px auto', display: 'block', padding: '10px', fontSize: '16px' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredMovies.map((movie, index) => (
          <div key={index} style={{ margin: '10px', width: '200px', textAlign: 'center' }}>
            <img src={movie.image} alt={movie.title} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.rating}</p>
            <p>{movie.description}</p>
            <a href={movie.trailer} target="_blank" rel="noopener noreferrer">Watch Trailer</a><br />
            <a href={movie.imdb} target="_blank" rel="noopener noreferrer">IMDb Link</a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}