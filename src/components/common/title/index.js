import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Title = ({ children }) => (
  <h1 className="title">{ children }</h1>
);

Title.propTypes = {
  children: PropTypes.node,
};

Title.defaultProps = {
  children: [],
};

export default Title;
