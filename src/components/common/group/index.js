import React from 'react';
import PropTypes from 'prop-types';

const Group = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg overflow="visible" {...props}>
    { children }
  </svg>
);

Group.propTypes = {
  children: PropTypes.node,
};

Group.defaultProps = {
  children: [],
};

export default Group;
