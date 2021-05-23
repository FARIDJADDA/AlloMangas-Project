import React, { Component } from 'react';
import { MovieElement } from '..';

export default class MovieList extends Component {
  render() {
    return (
      <div className= "w-75 d-flex flex-row flex-wrap align-content-start">
        <MovieElement anime={ this.props.anime[0] } updateSelectedAnime={ this.props.updateSelectedAnime } />
        <MovieElement anime={ this.props.anime[1] } updateSelectedAnime={ this.props.updateSelectedAnime } />
        <MovieElement anime={ this.props.anime[2] } updateSelectedAnime={ this.props.updateSelectedAnime } />
        <MovieElement anime={ this.props.anime[3] } updateSelectedAnime={ this.props.updateSelectedAnime } />
      </div>
    )
  }
}