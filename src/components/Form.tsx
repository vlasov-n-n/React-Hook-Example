import React, {useContext, useState} from 'react';

import { AlertContext } from '../context/alert/AlertContext';
import { NotesContext } from '../context/notes/NotesContext';

interface IProps {}

const Form: React.FC<IProps> = () => {
  const [value, setValue] = useState('');
  const { show } = useContext(AlertContext);
  const { createNote } = useContext(NotesContext);

  const submitHandler = (event: any) => {
    event.preventDefault();

    if(value.trim()) {
      show('Task created!', 'success');
      setValue('');
      createNote(value)
    } else {
      show('Tasks description is empty!');
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
