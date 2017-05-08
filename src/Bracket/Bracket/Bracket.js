import React, { Component } from 'react';
import Region from '.././Region/Region';
import Tournament from '.././tournament.json';
import './Bracket.css';

class Bracket extends Component {
  render() {
    var regions = Tournament.tournament.regions;

    var regionComponents = regions.map(function(region, i) {
        return (
            <Region region={region} key={i} />
        );
    });
    return (
      <div className="Bracket">
        {regionComponents}
      </div>
    );
  }
}

export default Bracket;
