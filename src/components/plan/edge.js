import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Edge from '../common/edge/index';

const PlanEdge = ({
  from, to, cost, highlight,
}) => (
  <Edge className={cx('edge plan', { highlight })} from={from} to={to}>
    <div>{ cost }</div>
  </Edge>
);

PlanEdge.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  cost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  highlight: PropTypes.bool,
};

PlanEdge.defaultProps = {
  cost: 0,
  highlight: false,
};

export default PlanEdge;
