import React, { Component } from 'react';
import Matchup from './Matchup';
import MatchupData from './matchups.json';
import './Bracket.css';

var MatchupsData = MatchupData.matchupsData.matchups;

var MUFE = MatchupsData.map(function(matchups, i) {
    return (
        <Matchup matchup={matchups} key={i} />
    );
});

class Bracket extends Component {
  render() {
    return (
      <div className="Bracket">
        <div className="CenterText">
          {MUFE}
        </div>
      </div>
    );
  }
}

export default Bracket;
