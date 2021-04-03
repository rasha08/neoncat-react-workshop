import { ReduxAction } from '../types/ReduxAction';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createReduxAction = <ActionType extends ReduxAction>(type: ActionType['type']) => (
  payload?: ActionType['payload'],
) => ({ type, payload });
