import { map, indexBy } from 'lodash';
import {
  MESSAGES_FETCH,
  USERS_FETCH,
  USERS_UPDATE_PRESENCE,
} from '../action-types';

export default function users(state = {}, action) {
  switch (action.type) {
  case MESSAGES_FETCH:
    const authors = indexBy(map(action.payload, msg => msg.user), 'id');
    return {...state, ...authors};
  case USERS_UPDATE_PRESENCE:
    const data = action.payload;
    const user = state[action.payload.id];
    return user ? {...state, [user.id]: {...user, online: data.online}} : state;
  case USERS_FETCH:
    const users = indexBy(action.payload, 'id');
    return {...state, ...users};
  default:
    return state;
  }
}
