import React, { Component } from 'react';
import Team from '.././Team/Team';
import './Matchup.css';

class Matchup extends Component {
  render() {
    var matchup = this.props.matchup.teams;
    var MUFE = matchup.map(function(teams, i) {
        return (
            <Team team={teams} key={i} />
        );
    });
    return (
      <div className="Matchup">
        {MUFE}
      </div>
    );
  }
}

export default Matchup;
