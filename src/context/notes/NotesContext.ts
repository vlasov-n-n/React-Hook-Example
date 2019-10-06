import { createContext } from 'react';
import { INotesContext } from './INotesContext';

export const NotesInitialState = {
  notes: [],
  loading: false,
};

const initialContext: INotesContext = {
  notesState: NotesInitialState,
  createNote: (title) => {},
  updateNote: (note) => {},
  deleteNote: (id) => {},
  fetchNotes: () => {},
};

export const NotesContext = createContext<INotesContext>(initialContext);
