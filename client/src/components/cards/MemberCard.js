import React from 'react';
import cardImage from '../../assets/images/team.jpg';

const MemberCard = () => {
  return (
    <div style={styles.card}>
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

export default MemberCard;
