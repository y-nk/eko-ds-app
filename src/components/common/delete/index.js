import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import ClearIcon from '@material-ui/icons/Clear';

const DeleteButton = ({ onClick }) => (
  <span className="delete" onClick={(e) => { e.stopPropagation(); onClick(); }}>
    <ClearIcon htmlColor="currentColor" />
  </span>
);

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
