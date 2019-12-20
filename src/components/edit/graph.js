import React, { useContext, useState } from 'react';

import { GraphContext } from '../../contexts/graph';
import useMouse from '../../hooks/useMouse';

import Graph from '../common/graph/index';
import Node from './node';
import Edge from './edge';

export default () => {
  const {
    nodes, edges, add, link,
  } = useContext(GraphContext);

  const createNode = (e) => {
    add(null, {
      x: e.clientX - window.innerWidth * 0.5,
      y: e.clientY - window.innerHeight * 0.5,
      name: '',
    });
  };

  const [anchor, setAnchor] = useState(null);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { setDragging } = useMouse(setMouse, false);

  const startEdge = (e, from) => {
    setAnchor(from);
    setDragging(true);
  };

  const endEdge = (e, to) => {
    setDragging(false);
    setAnchor(null);

    if (anchor === to) return;

    try { link(anchor, to, 0); } catch (err) { console.warn('broken edge'); }
  };

  const cancelEdge = () => {
    setDragging(false);
    setAnchor(null);
  };

  return (
    <Graph onClick={createNode} onMouseUp={cancelEdge}>
      { edges.map((edge) => (
        <Edge
          key={`${edge.from}${edge.to}`}
          from={nodes[edge.from]}
          to={nodes[edge.to]}
          cost={edge.cost}
        />
      )) }

      { anchor ? <Edge key="draft" from={nodes[anchor]} to={mouse} /> : null}

      { Object.values(nodes).map((node) => (
        <Node
          key={node.id}
          id={node.id}
          x={node.x}
          y={node.y}
          name={node.name}
          active={node.id === anchor}
          onMouseDown={startEdge}
          onMouseUp={endEdge}
        />
      )) }
    </Graph>
  );
};
