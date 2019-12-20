import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


import { GraphContext } from '../../contexts/graph';
import useMouse from '../../hooks/useMouse';

import Node from '../common/node/index';
import Input from '../common/input';
import DeleteButton from '../common/delete';

const LENGTH = 20;

const EditNode = ({
  id, name, x, y, active, onMouseDown, onMouseUp,
}) => {
  const { del, rename } = useContext(GraphContext);

  const [{ x: hx, y: hy }, setHook] = useState({ x: 0, y: 0 });

  const onMove = (mouse) => {
    const angle = Math.atan2(mouse.y - y, mouse.x - x);

    setHook({
      x: LENGTH * Math.cos(angle),
      y: LENGTH * Math.sin(angle),
    });
  };

  const { setDragging } = useMouse(onMove, false);

  const onLeave = () => {
    if (active) return;

    setDragging(false);
  };

  return (
    <Node className={cx('node edit', { active })} x={x} y={y}>
      <div onMouseEnter={() => setDragging(true)} onMouseLeave={onLeave}>
        <Input value={name} onChange={(val) => rename(id, val)} />
        <span className="hook" style={{ transform: `translate(${hx}px, ${hy}px` }} onMouseDown={(e) => onMouseDown(e, id)} onMouseUp={(e) => onMouseUp(e, id)} />
        <DeleteButton onClick={() => del(id)} />
      </div>
    </Node>
  );
};

EditNode.propTypes = {
  id: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onMouseDown: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
};

EditNode.defaultProps = {
  x: 0,
  y: 0,
  active: false,

};

export default EditNode;
