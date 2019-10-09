import React, {useContext, useState} from 'react';

import { AlertContext } from '../context/alert/AlertContext';
import { NotesContext } from '../context/notes/NotesContext';

const Form: React.FC = () => {
  const [value, setValue] = useState('');
  const { show } = useContext(AlertContext);
  const { createNote } = useContext(NotesContext);

  const submitHandler = (event: any) => {
    event.preventDefault();

    if(value.trim()) {
      createNote(value);
      setValue('');
      show('Task created!', 'success');
    } else {
      show('Tasks description is empty!', 'danger');
    }
  };

  return (
    <form onSubmit={submitHandler} className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Text please..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
};

export default Form;
