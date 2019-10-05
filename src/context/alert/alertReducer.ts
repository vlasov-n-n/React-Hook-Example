import * as React from 'react';

import * as ActionTypes from '../../types/IAlertAction';
import { IAppActions } from '../../types/IAppActions';

export interface IAlertState {
  visible?: boolean;
  message?: string;
  type?: string;
}

/** @description Alert reducer */
export const AlertReducer: React.Reducer<IAlertState, IAppActions> = (state, action) => {
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
