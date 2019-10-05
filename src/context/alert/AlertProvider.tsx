import React, { useReducer } from 'react';

import { AlertContext } from './AlertContext';
import { AlertReducer } from './AlertReducer';
import { IAppActions } from '../../types/IAppActions';
import { IAlertState } from './IAlertContext';
import * as ActionTypes from '../ContextActionTypes';

/** @description Alert provider */
export const AlertProvider: React.FC = ({ children }) => {
  const [state, dispatch ] = useReducer<React.Reducer<IAlertState, IAppActions>>(
    AlertReducer, {visible: false}
  );

  /** @description Show alert message */
  const show = (message: string, type = 'warning') => {
    dispatch({
      type: ActionTypes.SHOW_ALERT,
      payload: {
        message,
        type,
      },
    })
  };

  /** @description Hide alert message */
  const hide = () => {
    dispatch({
      type: ActionTypes.HIDE_ALERT,
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
