import * as React from 'react';

import * as ActionTypes from '../ContextActionTypes';
import { IAppActions } from '../../types/IAppActions';
import { IAlertState } from './IAlertContext';

/** @description Alert reducer */
export const AlertReducer: React.Reducer<IAlertState, IAppActions> = (state, action):IAlertState => {
  switch (action.type) {
    case ActionTypes.SHOW_ALERT:
      return {
        ...action.payload,
        visible: true
      };

    case ActionTypes.HIDE_ALERT:
      return {
        ...state,
        visible: false
      };

    default:
      return state;
  }
};
