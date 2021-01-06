import {StylesProvider} from '@material-ui/core';
import React from 'react';

const Textarea = ({handleChange, value, rows, placeholder}) => (
  <textarea
    onChange={handleChange}
    value={value}
    style={styles.textarea}
    rows={rows}
    placeholder={placeholder}
  ></textarea>
);

const styles = {
  textarea: {
    border: '1px solid lightgray',
    borderRadius: '4px',
    width: '100%',
    padding: '10px'
  },
};

export default Textarea;
