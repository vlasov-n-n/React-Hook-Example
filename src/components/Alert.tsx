import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/AlertContext';

const Alert: React.FC = () => {
  const { alert, hide } = useContext(AlertContext);

  if(!alert.visible) {
    return null;
  }

  return (
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
      <strong>&nbsp;{alert.message}</strong>
      <button onClick={hide} type="button" className="close">
        <span aria-hidden="true">
          &times;
        </span>
      </button>
    </div>
  )
};

export default Alert;
