import React, { useReducer } from 'react';

import { AlertContext } from './alertContext';
import { AlertReducer, IAlertState } from './alertReducer';
import { IAppActions } from '../../types/IAppActions';
import * as AlertActionTypes from '../../types/IAlertAction';

/** @description Alert provider */
export const AlertState: React.FC= ({ children }) => {
  const [state, dispatch ] = useReducer<React.Reducer<IAlertState, IAppActions>>(
    AlertReducer, {visible: false}
  );

  /** @description Show alert message */
  const show = (message: string, type = 'warning') => {
    dispatch({
      type: AlertActionTypes.SHOW_ALERT,
      payload: {
        message,
        type,
      },
    })
  };

  /** @description Hide alert message */
  const hide = () => {
    dispatch({
      type: AlertActionTypes.HIDE_ALERT,
    })
  };

  return (
    <AlertContext.Provider value={{
      show,
      hide,
      alert: state
    }}>
      { children }
    </AlertContext.Provider>
  );
};
