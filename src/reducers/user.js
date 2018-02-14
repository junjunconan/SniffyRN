// @flow

import * as types from '../actions/user';

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };

    case types.SIGN_OUT:
      return {};

    default:
      return state;
  }
}
