import React from 'react';

import * as ActionTypes from '../ContextActionTypes';
import { IAppActions } from '../../types/IAppActions';
import { INotesState } from './INotesContext';
import { INote } from '../../types/INote';

/** @description Alert reducer */
export const NotesReducer: React.Reducer<INotesState, IAppActions> = (state, action):INotesState => {
  switch (action.type) {
    case ActionTypes.SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.CREATE_NOTE:
      return {
        ...state,
        loading: false,
        notes: [...state.notes, action.payload.createdNote]
      };

    case ActionTypes.UPDATE_NOTE:
      return {
        ...state,
        loading: false,
        notes: [...state.notes, action.payload.note]
      };

    case ActionTypes.DELETE_NOTE:
      return {
        ...state,
        loading: false,
        notes: [...state.notes.filter((note: INote) => note.id !== action.payload.id)]
      };

    default:
      return state;
  }
};
