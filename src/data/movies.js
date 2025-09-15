const movies = [
  // 🧙 Fantasy
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    overview: "An orphaned boy discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry.",
    poster: "https://image.tmdb.org/t/p/w300/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hziiv14OpD73u9gAak4XDDfBKa2.jpg"
  },
  {
    id: 2,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Fantasy",
    overview: "A meek Hobbit and eight companions set out on a journey to destroy the One Ring.",
    poster: "https://image.tmdb.org/t/p/w300/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9DeGfFIqjph5CBFVQrD6wv9S7rR.jpg"
  },
  {
    id: 3,
    title: "The Lord of the Rings: The Return of the King",
    genre: "Fantasy",
    overview: "The final confrontation between the forces of good and evil fighting for Middle-earth.",
    poster: "https://image.tmdb.org/t/p/w300/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg"
  },
  {
    id: 4,
    title: "Fantastic Beasts and Where to Find Them",
    genre: "Fantasy",
    overview: "Magizoologist Newt Scamander must recapture magical creatures in 1920s New York.",
    poster: "https://image.tmdb.org/t/p/w300/h6NYfVUyM6CDURtZSnBpz647Ldd.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/j6ITDnpW3avT3T0R8N8iL78e4OA.jpg"
  },

  // 👻 Horror
  {
    id: 5,
    title: "The Conjuring",
    genre: "Horror",
    overview: "Paranormal investigators Ed and Lorraine Warren help a family terrorized by a dark presence.",
    poster: "https://image.tmdb.org/t/p/w300/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/6wA3Jd5Zy2YxFpl4EZc6J2tQ8J7.jpg"
  },
  {
    id: 6,
    title: "The Nun",
    genre: "Horror",
    overview: "A priest and a novice investigate the death of a young nun in Romania.",
    poster: "https://image.tmdb.org/t/p/w300/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/p9vCAVhDK375XyobVcKqzqzsUHE.jpg"
  },
  {
    id: 7,
    title: "Annabelle",
    genre: "Horror",
    overview: "A couple experiences terrifying supernatural occurrences involving a vintage doll.",
    poster: "https://image.tmdb.org/t/p/w300/lvhVkYdN5TL2OQ7dPJwaYk5H3jR.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9tgZz7b9Hf9a7lARiTcAZNpH8yS.jpg"
  },
  {
    id: 8,
    title: "It",
    genre: "Horror",
    overview: "In a small town, a group of kids face their worst nightmare: Pennywise the clown.",
    poster: "https://image.tmdb.org/t/p/w300/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg"
  },
  {
    id: 9,
    title: "Insidious",
    genre: "Horror",
    overview: "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
    poster: "https://image.tmdb.org/t/p/w300/2XhKABUETGvZcKwuH3C7d3bJHwi.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bmgPP7hVAkBhp5lJGcvrMbp1DqU.jpg"
  },

  // ⚔️ Action
  {
    id: 10,
    title: "Inception",
    genre: "Action",
    overview: "A thief who enters the dreams of others must perform the impossible — inception.",
    poster: "https://image.tmdb.org/t/p/w300/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
  },
  {
    id: 11,
    title: "The Dark Knight",
    genre: "Action",
    overview: "Batman faces the Joker, a criminal mastermind bent on plunging Gotham into anarchy.",
    poster: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg"
  },
  {
    id: 12,
    title: "Avengers: Endgame",
    genre: "Action",
    overview: "The Avengers assemble once more in order to reverse Thanos' actions and restore balance.",
    poster: "https://image.tmdb.org/t/p/w300/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg"
  },
  {
    id: 13,
    title: "John Wick",
    genre: "Action",
    overview: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog.",
    poster: "https://image.tmdb.org/t/p/w300/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rJjzoWz6OiCtw26lxA3Yox8F3EV.jpg"
  },

  // 🏴 Adventure
  {
    id: 14,
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    genre: "Adventure",
    overview: "Captain Jack Sparrow joins forces with Will Turner to save Elizabeth Swann.",
    poster: "https://image.tmdb.org/t/p/w300/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8AUQ7YlJJA9C8kWk8P4YNHIcFDE.jpg"
  },
  {
    id: 15,
    title: "Jurassic Park",
    genre: "Adventure",
    overview: "A theme park showcasing cloned dinosaurs turns into a nightmare when the creatures break loose.",
    poster: "https://image.tmdb.org/t/p/w300/c414cDeQ9b6qLPLeKmiJuLDUREJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9i3plLl89DHMz7mahksDaAo7HIS.jpg"
  },
  {
    id: 16,
    title: "Jumanji: Welcome to the Jungle",
    genre: "Adventure",
    overview: "Four teenagers are sucked into a magical video game and the only way out is to finish it.",
    poster: "https://image.tmdb.org/t/p/w300/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg"
  },
  {
    id: 17,
    title: "Indiana Jones and the Raiders of the Lost Ark",
    genre: "Adventure",
    overview: "Archaeologist Indiana Jones races against Nazis to recover the long-lost Ark of the Covenant.",
    poster: "https://image.tmdb.org/t/p/w300/ceG9VzoRAVGwivFU403Wc3AHRys.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7Jr7w2w7FItmgERZLRGOqj7EdTz.jpg"
  },

  // 🚀 Sci-Fi
  {
    id: 18,
    title: "Interstellar",
    genre: "Sci-Fi",
    overview: "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
    poster: "https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  {
    id: 19,
    title: "The Matrix",
    genre: "Sci-Fi",
    overview: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    poster: "https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg"
  },
  {
    id: 20,
    title: "Dune",
    genre: "Sci-Fi",
    overview: "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis.",
    poster: "https://image.tmdb.org/t/p/w300/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/uGnJ2t6koV7lO2zhFz1fGZVtR6W.jpg"
  },

  // 🔪 Thriller
  {
    id: 21,
    title: "Shutter Island",
    genre: "Thriller",
    overview: "A U.S. Marshal investigates the disappearance of a prisoner at a psychiatric facility.",
    poster: "https://image.tmdb.org/t/p/w300/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/yHzyPJrVqlTySQ9mc379yxrLBY8.jpg"
  },
  {
    id: 22,
    title: "Se7en",
    genre: "Thriller",
    overview: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.",
    poster: "https://image.tmdb.org/t/p/w300/69Sns8WoET6CfaYlIkHbla4l7nC.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/6yoghtyTpznpBik8EngEmJskVUO.jpg"
  },
  {
    id: 23,
    title: "Gone Girl",
    genre: "Thriller",
    overview: "With his wife's disappearance having become the focus of media attention, a man sees the spotlight turned on him.",
    poster: "https://image.tmdb.org/t/p/w300/qymaJhucquUwjpb8oiqynMeXnID.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/A9le2BdKmXbqbQBPfJlz2zy8G3C.jpg"
  },
  {
    id: 24,
    title: "Fight Club",
    genre: "Thriller",
    overview: "An insomniac office worker and a soap maker form an underground fight club with unexpected consequences.",
    poster: "https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg"
  },
  {
    id: 25,
    title: "The Silence of the Lambs",
    genre: "Thriller",
    overview: "A young FBI cadet must confide in an incarcerated cannibal to catch another serial killer.",
    poster: "https://image.tmdb.org/t/p/w300/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/kLKDsb3gq9f71ATmV4vGSSPQjK0.jpg"
  }
];

export default movies;