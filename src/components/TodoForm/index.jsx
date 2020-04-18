import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaltProps = {
  onSubmit: null
}

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  function handleChangeValue(e) {
    setValue(e.target.value)
  }

  function handleSubmit(e) {
    // Prevent browser from reloading
    e.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      title: value
    }
    onSubmit(formValues);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChangeValue}
      >
      </input>
    </form>
  );
}

export default TodoForm;