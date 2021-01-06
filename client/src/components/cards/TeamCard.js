import React from 'react';
import {useHistory} from 'react-router-dom';

import cardImage from '../../assets/images/team.jpg';

const TeamCard = ({id}) => {
  const history = useHistory();

  const handleTeamClick = () => {
    history.push(`/teams/${id}`);
  };

  return (
    <div onClick={handleTeamClick} style={styles.card}>
      <img style={styles.cardImage} src={cardImage} alt="" />
      <footer style={styles.cardFooter}>
        <h5 style={styles.teamName}>Team Name</h5>
      </footer>
    </div>
  );
};

const styles = {
  card: {
    width: '20%',
    height: '300px',
    border: '1px solid lightgray',
    margin: '0 20px 20px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  cardImage: {
    height: '225px',
    width: '100%',
    borderBottom: '1px solid lightgray',
  },
  cardFooter: {
    borderTop: '1px solid lightgray',
    padding: '10px',
  },
  teamName: {
    fontSize: '1rem',
  },
};

export default TeamCard;
