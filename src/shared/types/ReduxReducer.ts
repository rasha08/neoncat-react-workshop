import { ReduxAction } from './ReduxAction';

export type ReduxReducer<State, Action extends ReduxAction> = (state: State, action: Action) => State;
