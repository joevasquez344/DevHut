import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Navbar.scss';

import PopoverItem from '../../components/PopoverItem';

const Navbar = ({match}) => {
  const [open, setOpen] = React.useState(false);
  const [hash, setHash] = useState('');

  const history = useHistory();

  const FistIcon = () => (
    <div className="team__icon">
      <i style={{fontSize: '22px'}} className="fas fa-fist-raised"></i>
    </div>
  );

  const RoadmapIcon = () => (
    <div className="team__icon">
      <i style={{fontSize: '22px'}} className="far fa-map"></i>
    </div>
  );

  const TeamSettingsIcon = () => (
    <div onClick={handleSettings} className="team__icon">
      <i style={{fontSize: '22px'}} className="fas fa-cog"></i>
    </div>
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSettings = () => {
    history.push(`/teams/${match.params.id}/settings`);
  };

  useEffect(() => {
    setHash(window.location.hash);
  }, [window.location.hash]);

  const TeamHeader = () => {
    return (
      <header className="team__header">
        <h1 className="team__brand">Logo</h1>

        <div className="team__day" style={styles.day}>
          Day 1
        </div>

        <div style={styles.rightNav}>
          <div onClick={handleOpen}>
            <PopoverItem component={FistIcon} text="Clock In" />
          </div>
          <PopoverItem component={RoadmapIcon} text="Roadmap" />
          <PopoverItem component={TeamSettingsIcon} text="Team Settings" />
        </div>
      </header>
    );
  };

  const setHeader = () => {
    const teamHeaderPath = '#/teams/';

    const teamParamCheck = hash.split('/')[2];

    if (hash === teamHeaderPath + 1 && teamParamCheck) {
      return TeamHeader();
    } else if ('') {
      // Initiate another conditional which renders a
      // different header content based on view/path
    }
  };

  // Current Problem
  // The navbar content isn't changing because the state is only updating on component mount
  // Hence the useEffect, the url checker function is only running when you refresh the page and not
  // when you switch/navigate routes
  // Find a way to capture the update

  return (
    <div className="navbar">
      {setHeader()}
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
  },
  rightNav: {
    display: 'flex',
    alignItems: 'center',
  },

  textAreaHeader: {
    marginBottom: '20px',
  },
};

export default Navbar;
