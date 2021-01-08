import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {

  const { onSubmit } = props;
  const [ searchTerm, setSearchTerm ] = useState('');
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(event) {
    const value = event.target.value;
    setSearchTerm(event.target.value);

    if (!onSubmit) return;
    // Set --> 100 --> clear, set --->300 --> submit
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    };

// debounce
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
    
    

  }

  

  return (
    <div>
      <h3 className="text-info"> Search  </h3>
      <form>
        <input 
            className="form-control w-50"
            type="text" 
            value={ searchTerm }
            onChange={ handleSearchTermChange }

        />

      </form>
    </div>
  );
}

export default PostFiltersForm;