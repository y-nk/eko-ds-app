import React, { useContext } from 'react';
import './style.css';
import cx from 'classnames';

import { routeFor, costOf } from 'eko-ds-core';

import { GraphContext } from '../../../contexts/graph';

export default () => {
  const { nodes, edges, steps } = useContext(GraphContext);

  const route = routeFor({ nodes, edges }, steps);
  const cost = costOf(route);

  return (
    <aside className={cx('report', { visible: cost > 0 })}>
      <dl>
        <dt>Edge</dt>
        <dd>Cost</dd>

        { route.map((edge) => ([
          <dt key={`dt${edge.from}${edge.to}`}>
            {nodes[edge.from].name}
            {' '}
→
            {' '}
            {nodes[edge.to].name}
          </dt>,
          <dd key={`dd${edge.from}${edge.to}`}>{edge.cost}</dd>,
        ])) }

        <dt>Total</dt>
        <dd>{ cost }</dd>
      </dl>
    </aside>
  );
};
