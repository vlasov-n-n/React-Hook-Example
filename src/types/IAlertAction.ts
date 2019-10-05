export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export interface IShowAlert {
  type: typeof SHOW_ALERT;
  payload: {
    message: string;
    type: string;
  };
}

export interface IHideAlert {
  type: typeof HIDE_ALERT;
}

export type IAlertAction = IShowAlert | IHideAlert;
