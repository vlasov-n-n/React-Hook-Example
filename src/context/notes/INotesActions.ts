import * as ActionTypes from '../ContextActionTypes';
import { INote } from '../../types/INote';

export interface ICreateNote {
  type: typeof ActionTypes.CREATE_NOTE;
  payload: {
    createdNote: INote;
  };
}

export interface IUpdateNote {
  type: typeof ActionTypes.UPDATE_NOTE;
  payload: {
    note: INote;
  };
}

export interface IDeleteNote {
  type: typeof ActionTypes.DELETE_NOTE;
  payload: {
    id: string;
  };
}

export interface IFetchNotes {
  type: typeof ActionTypes.FETCH_NOTES;
  payload: {
    notes: Array<INote>;
  };
}

export interface IShowLoader {
  type: typeof ActionTypes.SHOW_LOADER;
}

export interface IHideLoader {
  type: typeof ActionTypes.HIDE_LOADER;
}

export type INotesActions =
  | ICreateNote
  | IUpdateNote
  | IDeleteNote
  | IFetchNotes
  | IShowLoader
  | IHideLoader
