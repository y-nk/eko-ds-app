import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { add, link } from 'eko-ds-core';
import GraphProvider, { graph } from './contexts/graph';


import App from './app';

// mock data
add(graph, 'A', { name: 'A', x: -100, y: 0 });
add(graph, 'B', { name: 'B', x: -100, y: -200 });
add(graph, 'C', { name: 'C', x: -100, y: 200 });
add(graph, 'D', { name: 'D', x: 100, y: 0 });
add(graph, 'E', { name: 'E', x: 100, y: -200 });
add(graph, 'F', { name: 'F', x: 100, y: 200 });

link(graph, 'A', 'B', 1);
link(graph, 'A', 'C', 4);
link(graph, 'A', 'D', 10);
link(graph, 'B', 'E', 3);
link(graph, 'C', 'D', 4);
link(graph, 'C', 'F', 2);
link(graph, 'D', 'E', 1);
link(graph, 'E', 'A', 2);
link(graph, 'E', 'B', 3);
link(graph, 'F', 'D', 1);

const Main = () => (
  <GraphProvider>
    <App />
  </GraphProvider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
