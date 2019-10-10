import React, { useContext, useReducer } from 'react';
import axios from 'axios';

import * as ActionTypes from '../ContextActionTypes';
import { NotesContext, NotesInitialState } from './NotesContext';
import { NotesReducer } from './NotesReducer';
import { IAppActions } from '../../types/IAppActions';
import { INotesState } from './INotesContext';
import { INote } from '../../types/INote';
import { AlertContext } from '../alert/AlertContext';

const url: string = `${process.env.REACT_APP_DB_URL}` || '';

export const NotesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<INotesState, IAppActions>>(
    NotesReducer, NotesInitialState
  );
  const Alert = useContext(AlertContext);

  /** @description Show loader */
  const showLoader = () => {
    dispatch({
      type: ActionTypes.SHOW_LOADER,
    })
  };

  /** @description Hide loader */
  const hideLoader = () => {
    dispatch({
      type: ActionTypes.HIDE_LOADER
    });
  };

  /** @description Create note */
  const createNote = async (title: string) => {
    showLoader();

    const newNote = {
      title,
      date: new Date().toJSON(),
      active: true,
    };

    await axios
      .post(`${url}/notes.json`, newNote)
      .then(res => {
        dispatch({
          type: ActionTypes.CREATE_NOTE,
          payload: {
            createdNote: {
              ...newNote,
              id: res.data.name,
            }
          },
        })
      })
      .catch(() => {
        Alert.show('Error', 'danger');
        hideLoader();
      });
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
  const deleteNote = async (id: string) => {
    showLoader();

    await axios.delete(`${url}/notes/${id}.json`)
      .then(() => {
        dispatch({
          type: ActionTypes.DELETE_NOTE,
          payload: {
            id,
          },
        })
      })
      .catch(() => {
        Alert.show('Error', 'danger');
        hideLoader();
      });
  };

  /** @description Fetch all notes */
  const fetchNotes = async () => {
    showLoader();

    await axios
      .get(`${url}/notes.json`)
      .then(res => {
        const result: Array<INote> = res.data
          ? Object.keys(res.data).map((key: string) => {
            return {
              ...res.data[key],
              id: key
            }
          })
          : [];

        dispatch({
          type: ActionTypes.FETCH_NOTES,
          payload: {
            notes: result,
          },
        })
      })
      .catch(() => {
        Alert.show('Error', 'danger');
        hideLoader();
      })
    ;
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
