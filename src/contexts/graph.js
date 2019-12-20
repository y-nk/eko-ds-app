import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as core from 'eko-ds-core';

export const GraphContext = createContext(null);

export const graph = {
  nodes: {},
  edges: [],
};

const GraphProvider = ({ children }) => {
  const [nodes, setNodes] = useState(graph.nodes);
  const [edges, setEdges] = useState(graph.edges);
  const [steps, setSteps] = useState([]);


  const add = (nodeid, data) => {
    const id = nodeid !== null
      ? nodeid
      : Date.now().toString(16);

    core.add(graph, id, { id, name: id, ...data });
    setNodes({ ...graph.nodes });
  };

  const del = (id) => {
    core.del(graph, id);
    setNodes({ ...graph.nodes });

    const index = steps.indexOf(id);
    if (index !== -1) setSteps(steps.slice(0, index));
  };

  const link = (from, to, cost) => {
    core.link(graph, from, to, cost);
    setEdges([...graph.edges]);
  };

  const unlink = (from, to) => {
    core.unlink(graph, from, to);
    setEdges([...graph.edges]);
  };

  const move = (id, x, y) => {
    graph.nodes[id] = { ...graph.nodes[id], x, y };
    setNodes({ ...graph.nodes });
  };

  const rename = (id, name) => {
    graph.nodes[id] = { ...graph.nodes[id], name };
    setNodes({ ...graph.nodes });
  };

  const valuate = (from, to, cost) => {
    unlink(from, to);
    link(from, to, cost);
  };

  // --------------------------------------

  const step = (node) => {
    if (node === null) {
      setSteps([]);
      return;
    }

    if (!steps.length) setSteps([node]);
    else {
      try {
        core.edgeFor(graph, steps[steps.length - 1], node);
        setSteps([...steps, node]);
      } catch (err) { console.warn('already exists'); }
    }
  };

  // --------------------------------------

  const api = {
    nodes,
    add,
    del,
    move,
    rename,
    edges,
    link,
    unlink,
    valuate,
    steps,
    step,
  };

  // --------------------------------------

  return (
    <GraphContext.Provider value={api}>
      { children }
    </GraphContext.Provider>
  );
};

GraphProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GraphProvider;
