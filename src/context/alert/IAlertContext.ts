export interface IAlertState {
  visible?: boolean;
  message?: string;
  type?: string;
}

export interface IAlertContext {
  show: (message: string, type?: string) => void;
  hide: () => void;
  alert: IAlertState;
}
