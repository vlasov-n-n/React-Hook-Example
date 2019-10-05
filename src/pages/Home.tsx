import React, { Fragment } from 'react';
import Form from '../components/Form';
import Notes from '../components/Notes';
import { INote } from '../types/INote';

interface IProps {

}

const mockNotes: Array<INote> = [
  {
    id: 1,
    title: "Test",
  }
];

const Home: React.FC<IProps> = (props) => {
  return (
    <Fragment>
      <Form />
      <hr/>
      <Notes notes={mockNotes} />
    </Fragment>
  )
};

export default (Home);
