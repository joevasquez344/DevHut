import React from 'react';
import {makeStyles, StylesProvider} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    paddingRight: '20px',
    paddingBottom: '20px'
  },
  inline: {
    display: 'inline',
  },
}));

const ClockedInList = ({members, handleProfile}) => {
  const classes = useStyles();

  const handleClockedStatus = (member) => {
    if(member.clockedIn) {

    }
  }

  return (
    <List className={classes.root}>
      {members.map((member) => {
        return (
          <div onClick={() => handleProfile(member.id)} style={styles.item}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                // primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                  <span style={{fontWeight: 'bold'}}>{member.name}</span>
                    </Typography>
                    {member.clockedIn ? <span style={{color: 'lightgreen', fontWeight: 'bold'}}> is clocked in</span> : <span style={{color: 'red', fontWeight: 'bold'}}> is not clocked in</span>}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            
          </div>
        );
      })}
    </List>
  );
};

const styles = {
    item: {
        cursor: 'pointer'
    }
}

export default ClockedInList;
