import {
  FETCH_RESOURCES,
  FETCH_SINGLE_RESOURCE,
} from '../actions'
import update from 'immutability-helper'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RESOURCES:
      return update(state, {
        list: { $set: action.payload.data }
      });
    case FETCH_SINGLE_RESOURCE:
      return update(state, {
        detail: { $set: action.payload.data }
      });
      return action.payload.data;
    default:
      return state;
  }
};