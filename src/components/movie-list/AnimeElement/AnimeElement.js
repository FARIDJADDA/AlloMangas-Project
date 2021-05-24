import React, { Component } from 'react';

import Style from './AnimeElement.module.scss';

export default class MovieElement extends Component {
handleMouseEnter = () => {
  this.props.updateSelectedAnime(this.props.anime.title);
}

  render() {
    return(
        <div onMouseEnter={ this.handleMouseEnter } className={ "d-flex bg-light " + Style.container }>
          <img alt="film" src={ this.props.anime.img } />
          <div className="flex-fill d-flex flex-column p-3">
            <h5>{ this.props.anime.title }</h5>
            <hr className="w-100"/>
            <p>{ this.props.anime.details }</p>
          </div>
        </div>
    )
  }
}