import React from 'react';
import { INote } from '../types/INote';

interface IProps {
  notes: Array<INote>;
}

const Notes: React.FC<IProps> = ({ notes }) => {
  return (
    <ul className="list-group">
      {
        notes.map(note =>
          <li key={note.id} className="list-group-item note">
            <div>
              <strong>{ note.title }</strong>
              <small>{ new Date().toLocaleDateString() }</small>
            </div>
            <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
          </li>)
      }
    </ul>
  )
};

export default Notes;
