import React from 'react';

interface IProps {

}

const About: React.FC<IProps> = (props) => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4">
          Just for routing
        </h1>
      </div>
    </div>
  )
};

export default (About);
