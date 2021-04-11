import './App.css';
import { useState } from 'react';

const MOVIES_DATA = {
  Action: [
    {
      title: "Zack Snyder's Justice League ",
      summary: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
      rating: `8.6/10`
    },
    {
      title: "Tenet",
      summary: "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
      rating: `7.3/10`
    },
    {
      title: "John Wick: Chapter 3 - Parabellum",
      summary: "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      rating: `7.4/10`
    },
  ],
  Comedy: [
    {
      title: "Soul",
      summary: "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
      rating: `8.3/10`
    },
    {
      title: "Jumanji: The Next Level",
      summary: "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg",
      rating: `7/10`
    },
    {
      title: "Sonic the Hedgehog",
      summary: "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      rating: `7.5/10`
    },
  ],

  Thriller: [
    {
      title: "Extraction",
      summary: "Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
      rating: `7.4/10`
    },
    {
      title: "Parasite",
      summary: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      rating: `8.5/10`
    },
  ]
};

const GENRES = Object.keys(MOVIES_DATA);

function App() {
  const [movies, setMovies] = useState(MOVIES_DATA.Action);

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>🍿Movies</h1>
          <p>Select a genre to find the best movies in each genre.</p>
        </header>
        <section className="tabs">
          {GENRES.map((genre) => <Tab key={genre} onClick={(e) => {
            setMovies(MOVIES_DATA[genre])
          }} >{genre}</Tab>)}
        </section>
        <section className="movies-list">
          {movies.map((movie) => {
            return <MovieTile movie={movie} key={movie.title} />
          })}
        </section>
      </div>
    </div>
  );
}

const Tab = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

const MovieTile = ({ movie }) => {
  const { title, poster, summary } = movie;
  return (
    <div style={{
      display: 'flex',
      flexDirecion: 'row',
      background: 'aliceblue',
      borderRadius: 8,
      boxShadow: '0px 2px 8px 2px grey',
      color: '#282c34',
      paddingRight: 4,
      gap: 8
    }}>
      <img alt={title} className="poster" src={poster} />
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default App;
