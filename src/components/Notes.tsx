import React, { useContext } from 'react';
import { NotesContext } from '../context/notes/NotesContext';

const Notes: React.FC = () => {
  const Notes = useContext(NotesContext);

  return (
    <ul className="list-group">
      {
        Notes.notesState.notes.map(note =>
          <li key={note.id} className="list-group-item note">
            <div>
              <strong>{ note.title }</strong>
              <small>{ new Date().toLocaleDateString() }</small>
            </div>
            <button
              onClick={() => Notes.deleteNote(note.id)}
              type="button"
              className="btn btn-outline-danger btn-sm"
            >
              &times;
            </button>
          </li>
        )
      }
    </ul>
  )
};

export default Notes;
