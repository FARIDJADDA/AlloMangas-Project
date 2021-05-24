import React, { Component } from 'react';
import { MovieElement } from '..';

export default class MovieList extends Component {
  render() {
    return (
      <div className= "w-75 d-flex flex-row flex-wrap align-content-start">
        { this.props.anime.map( (m, index) => (
        <MovieElement key={ m.title } anime={ m } updateSelectedAnime={ () => { this.props.updateSelectedAnime(index) } } />
        ))}
      </div>
    )
  }
}