import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Node from '../common/node/index';

const PlanNode = ({
  x, y, name, active, onClick,
}) => (
  <Node className={cx('node plan', { active })} x={x} y={y}>
    <div onClick={onClick}>{ name }</div>
  </Node>
);

PlanNode.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

PlanNode.defaultProps = {
  x: 0,
  y: 0,
  active: false,
};

export default PlanNode;
