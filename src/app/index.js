import React, { useState } from 'react';
import './index.css';

import {
  createHistory,
  LocationProvider,
  Router, Redirect,
} from '@reach/router';
import createHashSource from 'hash-source';

import Title from '../components/common/title';
import Dial from '../components/common/dial';

import MoveGraph from '../components/move/graph';
import EditGraph from '../components/edit/graph';
import PlanGraph from '../components/plan/graph';

import Report from '../components/common/report';

const defaultRoute = 'move';
const routes = ['move', 'edit', 'plan'];

const source = createHashSource();
const history = createHistory(source)

export default () => {
  const path = window.location.hash.slice(1);

  const [mode, setMode] = useState(
    routes.includes(path) ? path : defaultRoute,
  );

  const changeRoute = (newMode) => {
    setMode(newMode);
    history.navigate(`/${newMode}`)
  };

  return (
    <LocationProvider history={history}>
      <div className={`app ${mode}`}>
        <Title>Eko Delivery Service</Title>
        <Dial mode={mode} setMode={changeRoute} />
        <Report />

        <Router className="router">
          <MoveGraph path="/move" />
          <EditGraph path="/edit" />
          <PlanGraph path="/plan" />

          <Redirect from="/" to={`/${defaultRoute}`} default noThrow />
        </Router>
      </div>
    </LocationProvider>
  );
};
