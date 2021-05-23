import React, { Component } from 'react';

export default class MovieElement extends Component {
  render() {
    return(
      <div className="w-50 p-2">
        <div className="border d-flex">
          <img width='150' height="200" alt="film" src="https://photos.tf1.fr/700/933/vignette-portrait-one-piece-4539bb-29604b-0@1x.webp" />
          <div className="flex-fill d-flex flex-column p-3">
            <h5>Titre</h5>
            <hr className="w-100"/>
            <p>Luffy, un jeune garçon, rêve de devenir le Roi des Pirates en trouvant le One Piece, le trésor ultime rassemblé par Gol D. Roger, le seul pirate à avoir jamais porté le titre de Roi des Pirates. ... Pour échapper à la noyade, il s'enferme dans un tonneau et se fait repêcher par un jeune garçon du nom de Kobby.</p>
          </div>
        </div>
      </div>
    )
  }
}