import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ handleClick }) => {
  return (
    <button className={s.Button} onClick={handleClick} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
