import React, {useState} from 'react';
import './TeamSettings.css';
import TeamList from '../../components/TeamList/TeamList';

import teamImage from '../../assets/images/team.jpg';

const TeamSettings = () => {
  return (
    <div className="team-settings">
      <header>
        <h1>Team Settings</h1>
      </header>
      <div className="team-settings-body">
        <div className="team-settings-body-left">
          <img className="team-settings-image" src={teamImage} alt="" />
          <TeamList />
        </div>
        <div className="team-settings-body-right">
          <form>
            <div className="form-grouping">
              <label>Team Name</label>
              <input type="text" />
            </div>
            <div className="form-grouping">
              <label>Project Name</label>
              <input type="text" />
            </div>
            <div className="form-grouping">
              <label>Project Description</label>
              <textarea type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeamSettings;
