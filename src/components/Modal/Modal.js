/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    srcModal: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    alt: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode !== 27) {
      return;
    }

    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { srcModal, alt } = this.props;

    return (
      <div onClick={this.handleBackdropClick} className={s.Overlay}>
        <div className={s.Modal}>
          <img src={srcModal} alt={alt} />
        </div>
      </div>
    );
  }
}
