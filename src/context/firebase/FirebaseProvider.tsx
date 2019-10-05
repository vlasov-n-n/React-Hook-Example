import React, { useReducer } from 'react';

import { FirebaseContext, FirebaseInitialState } from './FirebaseContext';
import { FirebaseReducer } from './FirebaseReducer';
import { IFirebaseState } from './IFirebaseContext';
import * as ActionTypes from '../ContextActionTypes';
import { IAppActions } from '../../types/IAppActions';
import { INote } from '../../types/INote';

export const FirebaseProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<IFirebaseState, IAppActions>>(
    FirebaseReducer, FirebaseInitialState
  );

  /** @description Create note */
  const createNote = (note: INote) => {
    dispatch({
      type: ActionTypes.CREATE_NOTE,
      payload: {
        note
      }
    })
  };

  /** @description Update note */
  const updateNote = (note: INote) => {
    dispatch({
      type: ActionTypes.UPDATE_NOTE,
      payload: {
        note
      }
    })
  };

  /** @description Delete note */
  const deleteNote = (id: number) => {
    dispatch({
      type: ActionTypes.DELETE_NOTE,
      payload: {
        id
      }
    })
  };

  return (
    <FirebaseContext.Provider value={{
      createNote,
      updateNote,
      deleteNote,
      firebaseState: state
    }}>
      { children }
    </FirebaseContext.Provider>
  );
};
