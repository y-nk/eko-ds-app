import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Edge from '../common/edge/index';

import { GraphContext } from '../../contexts/graph';
import useMouse from '../../hooks/useMouse';

const MoveEdge = ({ from, to, cost }) => {
  const { move } = useContext(GraphContext);

  const dx = (to.x - from.x) * 0.5;
  const dy = (to.y - from.y) * 0.5;

  const onMove = ({ x, y }) => {
    move(from.id, x - dx, y - dy);
    move(to.id, x + dx, y + dy);
  };

  const { dragging, setDragging } = useMouse(onMove);

  return (
    <Edge className={cx('edge move', { dragging })} from={from} to={to}>
      { cost ? <div onMouseDown={() => setDragging(true)}>{ cost }</div> : null}
    </Edge>
  );
};

MoveEdge.propTypes = {
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

  cost: PropTypes.number,
};

MoveEdge.defaultProps = {
  cost: 0,
};

export default MoveEdge;
