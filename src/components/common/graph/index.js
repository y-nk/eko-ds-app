import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Group from '../group';
import Cross from '../cross';

const Graph = ({ children, onClick, onMouseUp }) => (
  <svg className="graph">
    <rect x="0" y="0" width="100%" height="100%" onClick={onClick} onMouseUp={onMouseUp} />

    <Group x="50%" y="50%">
      <Cross />
      { children }
    </Group>
  </svg>
);

Graph.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  onMouseUp: PropTypes.func,
};

Graph.defaultProps = {
  children: [],
  onClick: null,
  onMouseUp: null,
};

export default Graph;
