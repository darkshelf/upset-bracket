import React, { Component } from 'react';
import './Team.css';


class Team extends Component {
  render() {
    var matchup = this.props.team;

    return (
      <div className="TeamContainer">
        <div className="SeedContainer">
          <div className="Seed">
            {matchup.seeding}
          </div>
        </div>
        <div className="TeamName">{matchup.teamName}</div>
      </div>
    );
  }
}

export default Team;
