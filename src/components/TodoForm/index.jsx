import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleOnChange(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      title: value,
    };

    onSubmit(formValues);

    // reset form
    setValue("");
  }

  return (
    <div className="container mt-5 border border-warning w-50 text-left float-left">
      <h3 className="text-primary">add Hobbit</h3>
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          className="form-control w-50 d-inline"
          type="text"
          value={value}
          onChange={handleOnChange}
          name="name"
        />
        <button 
          type="submit"
          className="btn btn-success ml-2"
          >Thêm</button>
      </form>
    </div>
  );
}

export default TodoForm;
