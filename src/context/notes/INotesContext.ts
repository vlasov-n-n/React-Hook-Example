import { INote } from '../../types/INote';

export interface INotesState {
  notes: Array<INote>;
  loading: boolean;
}

export interface INotesContext {
  notesState: INotesState;
  createNote: (title: string) => void,
  updateNote: (note: INote) => void,
  deleteNote: (id: string) => void,
  fetchNotes: () => void;
}
