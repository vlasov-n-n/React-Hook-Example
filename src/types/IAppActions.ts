import { IAlertActions } from '../context/alert/IAlertActions';
import { IFirebaseActions } from '../context/firebase/IFirebaseActions';

export type IAppActions = IAlertActions | IFirebaseActions
