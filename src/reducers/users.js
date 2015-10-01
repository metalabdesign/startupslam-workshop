import { chain } from 'lodash';
import { MESSAGES_FETCH, USERS_UPDATE_PRESENCE } from '../action-types';

export default function users(state = {}, action) {
  switch (action.type) {
  case MESSAGES_FETCH:
    const authors = chain(action.payload)
      .map(msg => msg.user)
      .indexBy('id')
      .value();
    return {...state, ...authors};
  case USERS_UPDATE_PRESENCE:
    const data = action.payload;
    const user = state[action.payload.id];
    return user ? {...state, [user.id]: {...user, online: data.online}} : state;
  default:
    return state;
  }
}
