import { NewsActionTypes, NewsReducer, NewsState } from './types';

const initialState: NewsState = {
  list: [],
  single: null,
  requestInProgress: false,
  error: '',
};

export const newsReducer: NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NewsActionTypes.SetNewsError:
      return state;
    case NewsActionTypes.SetNewsList:
      return state;
    case NewsActionTypes.SetNewsRequestInProgress:
      return state;
    case NewsActionTypes.SetSingleNews:
      return state;
    default:
      return state;
  }
};
