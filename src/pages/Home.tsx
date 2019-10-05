import React, { Fragment } from 'react';
import Form from '../components/Form';
import Notes from '../components/Notes';

const Home: React.FC = () => {
  return (
    <Fragment>
      <Form />
      <hr/>
      <Notes/>
    </Fragment>
  )
};

export default (Home);
