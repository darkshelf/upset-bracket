import React, { Component } from 'react';
import Matchup from '.././Matchup/Matchup';
import './Region.css';

class Region extends Component {
  render() {
    var matchupComponents = this.props.region.games;

    var matchups = matchupComponents.map(function(matchup, i) {
        return (
            <Matchup matchup={matchup} key={i} />
        );
    });
    return (
      <div className="Region">
      <h2>{this.props.region.regionName}</h2>
          {matchups}
      </div>
    );
  }
}

export default Region;
