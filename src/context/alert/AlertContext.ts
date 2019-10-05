import { createContext } from 'react';
import { IAlertContext } from './IAlertContext';

/** @description Initial context */
const initContext: IAlertContext = {
  show: (message: string, type?: string) => {},
  hide: () => {},
  alert: {
    visible: false,
    message: '',
    type: '',
  },
};

export const AlertContext = createContext<IAlertContext>(initContext);
