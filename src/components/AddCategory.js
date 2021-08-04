import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategoriesFromBebidApp }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (element) => {
    setInputValue(element.target.value);
  };

  const handleSubmit = (element) => {
    element.preventDefault();
    //console.log('Submit hecho');
    //setCategoriesFromBebidApp((newCategories) => [...newCategories, element]);
    //props.setCategoriesFromBebidApp();

    if (inputValue.trim().length > 2) {
      setCategoriesFromBebidApp((newCategories) => [
        inputValue,
        ...newCategories,
      ]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategoriesFromBebidApp: PropTypes.func.isRequired,
};
