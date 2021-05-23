import { Component } from 'react';
import { Header, MovieDetails, MovieList }  from './components/';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      animes: [{
        title: 'One Piece',
        img: 'https://photos.tf1.fr/700/933/vignette-portrait-one-piece-4539bb-29604b-0@1x.webp',
        details: '20 saisons | en cours | shōnen',
        description: "Luffy, un jeune garçon, rêve de devenir le Roi des Pirates en trouvant le One Piece, le trésor ultime rassemblé par Gol D. Roger, le seul pirate à avoir jamais porté le titre de Roi des Pirates. ... Pour échapper à la noyade, il s'enferme dans un tonneau et se fait repêcher par un jeune garçon du nom de Kobby."
      },
      {
        title: "L'Attaque des Titans",
        img: 'https://www.nautiljon.com/images/manga_volumes/00/82/31228.jpg?1572185284',
        details: '4 saisons | en cours | Shōnen',
        description: "La Grande Guerre des Titans commença alors pendant laquelle le peuple de Mahr utilisa les Titans afin de détruire le peuple Eldien. Le roi et sa famille fuirent vers l'île du Paradis où il utilisa le Titan Colossal pour construire trois murs autour de son territoire."
      },
      {
        title: 'Kingdom',
        img: 'https://www.manga-news.com/public/images/dvd/Kingdom-anime-saison-3-visual-1.jpg',
        details: '4 saisons | en cours | Seinen',
        description: "Dans la période de l'ancienne Chine, Shin et Hyou sont des orphelins de guerre dans le royaume de Qin. Ils rêvent un jour de pouvoir se rendre sur un champ de guerre. Un jour, Hyou est amené au palais par un ministre, pris par erreur pour le roi du royaume ennemi."
      },
      {
        title: 'Black Clover',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJew8w8P82vQy4Kn6D2arqxHPhI0jsasOx2w&usqp=CAU',
        details: '4 saisons | en cours | Shōnen',
        description: ''
      }],
      selectedAnime:0
    }
  }

  render () {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className= "d-flex flex-row flex-fill pt-4 p-2">
          <MovieList />
          <MovieDetails anime={ this.state.animes[this.state.selectedAnime] }/>
        </div>
      </div>
    );
  }
}

export default App;