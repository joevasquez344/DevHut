import React, {useState} from 'react';
import {setAvatar} from '../helpers/navbar';
import Avatar from './Avatar';
import avatar from '../assets/images/avatar.jpg';
import PopoverItem from './PopoverItem';
import moment from 'moment';


const ClockedInList = () => {
  var CurrentDate = moment().format('MM/DD/YYYY');


  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Joe',
      clockedIn: true,
      time: '11:40',
      avatar,
      standUp: {
        date: CurrentDate,
        text: `This is my stand up for ${CurrentDate}`
      },
    },
    {
      id: 2,
      name: 'Brian',
      clockedIn: true,
      time: '11:40',
      avatar: 'B',
      standUp: {
        date: CurrentDate,
        text: `This is my stand up for ${CurrentDate}`
      },
    },
    {
      id: 3,
      name: 'Dom',
      clockedIn: false,
      time: null,
      avatar: 'D',
      standUp: {
        date: CurrentDate,
        text: `This is my stand up for ${CurrentDate}`
      },
    },
  ]);

 
  
  return (
    <div style={styles.avatars}>
      {/* <div style={styles.avatar}>
        <div style={styles.clockedIn}></div>
      </div>
      <div style={styles.avatar}>
        <div style={styles.clockedOff}></div>
      </div> */}

      {members.map((member) => {
        return <PopoverItem component={Avatar} text={member.name} member={member} />
        // return <Avatar member={member} />
      })}
    </div>
  );
};

const styles = {
  avatars: {
    display: 'flex',
    width: '100%',
    height: '80px',
    background: 'white',
    alignItems: 'center',
    padding: '0 15px',
    borderBottom: '1px solid #e7ebee',
  },
};

export default ClockedInList;
