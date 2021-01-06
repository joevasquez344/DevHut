import React from 'react';

import TeamCard from '../components/cards/TeamCard';

const Teams = () => {
  return (
    <div style={styles.container}>
      <div style={styles.cards}>
        <TeamCard id={1} />
        <TeamCard id={2} />
        <TeamCard id={3} />
        <TeamCard id={4} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
  },
  cards: {
    display: 'flex',
  },
};

export default Teams;
