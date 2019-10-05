import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

interface IProps {
  alert?: {
    message: string;
    type?: string;
    visible: boolean;
  }
}

const Alert: React.FC<IProps> = () => {
  const { alert, hide } = useContext(AlertContext);

  if(!alert.visible) {
    return null;
  }

  return (
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
      <strong>{alert.message}</strong>
      <button onClick={hide} type="button" className="close">
        <span aria-hidden="true">
          &times;
        </span>
      </button>
    </div>
  )
};

export default Alert;
