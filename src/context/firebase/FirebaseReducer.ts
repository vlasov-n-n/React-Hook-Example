import React from 'react';

import * as ActionTypes from '../ContextActionTypes';
import { IAppActions } from '../../types/IAppActions';
import { IFirebaseState } from './IFirebaseContext';
import { INote } from '../../types/INote';

/** @description Alert reducer */
export const FirebaseReducer: React.Reducer<IFirebaseState, IAppActions> = (state, action):IFirebaseState => {
  switch (action.type) {
    case ActionTypes.CREATE_NOTE:
    case ActionTypes.UPDATE_NOTE:
      return {
        ...state,
        loading: true,
        notes: [...state.notes, action.payload.note]
      };

    case ActionTypes.DELETE_NOTE:
      return {
        ...state,
        loading: true,
        notes: [...state.notes.filter((note: INote) => note.id !== action.payload.id)]
      };

    default:
      return state;
  }
};
