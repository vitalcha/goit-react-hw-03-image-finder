import React from 'react';
import LoaderComponent from 'react-loader-spinner';
import abc from './Loader.module.css';

const Loader = () => {
  return (
    <div className={abc.loader}>
      <LoaderComponent
        type="BallTriangle"
        color="grey"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;
