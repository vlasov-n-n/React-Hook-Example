import React, { Fragment, useContext, useEffect } from 'react';
import Form from '../components/Form';
import Notes from '../components/Notes';
import { NotesContext } from '../context/notes/NotesContext';
import Loader from '../components/Loader';

const Home: React.FC = () => {
  const { notesState, fetchNotes, } = useContext(NotesContext);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Fragment>
      { notesState.loading && <Loader /> }
      <Form />
      <hr />
      <Notes />
    </Fragment>
  )
};

export default (Home);
