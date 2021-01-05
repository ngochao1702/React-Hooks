import React, { useState } from 'react';
import PropTypes from 'prop-types';

ChangeToMoney.propTypes = {
  
};



function ChangeToMoney(props) {
  

  return (
    <div className="container">
       <div className="form-group w-50">
          <label for="exampleInputEmail1">Viet Nam</label>
          <input 
                type="text" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="VND"
                name="vietNam"
                
          />
        </div>
        <div className="form-group w-50">
          <label for="exampleInputPassword1">USD</label>
          <input 
                type="text" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="USD"
                name="usd"
                
          />
        </div>
    </div>
  );
}

export default ChangeToMoney;