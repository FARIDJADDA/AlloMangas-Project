import React, { Component } from 'react';

export default class MovieElement extends Component {
  render() {
    return(
      <div className="w-25 p-2 border">
        <div className="card">
          <img alt="film" src="https://i.pinimg.com/originals/49/22/6c/49226cc2be5cb537218993fa89d075a8.jpg" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">GLADIATOR</h5>
            <p className="card-text">'Gladiator' nous plonge donc sous le règne de Marc Aurèle, empereur romain de le fin IIe siècle après Jésus-Christ.</p>
          </div>
        </div>
      </div>
    )
  }
}