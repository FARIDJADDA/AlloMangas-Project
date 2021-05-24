import { Component } from 'react';
import { Header, MovieDetails, MovieList, Loading }  from './components/';

import dataAnimes from './data';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      animes: null,
      selectedAnime:0,
      loaded:false
    }

    setTimeout(() => {
      this.setState({
        animes: dataAnimes,
        loaded: true
      })
    }, 3000)
  }

  updateSelectedAnime = (index) => {
    this.setState({
      selectedAnime: index
    })
  }

  render () {
    return (
      <div className="App d-flex flex-column">
        <Header />
        { this.state.loaded ? (
          <div className= "d-flex flex-row flex-fill pt-4 p-2">
            <MovieList anime={ this.state.animes } updateSelectedAnime= { this.updateSelectedAnime }/>
            <MovieDetails anime={ this.state.animes[this.state.selectedAnime] }/>
          </div>
        ) : (
          <Loading />
        )}
        
      </div>
    );
  }
}

export default App;