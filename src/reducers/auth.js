import update from 'immutability-helper'
import {
  AUTHENTICATE_USER
} from '../actions/types'

const INITIAL_STATE = {
  authenticated: false,
  user: null,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return update(state, {user: {$set: action.payload.user}, authenticated: {$set: true}})
    default:
      return state;
  }
}
