import React, { useContext } from 'react';
import { FirebaseContext } from '../context/firebase/FirebaseContext';

const Notes: React.FC = () => {
  const { firebaseState, deleteNote } = useContext(FirebaseContext);

  return (
    <ul className="list-group">
      {
        firebaseState.notes.map(note =>
          <li key={note.id} className="list-group-item note">
            <div>
              <strong>{ note.title }</strong>
              <small>{ new Date().toLocaleDateString() }</small>
            </div>
            <button
              onClick={() => deleteNote(note.id)}
              type="button"
              className="btn btn-outline-danger btn-sm"
            >
              &times;
            </button>
          </li>)
      }
    </ul>
  )
};

export default Notes;
