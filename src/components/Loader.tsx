import React from 'react';

const Loader: React.FC = () => (
  <div className="text-center position-absolute align-content-center align-items-center">
    <div className="spinner-border text-info" role="status">
      <span className="sr-only">
      </span>
    </div>
  </div>
);

export default Loader;
