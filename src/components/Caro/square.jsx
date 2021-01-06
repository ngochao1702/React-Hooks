import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './game.css';

// Square.propTypes = {
  
// };



function Square (props) {
  
  const { squares } = props;

  

  return (
    <button
      className="square"
      onClick={ props.onClick }
    >
      {props.value}
    </button>
  );

}
export default Square;