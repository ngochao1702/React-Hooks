import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

GetApi.propTypes = {
  data: PropTypes.object.isRequired,
};
GetApi.defaultProps ={ 
  data: null,
}

function GetApi(props) {
  
  const { data } = props;
  
  axios.get('https://gist.githubusercontent.com/ngochao1702/70bca845200a1be3bbefe97c86b62f72/raw/b75c65fe230b47102d148a8b387b4833fc4be8b3/gistfile1.txt')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  return (
    <div>
      
    </div>
  );
}

export default GetApi;