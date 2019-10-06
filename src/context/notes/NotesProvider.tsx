import React, { useReducer } from 'react';
import axios from 'axios';

import * as ActionTypes from '../ContextActionTypes';
import { NotesContext, NotesInitialState } from './NotesContext';
import { NotesReducer } from './NotesReducer';
import { IAppActions } from '../../types/IAppActions';
import { INotesState } from './INotesContext';
import { INote } from '../../types/INote';

const url: string = `${process.env.REACT_APP_DB_URL}` || '';

export const NotesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<INotesState, IAppActions>>(
    NotesReducer, NotesInitialState
  );

  /** @description Show loader */
  const showLoader = () => {
    dispatch({
      type: ActionTypes.SHOW_LOADER,
    })
  };

  /** @description Create note */
  const createNote = async (title: string) => {
    showLoader();

    const newNote = {
      title,
      date: new Date().toJSON(),
    };

    const createdNote: INote = await axios
      .post(`${url}/notes.json`, newNote)
      .then(res => res.data);

    dispatch({
      type: ActionTypes.CREATE_NOTE,
      payload: {
        createdNote,
      },
    })
  };

  /** @description Update note */
  const updateNote = async (note: INote) => {
    showLoader();

    dispatch({
      type: ActionTypes.UPDATE_NOTE,
      payload: {
        note,
      },
    })
  };

  /** @description Delete note */
  const deleteNote = async (id: number) => {
    showLoader();

    await axios.delete(`${url}/notes/${id}.json`);

    dispatch({
      type: ActionTypes.DELETE_NOTE,
      payload: {
        id,
      },
    })
  };

  /** @description Fetch all notes */
  const fetchNotes = async () => {
    showLoader();

    const notes: Array<INote> = await axios
      .get(`${url}/notes.json`)
      .then(res => res.data);

    dispatch({
      type: ActionTypes.FETCH_NOTES,
      payload: {
        notes,
      },
    })
  };

  return (
    <NotesContext.Provider value={{
      createNote,
      updateNote,
      deleteNote,
      fetchNotes,
      notesState: state
    }}>
      { children }
    </NotesContext.Provider>
  );
};
