import React from 'react'
import './TeamList.css';

const TeamList = () => {
    return (
        <div className="team-settings-members">
            <header>
                Team Members
            </header>
        <ul>
          <li>
            <h5>Joe Vasquez</h5>{' '}
            <div className="member-right-wrap">
              <span>Project Manager</span>
              <span>Admin</span>
            </div>
          </li>
          <li>
            <h5><i style={{color: 'lightgreen'}} className="fas fa-check"></i> Johnny Phan</h5>{' '}
            <div className="member-right-wrap">
              <span>Frontend Dev</span>
              <span>Admin</span>
            </div>
          </li>
          <li>
            <h5><i style={{color: 'red', marginRight: '10px'}} className="fas fa-times"></i>Tim Gecko</h5>{' '}
            <div className="member-right-wrap">
              <span>Frontend Dev</span>
            </div>
          </li>
          <li>
            <h5>Ben Wilder</h5>{' '}
            <div className="member-right-wrap">
              <span>Backend Dev</span>
            </div>
          </li>
          <li>
            <h5>Bree Lynn</h5>{' '}
            <div className="member-right-wrap">
              <span>Backend Dev</span>
            </div>
          </li>
          <li>
            <h5>Jim Thompson</h5>{' '}
            <div className="member-right-wrap">
              <span>Backend Dev</span>
            </div>
          </li>
        </ul>
      </div>
    )
}

export default TeamList
