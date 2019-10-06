import { IAlertActions } from '../context/alert/IAlertActions';
import { INotesActions } from '../context/notes/INotesActions';

export type IAppActions = IAlertActions | INotesActions
