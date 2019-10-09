import React, {useContext, useState} from 'react';

import { AlertContext } from '../context/alert/AlertContext';
import { NotesContext } from '../context/notes/NotesContext';

const Form: React.FC = () => {
  const [value, setValue] = useState('');
  const Alert = useContext(AlertContext);
  const Note = useContext(NotesContext);

  const submitHandler = (event: any) => {
    event.preventDefault();

    if(value.trim()) {
      Note.createNote(value);
      setValue('');
    } else {
      Alert.show('Tasks description is empty!', 'danger');
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
