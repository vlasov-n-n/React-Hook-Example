import React from 'react';

import * as ActionTypes from '../ContextActionTypes';
import { IAppActions } from '../../types/IAppActions';
import { INotesState } from './INotesContext';
import { INote } from '../../types/INote';

/** @description Notes reducer */
export const NotesReducer: React.Reducer<INotesState, IAppActions> = (state, action):INotesState => {
  switch (action.type) {
    case ActionTypes.SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.HIDE_LOADER:
      return {
        ...state,
        loading: false,
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

    case ActionTypes.FETCH_NOTES:
      return {
        ...state,
        notes: action.payload.notes,
        loading: false,
      };

    default:
      return state;
  }
};
