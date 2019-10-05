import * as ActionTypes from '../ContextActionTypes';
import { INote } from '../../types/INote';

export interface ICreate {
  type: typeof ActionTypes.CREATE_NOTE;
  payload: {
    note: INote;
  };
}

export interface IUpdate {
  type: typeof ActionTypes.UPDATE_NOTE;
  payload: {
    note: INote;
  };
}

export interface IDelete {
  type: typeof ActionTypes.DELETE_NOTE;
  payload: {
    id: number;
  };
}

export type IFirebaseActions = ICreate | IUpdate | IDelete;
