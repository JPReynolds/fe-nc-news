import React from 'react';

const Loader = () => {
  return (
    <section className="loaderSpinner">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2 className="Loader">Loading...</h2>
    </section>
  );
};

export default Loader;
