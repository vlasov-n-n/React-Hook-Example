import { createContext } from 'react';
import { IFirebaseContext } from './IFirebaseContext';

export const FirebaseInitialState = {
  notes: [],
  loading: false,
};

const initialContext: IFirebaseContext = {
  firebaseState: FirebaseInitialState,
  createNote: (note) => {},
  updateNote: (note) => {},
  deleteNote: (id) => {},
};

export const FirebaseContext = createContext<IFirebaseContext>(initialContext);
