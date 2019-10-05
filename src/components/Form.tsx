import React from 'react';

interface IProps {}

const Form: React.FC<IProps> = (props) => {
  return (
    <form className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Text please..."
      />
    </form>
  )
};

export default Form;
