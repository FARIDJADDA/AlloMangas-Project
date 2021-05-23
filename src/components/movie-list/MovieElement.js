import React, { Component } from 'react';

export default class MovieElement extends Component {
handleMouseEnter = () => {
  this.props.updateSelectedAnime(this.props.anime.title);
}

  render() {
    return(
      <div onMouseEnter={ this.handleMouseEnter } className="w-50 p-2">
        <div className="border d-flex">
          <img width='150' height="200" alt="film" src={ this.props.anime.img } />
          <div className="flex-fill d-flex flex-column p-3">
            <h5>{ this.props.anime.title }</h5>
            <hr className="w-100"/>
            <p>{ this.props.anime.details }</p>
          </div>
        </div>
      </div>
    )
  }
}