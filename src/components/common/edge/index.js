import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import cx from 'classnames';

import { indexesOf } from 'eko-ds-core/libarray';

import { GraphContext } from '../../../contexts/graph';

const Edge = ({
  className, from, to, children,
}) => {
  const { steps } = useContext(GraphContext);
  const selected = indexesOf([from.id, to.id], steps).length > 0;

  const x = (from.x + to.x) * 0.5;
  const y = (from.y + to.y) * 0.5;

  const angle = Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);

  return (
    <g className={cx(className, { selected })} transform={`translate(${x} ${y})`}>
      <line
        x1={from.x - x}
        x2={to.x - x}
        y1={from.y - y}
        y2={to.y - y}
      />

      <g transform={`translate(${to.x - x} ${to.y - y})`}>
        <polygon points="-30,-5 -20,0 -30,5" transform={`rotate(${angle})`} />
      </g>

      <foreignObject>
        { children }
      </foreignObject>
    </g>
  );
};

Edge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,

  from: PropTypes.shape({
    id: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,

  to: PropTypes.shape({
    id: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

Edge.defaultProps = {
  className: '',
  children: [],
};

export default Edge;
