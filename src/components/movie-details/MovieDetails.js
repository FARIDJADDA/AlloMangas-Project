import React, { Component } from 'react';

export default class MovieDetails extends Component {
  render() {
    return(
    <div className= "w-25 border p-4 d-flex flex-column">
      <h5>{ this.props.anime.title }</h5>
      <hr className="w-100" />
      <div>
        <img className="d-block mx-auto" src={ this.props.anime.img } width="100" height="150"/>
      </div>
      <hr className="w-100"/>
      <span className="text-secondary pb-2">{ this.props.anime.details }</span>
      <span>{ this.props.anime.description }</span>
    </div>
    );
    
  }
}