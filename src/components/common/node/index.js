import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Group from '../group';

const Node = ({
  className, x, y, children,
}) => (
  <Group
    className={className}
    x={x}
    y={y}
  >
    <foreignObject>
      { children }
    </foreignObject>
  </Group>
);

Node.propTypes = {
  className: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  children: PropTypes.node,
};

Node.defaultProps = {
  className: '',
  x: 0,
  y: 0,
  children: [],
};

export default Node;
