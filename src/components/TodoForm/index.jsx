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
    <div className="container mt-5">
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleOnChange}
          name="name"
        />
      </form>
    </div>
  );
}

export default TodoForm;
