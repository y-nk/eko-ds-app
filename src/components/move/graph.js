import React, { useContext } from 'react';

import { GraphContext } from '../../contexts/graph';

import Graph from '../common/graph/index';
import Node from './node';
import Edge from './edge';

export default () => {
  const { nodes, edges } = useContext(GraphContext);

  return (
    <Graph>
      { edges.map((edge) => (
        <Edge
          key={`${edge.from}${edge.to}`}
          from={nodes[edge.from]}
          to={nodes[edge.to]}
          cost={edge.cost}
        />
      )) }

      { Object.values(nodes).map((node) => (
        <Node
          key={node.id}
          id={node.id}
          x={node.x}
          y={node.y}
          name={node.name}
        />
      )) }
    </Graph>
  );
};
