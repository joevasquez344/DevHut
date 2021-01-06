import React from 'react';
import './Content.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Teams from '../../views/Teams.js';
import Team from '../../views/Team/Team';
import TeamSettings from '../../views/TeamSettings/TeamSettings';
import Profile from '../../views/Profile/Profile';

class Content extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div style={styles.container}>
        <Switch>
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/teams/:id" component={Team} />
          <Route exact path="/teams/:id/settings" component={TeamSettings} />
          <Route exact path="/teams/:id/profile/:id" component={Profile} />
        </Switch>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '85vw',
    height: '100vh',
    position: 'absolute',
    right: 0,
    fontWeight: 500,
  },
};

export default Content;
