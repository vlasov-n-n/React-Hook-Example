import { INote } from '../../types/INote';

export interface IFirebaseState {
  notes: Array<any>;
  loading: boolean;
}

export interface IFirebaseContext {
  firebaseState: IFirebaseState;
  createNote: (note: INote) => void,
  updateNote: (note: INote) => void,
  deleteNote: (id: number) => void,
}
