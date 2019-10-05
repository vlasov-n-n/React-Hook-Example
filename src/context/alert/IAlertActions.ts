import * as ActionTypes from '../ContextActionTypes'

export interface IShowAlert {
  type: typeof ActionTypes.SHOW_ALERT;
  payload: {
    message: string;
    type: string;
  };
}

export interface IHideAlert {
  type: typeof ActionTypes.HIDE_ALERT;
}

export type IAlertActions = IShowAlert | IHideAlert;
