import React from 'react';
import Proppes from 'prop-types';
import abc from './Button.modal.css';

const Button = ({ ChangePage }) => (
  <>
    <button onClick={ChangePage} type="button" className={abc.Button}>
      Load more
    </button>
  </>
);
export default Button;

Button.propTypes = {
  ChangePage: Proppes.func.isRequired,
};
