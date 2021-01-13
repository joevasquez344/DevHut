import React, {useState} from 'react';
import CustomModal from './CustomModal';

const Avatar = ({member, handlePopoverClose}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handlePopoverClose();
  };
  return (
    <>
      {member.avatar.length === 1 ? (
        <div onClick={handleOpen} style={styles.avatar}>
          <h5 style={{margin: '0', color: 'gray'}}>{member.avatar}</h5>
          <div
            style={member.clockedIn ? styles.clockedIn : styles.clockedOff}
          ></div>
        </div>
      ) : (
        <div onClick={handleOpen} style={styles.avatar}>
          <img style={styles.picture} src={member.avatar} alt="" />
          <div
            style={member.clockedIn ? styles.clockedIn : styles.clockedOff}
          ></div>
        </div>
      )}

      <CustomModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      >
        <div style={styles.standUpModal}>
          <h3>{member.name}</h3>
          <div style={styles.date}>{member.standUp.date}</div>
          <p style={styles.text}>{member.standUp.text}</p>
        </div>
      </CustomModal>
    </>
  );
};

const styles = {
  avatar: {
    position: 'relative',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'lightgray',
    marginRight: '30px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockedIn: {
    position: 'absolute',
    top: 0,
    right: '-3px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'lightgreen',
  },
  clockedOff: {
    position: 'absolute',
    top: 0,
    right: '-3px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'red',
  },
  picture: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  standUpModal: {
    width: '40vw'
  }
};

export default Avatar;
