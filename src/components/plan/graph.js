import React, { useContext, useState } from 'react';
import { edgesOf } from 'eko-ds-core';

import { GraphContext } from '../../contexts/graph';

import Graph from '../common/graph/index';
import Node from './node';
import Edge from './edge';

export default () => {
  const {
    nodes, edges, steps, step,
  } = useContext(GraphContext);

  const [open, setOpen] = useState(false);

  // open paths
  const directions = steps.length
    ? edgesOf({ nodes, edges }, steps[steps.length - 1], 'from')
    : [];

  // action
  const push = (node) => {
    if (!open) {
      if (steps.length) step(null);
      else {
        setOpen(true);
        step(node);
      }
    } else if (directions.find((edge) => edge.to === node)) step(node);

    else if (node === steps[0] || node === steps[steps.length - 1]) {
      if (steps.length === 1) step(null);

      setOpen(false);
    }
  };

  return (
    <Graph>
      { edges.map((edge) => (
        <Edge
          key={`${edge.from}${edge.to}`}
          from={nodes[edge.from]}
          to={nodes[edge.to]}
          cost={edge.cost}
          highlight={open && directions.includes(edge)}
        />
      )) }

      { Object.values(nodes).map((node) => (
        <Node
          key={node.id}
          id={node.id}
          x={node.x}
          y={node.y}
          name={node.name}
          active={steps.includes(node.id)}
          onClick={() => push(node.id)}
        />
      )) }
    </Graph>
  );
};
