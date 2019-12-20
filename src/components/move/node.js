import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Node from '../common/node/index';

import { GraphContext } from '../../contexts/graph';
import useMouse from '../../hooks/useMouse';

const MoveNode = ({
  id, x, y, name,
}) => {
  const { move } = useContext(GraphContext);

  const onMove = (mouse) => move(id, mouse.x, mouse.y);
  const { dragging, setDragging } = useMouse(onMove);

  return (
    <Node className={cx('node move', { dragging })} x={x} y={y}>
      <div onMouseDown={() => setDragging(true)}>{ name }</div>
    </Node>
  );
};

MoveNode.propTypes = {
  id: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  name: PropTypes.string.isRequired,
};

MoveNode.defaultProps = {
  x: 0,
  y: 0,
};

export default MoveNode;
