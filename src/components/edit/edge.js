import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GraphContext } from '../../contexts/graph';

import Edge from '../common/edge';
import Input from '../common/input';
import DeleteButton from '../common/delete';

const EditEdge = ({ from, to, cost }) => {
  const { unlink, valuate } = useContext(GraphContext);

  // eslint-disable-next-line no-restricted-globals
  const hasCost = !isNaN(cost);

  return (
    <Edge className="edge edit" from={from} to={to}>
      { hasCost ? (
        <div>
          <Input
            pattern="\d+"
            value={cost.toString()}
            onChange={(newCost) => valuate(from.id, to.id, parseFloat(newCost))}
          />
          <DeleteButton onClick={() => unlink(from.id, to.id)} />
        </div>
      ) : null }
    </Edge>
  );
};

EditEdge.propTypes = {
  from: PropTypes.shape({
    id: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,

  to: PropTypes.shape({
    id: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,

  cost: PropTypes.number,
};

EditEdge.defaultProps = {
  cost: 0,
};

export default EditEdge;
