import React, {useState} from 'react';
import './Team.scss';
import {useHistory} from 'react-router-dom';

import Textarea from '../../components/Textarea';
import PopoverItem from '../../components/PopoverItem';
import CustomModal from '../../components/CustomModal';
import ClockedInList from '../../components/ClockedInList';

const Team = ({match}) => {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Joe',
      clockedIn: true,
      time: '11:40'
    },
    {
      id: 2,
      name: 'Brian',
      clockedIn: true,
      time: '11:40'
    },
    {
      id: 3,
      name: 'Dom',
      clockedIn: false,
      time: null
    },
  ])


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSettings = () => {
    history.push(`/teams/${match.params.id}/settings`);
  };

  const handleProfile = (id) => {
    history.push(`/teams/${match.params.id}/profile/${id}`);
  }

  const FistIcon = () => (
    <div className="team__icon">
      <i className="fas fa-fist-raised fa-2x"></i>
    </div>
  );

  const RoadmapIcon = () => (
    <div className="team__icon">
      <i className="far fa-map fa-2x"></i>
    </div>
  );

  const TeamSettingsIcon = () => (
    <div onClick={handleSettings} className="team__icon">
      <i className="fas fa-cog fa-2x"></i>
    </div>
  );

  return (
    <>
      <div className='team'>
        <header className='team__header'>
          <h1 className='team__brand'>Logo</h1>
          <div style={styles.middleNav}>
            <div className="team__day" style={styles.day}>
              Day 1
            </div>
          </div>
          <div style={styles.rightNav}>
            <div onClick={handleOpen}>
              <PopoverItem component={FistIcon} text="Clock In" />
            </div>
            <PopoverItem component={RoadmapIcon} text="Roadmap" />
            <PopoverItem component={TeamSettingsIcon} text="Team Settings" />
          </div>
        </header>
        <div className='team__grid'>
          <ClockedInList handleProfile={handleProfile} members={members} />
        </div>
      </div>
      <CustomModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      >
        <div className='team__modal'>
          <header style={styles.textAreaHeader}>
            <h5>To clock in, voice what you are working on today!</h5>
          </header>
          <Textarea placeholder="What are you working on today?" rows="5" />
          <button className='team__clockIn' onClick={handleClose}>
            Clock In
          </button>
        </div>
      </CustomModal>
    </>
  );
};

const styles = {
  rightNav: {
    display: 'flex',
    alignItems: 'center',
  },

  textAreaHeader: {
    marginBottom: '20px',
  },

};

export default Team;
