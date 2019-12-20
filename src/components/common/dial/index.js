import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';


import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import PanToolIcon from '@material-ui/icons/PanTool';
import CreateIcon from '@material-ui/icons/Create';
import NavigationIcon from '@material-ui/icons/Navigation';

const ACTIONS = {
  move: {
    icon: PanToolIcon,
    name: 'Re-arrange the map',
  },

  edit: {
    icon: CreateIcon,
    name: 'Edit the map',
  },

  plan: {
    icon: NavigationIcon,
    name: 'Plan a route',
  },
};

const Dial = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);

  const Icon = ACTIONS[mode].icon;

  const changeTo = (newMode) => {
    setMode(newMode);
    setOpen(false);
  };

  return (
    <SpeedDial
      className="dial"
      ariaLabel="speeddial"
      direction="up"
      icon={<Icon htmlColor="#fff" />}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      { Object.entries(ACTIONS).map(([routeName, action]) => (
        <SpeedDialAction
          key={action.name}
          icon={<action.icon htmlColor={`var(--${routeName})`} />}
          tooltipTitle={action.name}
          onClick={() => changeTo(routeName)}
        />
      )) }
    </SpeedDial>
  );
};

Dial.propTypes = {
  mode: PropTypes.oneOf(['move', 'edit', 'plan']).isRequired,
  setMode: PropTypes.func.isRequired,
};

export default Dial;
